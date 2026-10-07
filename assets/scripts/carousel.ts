/**
 * Every ImageCarousel.astro instance on the page. Each slide, caption and dot
 * is already in the DOM (see the component) — this only ever moves
 * `data-current` and `aria-current`, on request. CSS does the crossfade.
 */

const carousels = document.querySelectorAll<HTMLElement>('[data-carousel]');

for (const carousel of carousels) {
  const slides = carousel.querySelectorAll<HTMLElement>('[data-carousel-slide]');
  const captions = carousel.querySelectorAll<HTMLElement>('[data-carousel-caption]');
  const dots = carousel.querySelectorAll<HTMLButtonElement>('[data-carousel-dot]');
  const prev = carousel.querySelector<HTMLButtonElement>('[data-carousel-prev]');
  const next = carousel.querySelector<HTMLButtonElement>('[data-carousel-next]');

  if (slides.length === 0) continue;

  let current = 0;

  const show = (index: number) => {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => slide.toggleAttribute('data-current', i === current));
    captions.forEach((caption, i) => caption.toggleAttribute('data-current', i === current));
    dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === current)));
  };

  prev?.addEventListener('click', () => show(current - 1));
  next?.addEventListener('click', () => show(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
}
