/**
 * The source list, extracted from research/updated_base_research.md.
 *
 * Numbering is the research document's own and the prose cites into it, so
 * renumbering here silently breaks every citation. The assertions in
 * references.test.ts guard that: they check the list is contiguous from 1 and
 * that every number the prose cites actually exists.
 *
 * `text` carries IEEE-style markup (<em> for publication titles) and is
 * rendered with set:html. It is committed content, not user input.
 */

export interface Reference {
  n: number;
  /** Citation text. Contains <em> and nothing else. */
  text: string;
  /** Absent for books and for entries identified only by DOI. */
  url?: string;
}

/**
 * Where a citation should point on the open web.
 *
 * Most entries without a `url` still identify themselves precisely: a DOI or an
 * arXiv number resolves to the source just as well as a link would, so derive
 * one rather than hand-maintaining a second URL field. Books and conference
 * papers with neither return undefined, and the prose then renders the phrase
 * unlinked.
 */
export function sourceUrl(reference: Reference | undefined): string | undefined {
  if (!reference) return undefined;
  if (reference.url) return reference.url;

  // Always the last thing in the citation, and the sentence's full stop is not
  // part of it.
  const doi = /doi:\s*(\S+?)\.?$/.exec(reference.text)?.[1];
  if (doi) return `https://doi.org/${doi}`;

  const arxiv = /arXiv:(\d{4}\.\d{4,5})/.exec(reference.text)?.[1];
  if (arxiv) return `https://arxiv.org/abs/${arxiv}`;

  return undefined;
}

