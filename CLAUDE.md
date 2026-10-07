# ai-starter-website-alt2

## Purpose

An alternative take on `../ai-starter-website`: the same brief, sourced history of AI for
**analogue** readers, restructured as a **learning hub** in the layout style of
[aiadvancements.com.au/learning-hub](https://aiadvancements.com.au/learning-hub/), drawn
entirely in the ClearAI brand.

The original is one long scroll with sticky rails. This version splits the essay into
eleven articles grouped under three parts, with a hub page, a glossary and a source list.

## What sets the rules

1. **`clearai-branding` skill** - colour, type, tone, logo. Always applies.
2. **`DESIGN.md`** - ClearAI design tokens, read from clearai.com.au. Tokens apply as
   written. Two deliberate departures for the hub layout, recorded at the top of
   `assets/styles/global.css`: pills (eyebrow, filters, tags, outline buttons) take the
   nav pill's radius, and the hub uses a larger title size. Cards and covers stay square,
   weight stays 400, no shadows beyond the nav.
3. **`design-taste-frontend` skill** - no em or en dashes in visible copy, no
   decorative clutter.

## File structure

```
assets/
  fonts/        Thorndale AMT, Space Mono (self-hosted, weight 400 only)
  images/brand/ Logo, accent mark, human-made SVGs
  images/articles/ Photos used inside articles
  scripts/      Client scripts: reveal, hub filters, glossary filter, charts, carousels
  styles/       global.css - tokens and shared primitives
src/
  components/   Astro components (HubCard, HubGroup, SiteHeader, CtaBand, charts, ...)
  content/articles/ One MDX file per article; frontmatter schema in src/content.config.ts
  data/         Chapters, references, glossary, chart data (with node tests)
  layouts/      Base.astro - head, header, CTA band, footer
  pages/        index (hub), articles/[slug], glossary, sources
  services/     articles.ts - ordering, read time, cited-source extraction
  style/        Component-level CSS (article.css)
public/         favicon.ico only
research/       Source material the articles were written from
```

## Working notes

- Add an article: new MDX in `src/content/articles/` with `title`, `category`
  (`foundations` | `build-up` | `public`), `order`, `period`, `excerpt`, `description`.
  Cite with `<Ref n={..} />`; the page's source list is built from those automatically.
- Reference numbers are global and must match `src/data/references.ts`. `npm test` guards it.
- `npm run dev` to work, `npm run build` to check.
