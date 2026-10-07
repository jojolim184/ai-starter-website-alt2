/**
 * The hub's two controls: filter pills that narrow the page to one group, and
 * per-group toggles that fold a group's cards away. Both only flip `hidden`
 * and ARIA state; every visual consequence is CSS.
 */

const filters = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
const groups = document.querySelectorAll<HTMLElement>('[data-group]');

const applyFilter = (value: string) => {
  filters.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === value)));
  groups.forEach((group) => {
    group.hidden = value !== 'all' && group.dataset.group !== value;
  });
  // Cards revealed by a filter change may never cross the observer threshold
  // while the reader stays put, so show them outright.
  document.querySelectorAll('[data-group]:not([hidden]) .reveal').forEach((el) => el.classList.add('revealed'));
};

filters.forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter ?? 'all')));

document.querySelectorAll<HTMLButtonElement>('[data-group-toggle]').forEach((toggle) => {
  const body = document.getElementById(toggle.getAttribute('aria-controls') ?? '');
  const label = toggle.querySelector<HTMLElement>('[data-toggle-label]');
  if (!body || !label) return;

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    body.hidden = !open;
    label.textContent = open ? 'Hide' : 'Show';
  });
});
