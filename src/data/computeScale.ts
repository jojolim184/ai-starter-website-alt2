/**
 * Training compute for notable AI systems, 1950–2025 — traced from
 * images_diagrams/[18]Exponential_increase_ai_scale.jpg (Data source: Epoch,
 * 2024, via Our World in Data).
 *
 * The source plots hundreds of unlabelled models around a fitted trend line;
 * reproducing that scatter would mean inventing data points that don't exist
 * here, so this keeps only what's real and checkable: the trend line's own
 * stated growth rates (doubling every ~21 months from 1950–2010, then every
 * ~6 months since — quoted directly in the chart's own title and annotation)
 * and the eight named landmark models, at ballpark FLOP figures for each
 * (Epoch's own published estimates for AlexNet, AlphaGo Zero, GPT-4 and
 * Gemini 1.0 Ultra; rough historical estimates for the four earlier systems,
 * which predate rigorous FLOP accounting). Both the trend line's exact
 * anchor points and the landmark values are illustrative, not transcribed —
 * disclosed as such in the chart's own source line.
 */

export interface ComputeLandmark {
  year: number;
  flops: number;
  label: string;
  /** true for the post-2010 "deep learning era" landmarks. */
  era2010?: boolean;
  /** Label offset in SVG user units, to keep names off each other and the dot. */
  dx: number;
  dy: number;
}

/** The two-segment trend line's anchor points, in (year, FLOP). */
export const trendAnchors: [number, number][] = [
  [1950, 3.16e2],
  [2010, 3.16e13],
  [2025, 1e26],
];

export const computeLandmarks: ComputeLandmark[] = [
  { year: 1950, flops: 2e2, label: 'Theseus', dx: 8, dy: 3 },
  { year: 1958, flops: 3e6, label: 'Perceptron Mark 1', dx: 8, dy: -8 },
  { year: 1986, flops: 3e7, label: 'Back-propagation', dx: 8, dy: 14 },
  { year: 1992, flops: 1e10, label: 'TD-Gammon', dx: 8, dy: -8 },
  { year: 2012, flops: 5e17, label: 'AlexNet', era2010: true, dx: -10, dy: 16 },
  { year: 2017, flops: 2e23, label: 'AlphaGo Zero', era2010: true, dx: -10, dy: -10 },
  { year: 2023, flops: 2e25, label: 'GPT-4', era2010: true, dx: -10, dy: 4 },
  { year: 2024, flops: 5e25, label: 'Gemini 1.0 Ultra', era2010: true, dx: -10, dy: -10 },
];
