/**
 * The Western AI-stock selloff that followed DeepSeek's R1 release, 24–28
 * January 2025 — the diagram traced from
 * images_diagrams/[17]US_Stock_Selloff.png (source: Wall Street Journal, as
 * of 28 January 2025).
 *
 * The source chart plots dense intraday ticks with no printed values, so
 * these six checkpoints per line are read off the chart's shape rather than
 * transcribed from labelled data points — close enough to carry the story
 * (a sharp break at the DeepSeek news, Nvidia falling furthest) without
 * pretending to intraday precision the source image itself doesn't label.
 *
 * Four series, one hue: the essay's own text is about Nvidia's drop
 * specifically ("$593 billion" wiped off its value), so this is an
 * *emphasis* chart (dataviz skill: "one series is the point, rest are
 * context") rather than a four-hue categorical one — which also sidesteps
 * ClearAI's real constraint here, that Signal Red is the only hue on the
 * palette not already reserved, and a genuine four-way categorical split
 * would need three more.
 */

export interface StockSeries {
  name: string;
  /** Percent return at each of `selloffCheckpoints`, in order. */
  points: number[];
  /** The one series the essay's text is actually about. */
  emphasis?: boolean;
}

export const selloffCheckpoints = ['Jan 24', 'Jan 25', 'Jan 26', 'Jan 27 AM', 'Jan 27 PM', 'Jan 28'];

export const aiStockSelloff: StockSeries[] = [
  { name: 'Nvidia', points: [0, -2, -6, -6, -19, -21], emphasis: true },
  { name: 'Broadcom', points: [0, 5, 2, 2, -10, -15] },
  { name: 'Micron', points: [-1, -2, -3, -3, -10, -12] },
  { name: 'S&P 500 tech stocks', points: [0, -1, -1, -2, -6, -7] },
];
