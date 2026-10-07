/**
 * Every ScalingChart.astro instance on the page. Geometry, dash length, and
 * each landmark's reveal delay are already computed at build time (see the
 * component) — this only ever toggles `data-in-view` on scroll crossings,
 * which CSS reacts to by drawing the trend line and fading in each landmark
 * as the line reaches it. Toggling both ways means scrolling back out resets
 * it, so the next entrance replays the draw — the same idiom linechart.ts
 * and barchart.ts use.
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const charts = document.querySelectorAll<HTMLElement>('[data-scalingchart]');

for (const chart of charts) {
  if (reduceMotion) {
    chart.toggleAttribute('data-in-view', true);
    continue;
  }

  const observer = new IntersectionObserver(
    ([entry]) => chart.toggleAttribute('data-in-view', entry.isIntersecting),
    { threshold: 0.3 },
  );

  observer.observe(chart);
}
