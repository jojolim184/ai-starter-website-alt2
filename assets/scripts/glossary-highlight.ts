/**
 * Highlights glossary terms in the current article, ported from the original
 * site's glossary. The wrapping pass runs once, on first highlight; after that
 * the toggle only flips `data-glossary-highlight` on <html> and CSS does the rest.
 */

import { termPattern, resolveTerm, type Term } from '../../src/data/glossary.ts';

const root = document.documentElement;
const button = document.querySelector<HTMLButtonElement>('[data-glossary-highlight-button]');
const label = button?.querySelector<HTMLElement>('[data-highlight-label]');

// Tinting a heading, a caption or a citation number reads as damage rather than
// annotation.
const SKIP = 'h1, h2, h3, h4, figure, figcaption, .footnote-group, .article-sources, .statement';

const buildTerm = (text: string, term: Term) => {
  const span = document.createElement('span');
  span.className = 'term';
  span.dataset.term = term.id;
  span.append(document.createTextNode(text));

  const definition = document.createElement('span');
  definition.className = 'term-def';
  definition.setAttribute('aria-hidden', 'true');
  definition.textContent = `${term.term}. ${term.definition}`;
  span.append(definition);

  return span;
};

let marked = false;

const markProse = () => {
  if (marked) return;
  marked = true;

  const prose = document.querySelector('.article-prose');
  if (!prose) return;

  const walker = document.createTreeWalker(prose, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = (node as Text).parentElement;
      if (!parent || parent.closest(SKIP)) return NodeFilter.FILTER_REJECT;
      return node.textContent?.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  // Collect first, mutate second: splitting nodes mid-walk makes the walker
  // revisit the halves.
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);

  // Each term is marked once per article, at its first mention.
  const claimed = new Set<string>();
  const pattern = termPattern();

  for (const node of nodes) {
    pattern.lastIndex = 0;
    const hits: { index: number; text: string; term: Term }[] = [];

    for (const match of (node.textContent ?? '').matchAll(pattern)) {
      const term = resolveTerm(match[0]);
      if (!term || claimed.has(term.id)) continue;
      claimed.add(term.id);
      hits.push({ index: match.index, text: match[0], term });
    }

    let tail = node;
    let consumed = 0;

    for (const hit of hits) {
      const middle = tail.splitText(hit.index - consumed);
      const rest = middle.splitText(hit.text.length);
      middle.replaceWith(buildTerm(hit.text, hit.term));
      consumed = hit.index + hit.text.length;
      tail = rest;
    }
  }
};

const STORE_KEY = 'clearai-glossary-highlight';

// Storage throws outright in some privacy modes.
const remember = (value: string) => {
  try {
    localStorage.setItem(STORE_KEY, value);
  } catch {
    /* the toggle still works for this visit */
  }
};

const recalled = () => {
  try {
    return localStorage.getItem(STORE_KEY) === 'on';
  } catch {
    return false;
  }
};

const setHighlight = (on: boolean) => {
  if (on) markProse();
  root.toggleAttribute('data-glossary-highlight', on);
  button?.setAttribute('aria-pressed', String(on));
  if (label) label.textContent = on ? 'Clear highlights' : 'Highlight terms';
  remember(on ? 'on' : 'off');
};

if (button) {
  button.addEventListener('click', () => {
    setHighlight(button.getAttribute('aria-pressed') !== 'true');
  });

  if (recalled()) setHighlight(true);
}
