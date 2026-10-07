/**
 * Narrows the glossary by kind and by a typed query. Rows and letter groups are
 * only ever hidden, never rebuilt.
 */

const rows = document.querySelectorAll<HTMLElement>('[data-term-row]');
const letters = document.querySelectorAll<HTMLElement>('[data-letter-group]');
const chips = document.querySelectorAll<HTMLButtonElement>('[data-kind]');
const query = document.querySelector<HTMLInputElement>('[data-glossary-query]');
const count = document.querySelector<HTMLElement>('[data-glossary-count]');

let kind = 'all';

const apply = () => {
  const needle = (query?.value ?? '').trim().toLowerCase();
  let shown = 0;

  rows.forEach((row) => {
    const visible =
      (kind === 'all' || row.dataset.kind === kind) &&
      (needle === '' || (row.dataset.haystack ?? '').includes(needle));
    row.hidden = !visible;
    if (visible) shown += 1;
  });

  letters.forEach((group) => {
    group.hidden = group.querySelector('[data-term-row]:not([hidden])') === null;
  });

  if (count) count.textContent = String(shown);
};

chips.forEach((chip) =>
  chip.addEventListener('click', () => {
    kind = chip.dataset.kind ?? 'all';
    chips.forEach((other) => other.setAttribute('aria-pressed', String(other === chip)));
    apply();
  }),
);

query?.addEventListener('input', apply);
