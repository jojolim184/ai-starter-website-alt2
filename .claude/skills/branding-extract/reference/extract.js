/*
 * Computed-style harvester for branding-extract Phase 2.
 *
 * Paste the whole file into javascript_tool as `text`. It walks every rendered
 * element, records computed styles weighted by how much screen area (or how
 * many characters) each value covers, stores the tallies on `window.__census`,
 * and returns a SHORT first slice.
 *
 * The tool that runs this truncates long results, so the census is read in
 * slices. After the first call, pull more buckets with:
 *
 *   window.__census.pick({ typeCombo: 20, borderWidth: 8, radius: 8 })
 *   window.__census.pick({ spacing: 20, maxWidth: 6, transition: 6, shadow: 5 })
 *
 * Each value is `<value> [<weight>]`. Buckets: background, text, fontFamily,
 * typeCombo, borderWidth, borderColor, radius, shadow, gradient, transition,
 * spacing, maxWidth, textMeasure. Also: window.__census.fonts (faces the page
 * actually loaded) and window.__census.headings.
 *
 * Area-weighting matters: a page band that covers 40% of the viewport says more
 * about the brand than forty 12px labels. Raw element counts get this backwards.
 *
 * Run it once per page, then merge the censuses by hand across pages.
 */
(() => {
  const px = (v) => Math.round(parseFloat(v) || 0);
  const isNone = (v) => !v || v === 'none' || v === 'normal' || v === 'auto' || v === '0px';

  // rgb(a) -> #hex, so values from different pages compare as strings.
  const hex = (v) => {
    if (!v) return null;
    const m = v.match(/rgba?\(([^)]+)\)/);
    if (!m) return v;
    const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
    const [r, g, b] = p;
    const a = p.length > 3 ? p[3] : 1;
    if (a === 0) return null;                       // fully transparent: not a colour
    const h = '#' + [r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('').toUpperCase();
    return a < 1 ? `${h} @${a}` : h;
  };

  // Every tally is {value: weight}; weight is px^2 of area, characters of text,
  // or 1 for things neither applies to (a border width, a transition).
  const t = {};
  const bump = (bucket, value, weight = 1) => {
    if (value === null || value === undefined || value === '') return;
    t[bucket] = t[bucket] || {};
    t[bucket][value] = (t[bucket][value] || 0) + weight;
  };

  const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'META', 'LINK', 'HEAD', 'TITLE', 'BR']);
  let counted = 0;

  for (const el of document.querySelectorAll('*')) {
    if (SKIP.has(el.tagName)) continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;   // not rendered
    const s = getComputedStyle(el);
    if (s.visibility === 'hidden' || s.display === 'none') continue;
    // Note: opacity 0 elements are kept. Scroll-reveal sites hold everything
    // below the fold at opacity 0 until it scrolls in, and skipping them loses
    // the whole page.
    counted++;

    const area = Math.round(r.width * r.height);
    const text = (el.textContent || '').trim();
    // Only leaf-ish nodes own their text, otherwise every ancestor double-counts.
    const ownsText = text.length > 0 && el.children.length === 0;

    bump('background', hex(s.backgroundColor), area);
    if (ownsText) {
      bump('text', hex(s.color), text.length);
      bump('fontFamily', s.fontFamily, text.length);
      // The type scale: the combination is the token, not the size alone.
      bump('typeCombo', [
        px(s.fontSize) + 'px',
        s.fontWeight,
        s.fontStyle !== 'normal' ? s.fontStyle : '',
        'lh:' + (isNone(s.lineHeight) ? 'n' : (parseFloat(s.lineHeight) / parseFloat(s.fontSize)).toFixed(2)),
        isNone(s.letterSpacing) ? '' : 'ls:' + s.letterSpacing,
        s.textTransform !== 'none' ? s.textTransform : '',
        (s.fontFamily || '').split(',')[0].replace(/["']/g, ''),
      ].filter(Boolean).join('/'), text.length);
    }

    // Borders: record each distinct edge, since one-sided rules are a real idiom.
    for (const side of ['Top', 'Right', 'Bottom', 'Left']) {
      const w = s[`border${side}Width`];
      if (parseFloat(w) > 0 && s[`border${side}Style`] !== 'none') {
        bump('borderWidth', w + ' ' + s[`border${side}Style`]);
        bump('borderColor', hex(s[`border${side}Color`]));
      }
    }

    const radii = [s.borderTopLeftRadius, s.borderTopRightRadius, s.borderBottomRightRadius, s.borderBottomLeftRadius];
    if (radii.some((v) => parseFloat(v) > 0)) {
      bump('radius', radii.every((v) => v === radii[0]) ? radii[0] : radii.join(' '));
    }

    if (!isNone(s.boxShadow)) bump('shadow', s.boxShadow.slice(0, 70));
    if (!isNone(s.transition) && s.transition !== 'all 0s ease 0s') bump('transition', s.transition.slice(0, 60));
    if (s.backgroundImage && s.backgroundImage.includes('gradient')) bump('gradient', s.backgroundImage.slice(0, 90));

    // Spacing rhythm: only non-zero, and only values a human would have chosen.
    for (const prop of ['marginTop', 'marginBottom', 'paddingTop', 'paddingBottom', 'paddingLeft', 'gap', 'rowGap']) {
      const v = px(s[prop]);
      if (v > 0 && v <= 400) bump('spacing', v + 'px');
    }

    // Container widths: what the measure of the page actually is.
    if (r.width > 200) {
      const mw = px(s.maxWidth);
      if (mw > 200 && mw < 2200) bump('maxWidth', mw + 'px');
    }
    if (ownsText && r.width > 200) bump('textMeasure', (Math.round(r.width / 40) * 40) + 'px');
  }

  // Fonts the page actually loaded, as opposed to what CSS asked for.
  let fonts = [];
  try {
    const seen = new Set();
    document.fonts.forEach((f) => { if (f.status === 'loaded') seen.add(`${f.family} ${f.weight} ${f.style}`); });
    fonts = [...seen];
  } catch (e) { fonts = ['(unavailable: ' + e.message + ')']; }

  const rank = (bucket, n) =>
    Object.entries(t[bucket] || {})
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map(([v, w]) => `${v} [${w}]`);

  window.__census = {
    tallies: t,
    fonts,
    headings: [...document.querySelectorAll('h1,h2,h3')].slice(0, 12).map((h) => h.tagName + ': ' + h.textContent.trim().slice(0, 60)),
    stylesheets: [...document.styleSheets].map((s) => s.href).filter(Boolean),
    pick: (opts) => {
      const out = {};
      for (const [k, n] of Object.entries(opts)) out[k] = rank(k, n);
      return JSON.stringify(out, null, 1);
    },
  };

  // First slice: kept short so it survives the tool's output limit.
  return JSON.stringify({
    url: location.href,
    title: document.title,
    viewport: `${innerWidth}x${innerHeight}`,
    pageHeight: document.body.scrollHeight,
    elementsCounted: counted,
    background: rank('background', 10),
    text: rank('text', 9),
    fonts,
    next: 'window.__census.pick({typeCombo:20, borderWidth:6, borderColor:6, radius:8}) then ({spacing:18, maxWidth:6, shadow:5, gradient:3, transition:6, textMeasure:5})',
  }, null, 1);
})();
