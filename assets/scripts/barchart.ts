/**
 * Every BarChart.astro instance on the page. Bars and value labels are
 * already at their final geometry/text in the markup (see the component) —
 * this toggles `data-in-view` on every crossing, not just the first: scrolling
 * the chart into view grows the bars from the baseline and counts each label
 * up from 0 (CSS on `var(--count)`, DESIGN.md's documented "a figure counts
 * rather than slides" duration); scrolling it back out reverses both, so the
 * next entrance replays the same shoot-up rather than finding the bars
 * already grown.
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const COUNT_MS = 500; // matches --count in global.css

const charts = document.querySelectorAll<HTMLElement>('[data-barchart]');

for (const chart of charts) {
  const prefix = chart.dataset.prefix ?? '';
  const suffix = chart.dataset.suffix ?? '';
  const values = chart.querySelectorAll<SVGTextElement>('[data-chart-value]');

  // Bumped every time a label starts counting, and checked inside the loop:
  // if a second entrance starts before the first finishes (a quick scroll
  // in-out-in), the stale loop sees its epoch superseded and stops instead of
  // fighting the new one over the same text node.
  const epoch = new Map<SVGTextElement, number>();

  const countUp = () => {
    if (reduceMotion) return; // final text is already server-rendered

    for (const label of values) {
      const target = Number(label.dataset.value);
      if (Number.isNaN(target)) continue;

      const mine = (epoch.get(label) ?? 0) + 1;
      epoch.set(label, mine);
      label.textContent = `${prefix}${(0).toFixed(2)}${suffix}`;

      const start = performance.now();

      const step = (now: number) => {
        if (epoch.get(label) !== mine) return; // superseded by a newer run
        const progress = Math.min((now - start) / COUNT_MS, 1);
        const eased = 1 - (1 - progress) ** 3; // ease-out cubic
        label.textContent = `${prefix}${(target * eased).toFixed(2)}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    }
  };

  if (reduceMotion) {
    chart.toggleAttribute('data-in-view', true);
    continue;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      chart.toggleAttribute('data-in-view', entry.isIntersecting);
      if (entry.isIntersecting) countUp();
    },
    { threshold: 0.3 },
  );

  observer.observe(chart);
}
