/**
 * The three phases, their sourced events, and the figures the instrument panel
 * reads. Every value here traces to research/updated_base_research.md.
 *
 * On what is deliberately NOT here: a continuous performance series. The
 * research carries a hundred-million-user count, a value wiped off one
 * company's market cap, and a year of infrastructure spending. Those measure
 * different things on different scales, so plotting them as one trend line
 * would invent a claim the source does not make. The panel plots dates, which
 * are real and continuous, and puts the numbers in labelled tiles where each
 * one keeps its unit.
 */

export interface Figure {
  /** The number itself, as it should read on the tile. */
  value: string;
  /** What it measures. Uppercase is applied by CSS, not stored here. */
  label: string;
}

export interface ChapterEvent {
  year: number;
  label: string;
}

export interface Chapter {
  /** Matches the `id` on the corresponding <section> in index.mdx. */
  id: string;
  /** Roman numeral, per DESIGN.md's numbered-section idiom. */
  numeral: string;
  title: string;
  startYear: number;
  endYear: number;
  /** Shown as the panel's period label. */
  period: string;
  /** One line, set in caption type beneath the axis. */
  reading: string;
  events: ChapterEvent[];
  figures: Figure[];
  /** Sub-sections, for the timeline rail's inner markers. */
  sections: { id: string; label: string }[];
}

/** The full span the instrument axis is drawn against. */
export const AXIS_START = 1950;
export const AXIS_END = 2026;

export const chapters: Chapter[] = [
  {
    id: 'foundations',
    numeral: 'I',
    title: 'Foundations',
    startYear: 1950,
    endYear: 2017,
    period: '1950 — 2017',
    reading: "From Turing's imitation game to the architecture behind every model today.",
    events: [
      { year: 1950, label: 'Turing proposes the imitation game' },
      { year: 1956, label: 'Dartmouth workshop coins "artificial intelligence"' },
      { year: 1974, label: 'The first AI Winter begins' },
      { year: 1997, label: 'Deep Blue beats Garry Kasparov' },
      { year: 2012, label: 'AlexNet sparks the deep-learning boom' },
      { year: 2017, label: '"Attention Is All You Need" introduces the transformer' },
    ],
    figures: [
      { value: '1956', label: 'Year the field got its name, at Dartmouth' },
      { value: '6yrs', label: 'Length of the first AI Winter, 1974 to 1980' },
      { value: '2017', label: 'Year the transformer paper changed everything' },
    ],
    sections: [
      { id: 'alan-turing', label: 'Alan Turing' },
      { id: 'ai-winter-resurgence-boom', label: 'AI Winter, Resurgence and BOOM' },
    ],
  },
  {
    id: 'build-up',
    numeral: 'II',
    title: 'The Build-Up',
    startYear: 2018,
    endYear: 2021,
    period: '2018 — 2021',
    reading: 'Two companies worked out what the transformer could do, and a rival lab was born.',
    events: [
      { year: 2018, label: 'BERT and GPT-1' },
      { year: 2019, label: 'GPT-2 held back over misuse fears' },
      { year: 2020, label: 'GPT-3 shows scale changes what a model can do' },
      { year: 2021, label: 'Anthropic founded' },
      { year: 2021, label: 'DALL-E turns text into images' },
    ],
    figures: [
      { value: '2015', label: 'Year OpenAI was founded, with backing from Elon Musk and Sam Altman' },
      { value: '100x', label: "How much bigger GPT-3 was than GPT-2" },
      { value: '2021', label: 'Year Anthropic split from OpenAI to focus on AI safety' },
    ],
    sections: [
      { id: 'y2018-2019', label: '2018–2019: Learning to read and write' },
      { id: 'y2020', label: '2020: Bigger is better' },
      { id: 'y2021', label: '2021: A new lab, and machines that make pictures' },
    ],
  },
  {
    id: 'public',
    numeral: 'III',
    title: 'Going Public',
    startYear: 2022,
    endYear: 2026,
    period: '2022 — 2026',
    reading: 'ChatGPT made AI a household name, and the race has barely paused since.',
    events: [
      { year: 2022, label: 'ChatGPT launches, 30 November' },
      { year: 2023, label: 'GPT-4, Claude, Gemini and Grok all ship' },
      { year: 2024, label: 'OpenAI’s o1 introduces reasoning models' },
      { year: 2025, label: 'DeepSeek R1 shocks the market' },
      { year: 2025, label: 'Stargate announces $500bn in AI infrastructure' },
      { year: 2026, label: 'The "Space Race": four frontier labs in three weeks' },
    ],
    figures: [
      { value: '100M', label: 'Users ChatGPT reached in about two months' },
      { value: '$593bn', label: "Wiped off Nvidia's value after the DeepSeek shock" },
      { value: '$690bn', label: '2026 AI infrastructure spend by the five largest US cloud firms' },
    ],
    sections: [
      { id: 'y2022', label: '2022: The year everything went public' },
      { id: 'y2023', label: '2023: The gold rush' },
      { id: 'y2024', label: '2024: Talking, seeing, and starting to think' },
      { id: 'y2025', label: '2025: The DeepSeek shock, the money, and the flood' },
      { id: 'y2025-2026', label: 'Late 2025 into 2026: AI’s "Space Race"' },
      { id: 'today', label: 'Where things stand today' },
    ],
  },
];

/** Nav pill anchors. One word each: the pill has room for three plus the mark. */
export const navLinks = [
  { href: '#foundations', label: 'Foundations' },
  { href: '#build-up', label: 'Build-Up' },
  { href: '#public', label: 'Public' },
  { href: '#sources', label: 'Sources' },
];