export const references: Reference[] = [
  { n: 1, text: "\"How Alan Turing and his test became AI legend,\" <em>HowStuffWorks</em>, Jun. 20, 2025.", url: "https://electronics.howstuffworks.com/future-tech/alan-turing-test.htm" },
  { n: 2, text: "A. M. Turing, \"Computing machinery and intelligence,\" <em>Mind</em>, vol. LIX, no. 236, pp. 433–460, Oct. 1950.", url: "https://courses.cs.umbc.edu/471/papers/turing.pdf" },
  { n: 3, text: "\"Artificial intelligence (AI) coined at Dartmouth,\" <em>Dartmouth College</em>.", url: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth" },
  { n: 4, text: "\"The top 20 milestones in AI (1943 to present),\" <em>Media and the Machine</em>, Mar. 7, 2025.", url: "https://mediaandthemachine.substack.com/p/the-top-20-milestones-in-ai-1943" },
  { n: 5, text: "\"History of artificial intelligence: Complete timeline 1950–2026,\" <em>explainX.ai</em>, Jul. 16, 2026.", url: "https://explainx.ai/blog/history-of-artificial-intelligence-1950-2026" },
  { n: 6, text: "\"The history of AI: A brief timeline of development,\" <em>QuillBot</em>, Mar. 3, 2026.", url: "https://quillbot.com/blog/ai-writing-tools/history-of-ai/" },
  { n: 7, text: "A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, L. Kaiser, and I. Polosukhin, \"Attention is all you need,\" in <em>Proc. 31st Int. Conf. Neural Information Processing Systems (NeurIPS)</em>, 2017.", url: "https://research.google/pubs/attention-is-all-you-need/" },
  { n: 8, text: "H. Konishi, \"OpenAI GPT model release timeline — model lineage, ChatGPT and Codex milestones, and platform availability,\" <em>hidekazu-konishi.com</em>, Jul. 13, 2026.", url: "https://hidekazu-konishi.com/entry/openai_gpt_model_release_timeline.html" },
  { n: 9, text: "\"Anthropic,\" <em>Britannica Money</em>.", url: "https://www.britannica.com/money/Anthropic-PBC" },
  { n: 10, text: "\"DALL-E,\" <em>Wikipedia</em>.", url: "https://en.wikipedia.org/wiki/DALL-E" },
  { n: 11, text: "T. Claburn, \"OpenAI opens its doors to DALL-E text-to-image service,\" <em>The Register</em>, Sep. 29, 2022.", url: "https://www.theregister.com/2022/09/29/openai_ai_imaging_open/" },
  { n: 12, text: "\"FACTBOX — ChatGPT turns 2: Evolution of groundbreaking AI chatbot,\" <em>Anadolu Agency (AA)</em>.", url: "https://www.aa.com.tr/en/science-technology/factbox-chatgpt-turns-2-evolution-of-groundbreaking-ai-chatbot/3408163" },
  { n: 13, text: "A. Arun, \"The AI launch timeline — and where it is going next,\" <em>Arun's TechLog</em>, May 27, 2026.", url: "https://aarun.me/blog/ai-timeline-and-future-reflections/" },
  { n: 14, text: "H. Konishi, \"Anthropic Claude model release timeline — model family tree, capability evolution, and platform availability,\" <em>hidekazu-konishi.com</em>, May 16, 2026.", url: "https://hidekazu-konishi.com/entry/anthropic_claude_model_release_timeline.html" },
  { n: 15, text: "\"Report: Anthropic business breakdown & founding story,\" <em>Contrary Research</em>.", url: "https://research.contrary.com/company/anthropic" },
  { n: 16, text: "\"Claude version history (2023–2026): Complete timeline,\" <em>Techiefied</em>, Jul. 2, 2026.", url: "https://techiefied.com/claude-version-history/" },
  { n: 17, text: "\"Chinese AI models compared: DeepSeek, Qwen, GLM, Kimi (2026),\" <em>GEO Toolbox</em>.", url: "https://geotoolbox.ai/blog/chinese-ai-models-compared" },
  { n: 18, text: "\"What is open-source AI and how could DeepSeek change the industry?,\" <em>World Economic Forum</em>, Feb. 2025.", url: "https://www.weforum.org/stories/2025/02/open-source-ai-innovation-deepseek/" },
  { n: 19, text: "W. D. Heaven, \"How DeepSeek ripped up the AI playbook — and why everyone's going to follow it,\" <em>MIT Technology Review</em>, Jan. 31, 2025.", url: "https://www.technologyreview.com/2025/01/31/1110740/how-deepseek-ripped-up-the-ai-playbook-and-why-everyones-going-to-follow-it/" },
  { n: 20, text: "\"DeepSeek rocked Silicon Valley in January 2025 — one year on and it looks set to shake things up again with a powerful new model release,\" <em>IT Pro</em>, Jan. 20, 2026.", url: "https://www.itpro.com/technology/artificial-intelligence/deepseek-r1-one-year-anniversary-what-next" },
  { n: 21, text: "M. Zeff, \"OpenAI's GPT-5 is here,\" <em>TechCrunch</em>, Aug. 7, 2025.", url: "https://techcrunch.com/2025/08/07/openais-gpt-5-is-here/" },
  { n: 22, text: "\"Stargate Project: OpenAI's $500B AI data center plan,\" <em>IntuitionLabs</em>, Oct. 8, 2025.", url: "https://intuitionlabs.ai/articles/openai-stargate-datacenter-details" },
  { n: 23, text: "\"2026: Another year of AI bubble not bursting?,\" <em>Investing.com</em>, Jan. 2, 2026.", url: "https://www.investing.com/analysis/2026-another-year-of-ai-bubble-not-bursting-200672634" },
  { n: 24, text: "\"2026 AI outlook: Agentic breakthroughs and bubble risks,\" <em>CMC Markets</em>.", url: "https://www.cmcmarkets.com/en-nz/analysis/2026-ai-outlook" },
  { n: 25, text: "MEXC Learn Editor, \"China's top AI models in 2026: DeepSeek, Qwen, Kimi, Doubao and the new AI race,\" <em>MEXC Learn</em>.", url: "https://www.mexc.com/learn/article/chinas-top-ai-models-in-2026-deepseek-qwen-kimi-doubao-and-the-new-ai-race/1" },
  { n: 26, text: "\"China's Moonshot AI releases open-source model to reclaim market position,\" <em>Reuters</em>.", url: "https://tr.tradingview.com/news/reuters.com,2025:newsml_L1N3T807D:0-china-s-moonshot-ai-releases-open-source-model-to-reclaim-market-position" },
  { n: 27, text: "\"The AI model race reaches singularity speed,\" <em>Vertu</em>, Dec. 15, 2025.", url: "https://vertu.com/lifestyle/the-ai-model-race-reaches-singularity-speed" },
  { n: 28, text: "S. Vanian, \"Google releases its heavily hyped Gemini 3 AI in a sweeping rollout — even Search gets it on day one,\" <em>Fortune</em>, Nov. 18, 2025.", url: "https://fortune.com/2025/11/18/google-releases-gemini-3-ai-model-search-ai-overviews/" },
  { n: 29, text: "\"Claude (AI),\" <em>Wikipedia</em>.", url: "https://en.wikipedia.org/wiki/Claude_(AI)" },
  { n: 30, text: "\"Best Chinese AI models 2026: Kimi K3, DeepSeek, Qwen,\" <em>Layer3 Labs</em>.", url: "https://www.layer3labs.io/comparisons/best-chinese-ai-models" },
  { n: 31, text: "N. Patience, \"AI capex 2026: The $690B infrastructure sprint,\" <em>Futurum Group</em>, Feb. 12, 2026.", url: "https://futurumgroup.com/insights/ai-capex-2026-the-690b-infrastructure-sprint/" },
  { n: 32, text: "\"Stargate updates: OpenAI, Oracle building Michigan data center,\" <em>CNBC</em>, Jun. 1, 2026.", url: "https://www.cnbc.com/2026/06/01/stargate-project-michigan-live-updates.html" },

  // 33–47: sources for the site's own figures (photos and chart data),
  // from images_diagrams_sources.txt.
  { n: 33, text: "\"Enigma machine,\" <em>Smithsonian Magazine</em>.", url: "https://www.smithsonianmag.com/smart-news/wwii-enigma-machine-found-flea-market-sells-51000-180964053/" },
  { n: 34, text: "\"Case study: Alan Turing and the Bombe,\" <em>UCSD VIS 159</em>.", url: "https://ucsdvis159.wordpress.com/2015/03/16/case-study-alan-turing-and-the-bombe/" },
  { n: 35, text: "\"Alan Turing, Enigma code-breaker and computer pioneer, wins royal pardon,\" <em>The New York Times</em>, Dec. 24, 2013.", url: "https://www.nytimes.com/2013/12/24/world/europe/alan-turing-enigma-code-breaker-and-computer-pioneer-wins-royal-pardon.html" },
  { n: 36, text: "\"Kasparov vs. Deep Blue,\" <em>Computer History Museum</em>, Mastering the Game.", url: "https://www.computerhistory.org/chess/stl-431e1a07b22e1/" },
  { n: 37, text: "\"Sam Altman,\" <em>The New York Times</em>, Mar. 31, 2023.", url: "https://www.nytimes.com/2023/03/31/technology/sam-altman-open-ai-chatgpt.html" },
  { n: 38, text: "\"ChatGPT,\" <em>Eastern Herald</em>.", url: "https://easternherald.com/hub/chatgpt/" },
  { n: 39, text: "\"Google CEO Sundar Pichai,\" <em>The Telegraph</em>, via Jay Watson.", url: "https://www.jaywatson.com/blog/5514/editorial-google-ceo-sundar-pichai-telegraph-uk/" },
  { n: 40, text: "\"Gemini,\" <em>Google</em>.", url: "https://gemini.google.com/app" },
  { n: 41, text: "\"Dario Amodei,\" <em>World Economic Forum</em>.", url: "https://www.weforum.org/people/dario-amodei/" },
  { n: 42, text: "\"Claude,\" <em>PCMag Australia</em>.", url: "https://au.pcmag.com/ai/111916/claude" },
  { n: 43, text: "\"Mark Zuckerberg,\" <em>Forbes</em>.", url: "https://www.forbes.com/pictures/hjhj45fme/mark-zuckerberg-4/" },
  { n: 44, text: "\"Meta's Llama 4 is coming soon,\" <em>The Gist</em>.", url: "https://getthegist.beehiiv.com/p/meta-s-llama-4-is-coming-soon" },
  { n: 45, text: "\"Elon Musk portrait,\" <em>Amazon</em>.", url: "https://us.amazon.com/ConversationPrints-Portrait-GLOSSY-POSTER-PICTURE/dp/B0DRF9XHS9" },
  { n: 46, text: "\"SpaceX/xAI launches Grok bot as always-on AI workforce for subscribers,\" <em>Technobezz</em>.", url: "https://www.technobezz.com/news/spacexai-launches-grok-bot-as-always-on-ai-workforce-for-subscribers" },
  { n: 47, text: "\"The 2025 AI Index Report: Economy,\" <em>Stanford HAI</em>.", url: "https://hai.stanford.edu/ai-index/2025-ai-index-report/economy" },

  // 48–59: sources for the Chinese CEO/chatbot figures, from
  // images_diagrams_sources.txt.
  { n: 48, text: "\"Liang Wenfeng,\" <em>AI Magazine</em>.", url: "https://aimagazine.com/news/liang-wenfeng-top-100-ai-leaders-2026" },
  { n: 49, text: "\"DeepSeek,\" <em>Noqode</em>.", url: "https://www.noqode.fr/en/outils/deepseek" },
  { n: 50, text: "\"Jack Ma,\" <em>Pinterest</em>.", url: "https://de.pinterest.com/pin/771311873726425766/" },
  { n: 51, text: "\"Qwen,\" <em>SearchYour.ai</em>.", url: "https://www.searchyour.ai/en/qwen-ai" },
  { n: 52, text: "\"Yang Zhilin, the founder of China's AI Kimi,\" <em>Our China Story</em>.", url: "https://www.ourchinastory.com/en/17187/Yang-Zhilin,-the-founder-of-China%27s-AI-Kimi-is-a-" },
  { n: 53, text: "\"Kimi,\" <em>SearchYour.ai</em>.", url: "https://www.searchyour.ai/en/kimi-ai" },
  { n: 54, text: "\"TikTok CEO Shou Zi Chew,\" <em>Wikimedia Commons</em>.", url: "https://commons.wikimedia.org/wiki/File:TikTok_CEO_Shou_Zi_Chew.jpg" },
  { n: 55, text: "\"Doubao announced the AI programming [tool],\" <em>Data Yuan</em>.", url: "https://datayuan.substack.com/p/doubao-announced-the-ai-programming/comments" },
  { n: 56, text: "\"Peng Zhang,\" <em>Whale Insider</em>, via X.", url: "https://x.com/WhaleInsider/status/2071110794910089368" },
  { n: 57, text: "\"GLM 5.2, Z.ai,\" <em>LinkedIn</em>.", url: "https://www.linkedin.com/pulse/glm-52-zai-eric-kagume-wneaf" },
  { n: 58, text: "\"Robin Li,\" <em>Baidu Baike</em>.", url: "https://baike.baidu.com/en/item/Robin%20Li/980328" },
  { n: 59, text: "\"ERNIE,\" <em>Instagram</em>.", url: "https://www.instagram.com/p/CwndhsoxwzB/" },
];
