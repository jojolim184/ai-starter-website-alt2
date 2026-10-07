/**
 * Arithmetic for the instrument panel's 1950 to 2026 axis.
 *
 * This is the only real maths in the project, which is why it lives in a plain
 * module with assertions beside it rather than inline in a component. A wrong
 * answer here is silent: markers land in plausible-looking but incorrect
 * positions and nothing throws.
 */

/** Viewport the axis is drawn into, in SVG user units. */
export interface AxisBounds {
  /** Left edge of the plotted area. */
  x: number;
  /** Width of the plotted area. */
  width: number;
  /** First year at `x`. */
  startYear: number;
  /** Last year at `x + width`. */
  endYear: number;
}

/**
 * Position a year along the axis.
 *
 * Years outside the span are clamped to the ends rather than allowed to
 * overflow, because a marker drawn outside the viewBox vanishes silently.
 */
export function yearToX(year: number, bounds: AxisBounds): number {
  const { x, width, startYear, endYear } = bounds;

  if (endYear === startYear) {
    throw new RangeError('Axis span cannot be zero years');
  }

  const ratio = (year - startYear) / (endYear - startYear);
  const clamped = Math.min(Math.max(ratio, 0), 1);

  return x + clamped * width;
}

/**
 * The rectangle covering one chapter's span, for the highlight bar.
 *
 * Returns width 0 for a zero-length span rather than a negative width, and
 * orders the ends so a reversed span still draws.
 */
export function spanToRect(
  startYear: number,
  endYear: number,
  bounds: AxisBounds,
): { x: number; width: number } {
  const a = yearToX(startYear, bounds);
  const b = yearToX(endYear, bounds);

  return {
    x: Math.min(a, b),
    width: Math.abs(b - a),
  };
}

/** Decade ticks inside the span, for the axis rule. */
export function decadeTicks(bounds: AxisBounds): { year: number; x: number }[] {
  const { startYear, endYear } = bounds;
  const first = Math.ceil(startYear / 10) * 10;
  const ticks: { year: number; x: number }[] = [];

  for (let year = first; year <= endYear; year += 10) {
    ticks.push({ year, x: yearToX(year, bounds) });
  }

  return ticks;
}
