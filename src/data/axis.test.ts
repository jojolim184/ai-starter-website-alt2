import { test } from 'node:test';
import assert from 'node:assert/strict';

import { yearToX, spanToRect, decadeTicks, type AxisBounds } from './axis.ts';
import { chapters, AXIS_START, AXIS_END } from './chapters.ts';

/** A deliberately offset, non-round viewport so off-by-one errors show up. */
const bounds: AxisBounds = {
  x: 20,
  width: 380,
  startYear: 1950,
  endYear: 2026,
};

test('yearToX pins the span ends to the viewport edges', () => {
  assert.equal(yearToX(1950, bounds), 20);
  assert.equal(yearToX(2026, bounds), 400);
});

test('yearToX places the midpoint of the span at the middle', () => {
  // 1950 to 2026 is 76 years, so 1988 is the midpoint.
  assert.equal(yearToX(1988, bounds), 210);
});

test('yearToX is linear in the year', () => {
  const perYear = 380 / 76; // 5 user units
  assert.equal(yearToX(1951, bounds) - yearToX(1950, bounds), perYear);
  assert.equal(yearToX(2026, bounds) - yearToX(2025, bounds), perYear);
});

test('yearToX clamps rather than overflowing the viewBox', () => {
  assert.equal(yearToX(1900, bounds), 20);
  assert.equal(yearToX(2100, bounds), 400);
});

test('yearToX rejects a zero-length axis instead of dividing by zero', () => {
  assert.throws(
    () => yearToX(1980, { ...bounds, startYear: 2000, endYear: 2000 }),
    RangeError,
  );
});

test('spanToRect covers the chapter span', () => {
  const rect = spanToRect(1986, 2017, bounds);
  assert.equal(rect.x, yearToX(1986, bounds));
  assert.equal(rect.width, yearToX(2017, bounds) - yearToX(1986, bounds));
});

test('spanToRect never returns a negative width', () => {
  const reversed = spanToRect(2017, 1986, bounds);
  assert.equal(reversed.x, yearToX(1986, bounds));
  assert.ok(reversed.width > 0);

  const empty = spanToRect(1990, 1990, bounds);
  assert.equal(empty.width, 0);
});

test('decadeTicks runs from the first decade inside the span', () => {
  const ticks = decadeTicks(bounds);
  assert.equal(ticks[0].year, 1950);
  assert.equal(ticks.at(-1)?.year, 2020);
  assert.equal(ticks.length, 8); // 1950 through 2020
  assert.equal(ticks[0].x, 20);
});

test('decadeTicks starts at the next decade when the span begins mid-decade', () => {
  const ticks = decadeTicks({ ...bounds, startYear: 1955 });
  assert.equal(ticks[0].year, 1960);
});

// Guards on the content, not the maths: the rail and the axis both index
// chapters by id, and a typo there fails silently as a rail that never
// activates.
test('every chapter sits inside the axis span', () => {
  for (const chapter of chapters) {
    assert.ok(
      chapter.startYear >= AXIS_START && chapter.endYear <= AXIS_END,
      `${chapter.id} runs outside ${AXIS_START}-${AXIS_END}`,
    );
    assert.ok(chapter.endYear > chapter.startYear, `${chapter.id} span is not forward`);
  }
});

test('chapter and section ids are unique', () => {
  const ids = chapters.flatMap((c) => [c.id, ...c.sections.map((s) => s.id)]);
  assert.equal(new Set(ids).size, ids.length, 'duplicate anchor id');
});

test('every event year falls inside its own chapter span', () => {
  for (const chapter of chapters) {
    for (const event of chapter.events) {
      assert.ok(
        event.year >= chapter.startYear && event.year <= chapter.endYear,
        `${chapter.id}: ${event.year} ${event.label} is outside ${chapter.period}`,
      );
    }
  }
});
