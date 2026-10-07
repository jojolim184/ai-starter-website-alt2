/**
 * One-second fade held in place, fired once when an element is 15% visible.
 * The CSS leaves everything visible unless <html> carries `.js`, so a failure
 * here leaves content readable rather than blank.
 */

const revealables = document.querySelectorAll<HTMLElement>('.reveal');

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealables.forEach((element) => element.classList.add('revealed'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.15 },
  );

  revealables.forEach((element) => observer.observe(element));
}
