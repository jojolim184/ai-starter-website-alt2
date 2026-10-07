/**
 * Every LineChart.astro instance on the page. Geometry and dash length are
 * already computed at build time (see the component) — this only ever
 * toggles `data-in-view` on scroll crossings, which CSS reacts to by
 * animating each line's `stroke-dashoffset` from its full length to 0 and
 * fading in its end marker and label. Toggling both ways (not just once)
 * means scrolling the chart back out resets it, so the next entrance
 * replays the draw — the same idiom barchart.ts uses for its bars.
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const charts = document.querySelectorAll<HTMLElement>('[data-linechart]');

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
