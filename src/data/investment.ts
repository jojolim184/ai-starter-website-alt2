/**
 * Global corporate investment in AI, 2013 to 2024, in billions of US dollars.
 *
 * Totals only — the source chart (images_diagrams/[16]AI_investment_graph.png,
 * Source: Quid, 2024 · Chart: Stanford HAI, 2025 AI Index Report) breaks each
 * year into four deal types (M&A, minority stake, private investment, public
 * offering). That four-way categorical split has no safe home in ClearAI's
 * palette — Signal Red never fills an area, leaving one real hue for what
 * would need four — so this keeps the yearly total only, which is a
 * magnitude-over-time story and takes one sequential hue instead.
 */

export interface YearlyInvestment {
  year: number;
  totalBn: number;
}

export const globalAiInvestment: YearlyInvestment[] = [
  { year: 2013, totalBn: 14.57 },
  { year: 2014, totalBn: 19.04 },
  { year: 2015, totalBn: 25.43 },
  { year: 2016, totalBn: 33.82 },
  { year: 2017, totalBn: 53.72 },
  { year: 2018, totalBn: 79.62 },
  { year: 2019, totalBn: 103.27 },
  { year: 2020, totalBn: 221.87 },
  { year: 2021, totalBn: 360.73 },
  { year: 2022, totalBn: 253.25 },
  { year: 2023, totalBn: 201.0 },
  { year: 2024, totalBn: 252.33 },
];
