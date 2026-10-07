---
name: branding-extract
description: Use when asked to extract, document, capture, reverse-engineer or codify a brand's design language from a branding suite folder (logos, fonts, guidelines PDF, asset archive) and/or a live website URL, or when asked to produce a BRAND_GUIDE.md, DESIGN.md, design-token spec or design system document for an existing brand or an existing site.
---

# Branding Extract

Turn a branding suite, a live website, or both into a single `BRAND_GUIDE.md` written in
the [design.md](https://design.md) format: a YAML token block followed by prose that
references those tokens and never restates a raw value.

**Core principle: the guide records what is there, not what would look nice.** Every
colour, size, weight, border and radius in the output must be traceable to a computed
style you read, a file you opened, or a page of a guidelines PDF. Where you inferred or
substituted, say so in the guide itself.

## Quick reference

| Phase | Output |
|---|---|
| 1. Intake | Which inputs exist → which sections the guide carries |
| 2. Harvest | A raw census of computed styles and/or suite contents |
| 3. Reduce | Frequency-ranked census → named tokens |
| 4. Write | `BRAND_GUIDE.md`: YAML frontmatter, then prose |
| 5. Verify | Every `{token}` resolves; no value without a source |

Supporting files, read them when you reach the phase that needs them:

- `reference/template.md` — the annotated section-by-section skeleton of the output
- `reference/extract.js` — the computed-style harvester to inject into the page
- `reference/mining-a-suite.md` — how to read a branding suite, in what order

## Phase 1 — Intake

Establish which of the two inputs you have. This decides the shape of the output, so
settle it before harvesting anything.

| Input | Sections the guide carries | Sections it omits |
|---|---|---|
| Suite only | Assets · Examples (illustrative) | Reconciliation · Note on substitutes |
| URL only | Note on Font Substitutes · Examples (illustrative) | Assets · Reconciliation |
| Both | Assets · **Where the suite and the site differ** | Examples (illustrative) |

Two conditionals drive that table:

- **Illustrative examples appear only when you could not observe real components.** If
  you read a live site, you saw its actual buttons, cards and nav. Document those. Made-up
  re-skins of pricing tables and toasts are filler next to real observation.
- **The reconciliation table appears only when two sources can disagree.** With one
  source there is nothing to reconcile.

**When both inputs are present, the live site wins by default.** The suite is one reading
of the brand; the site is the reading people actually see, and anything built next to it
has to match its neighbour rather than a parallel interpretation. Record every
disagreement as a row with an explicit ruling so the question is not reopened later.
Where the suite is right and the site is a lapse — a missing favicon, a stale logo cut,
an accessibility failure — rule for the suite and write the reason in the row.

## Phase 2 — Harvest

### From a website

Open a tab, navigate, and inject `reference/extract.js` with the `javascript_tool`. It
walks every rendered element and builds a frequency-ranked census: colours by role
(background, text, border), font stacks, sizes, weights, line-heights, letter-spacing,
border widths, radii, shadows, transitions, and the container widths in play.

**Read the census in slices.** The tool truncates long results, so the script stores
everything on `window.__census` and returns only colours and loaded fonts. Pull the rest
with `window.__census.pick({typeCombo: 20, radius: 8, ...})` in two or three further
calls, following the `next` hint in the first result. Do not enlarge the first slice.

**Read 3 to 5 pages, not just the home page.** Home pages are atypical by design — they
carry hero treatments that appear nowhere else and often omit body copy, forms and
long-form type entirely. Take the home page, one content or article page, one listing or
index page, and any page with a form. Run the harvester on each and merge the censuses;
a value that appears on one page only is a special case, and a value on every page is a
token.

Screenshot each page as well, scrolling through it. The census gives you values; the
screenshots tell you what those values are *for*, which is the half of the guide that
matters. On sites that reveal content on scroll, the first screenshot is mostly empty
ground; scroll before concluding the page has nothing on it.

Static fallback when the browser is unavailable: fetch the HTML and its stylesheets and
read the declared values. Say so in the Overview, because declared values miss anything
computed, inherited or set by script, and the guide should not imply a fidelity it does
not have.

### From a branding suite

Read `reference/mining-a-suite.md`. In short: find the guidelines PDF and read its colour
and type pages, find any CSS or token file shipped alongside, inventory the fonts by
weight actually present, and inventory the logo lockups by variant and colourway.

## Phase 3 — Reduce

Rank by frequency and cut the tail. A palette is five to nine colours; a census will hand
you sixty, most of them one-off overlays and browser defaults. Keep what carries the
brand and discard the rest.

Name colours the way the brand names them. If the suite gives you Parchment, Obsidian,
Clay and Signal, use those words. If nothing names them, use plain descriptive names
(`ink`, `cream`, `band-forest`, `accent`). Never name a token after where it first
appeared (`hero-bg`) — that breaks the moment it is reused.

Name type by role, never by size. `title-page`, `body-serif`, `eyebrow`, `mono-base`
survive a rescale; `text-44` does not.

Round the spacing census to the underlying rhythm. If you see 8, 16, 23, 24, 25, 40, the
system is 8 and the 23 and 25 are noise.

## Phase 4 — Write

Follow `reference/template.md` exactly. The frontmatter runs `version`, `name`,
`description`, `colors`, `typography`, `rounded`, `spacing`, `components`; the prose
follows the `---` fence.

Three rules govern the prose:

1. **Reference tokens, never raw values.** Write `{colors.accent}` and
   `{typography.title-page}`, not `#FF4832` and `120px`. The frontmatter is the single
   place a value is written down.
2. **Say what each thing is for.** "Signal Red is reserved for brackets and dots" is
   worth more than the hex. A reader who knows the rule can extend the system; a reader
   with only the palette cannot.
3. **Flag every inference inline.** Bold **Provisional** on a guessed asset, a *Note on
   Font Substitutes* section where a licensed face was replaced by its nearest web
   equivalent, and an explicit "not observed" where a section has nothing in it.

Write `BRAND_GUIDE.md` to the working directory unless told otherwise.

### Curating assets

When a suite is present, copy what a build actually needs into `public/brand/` — or
`brand/` where there is no `public/` — and rename to kebab-case with the colourway in the
filename (`logo-primary-obsidian.svg`, `favicon.ico`, `fonts/space-mono-regular.ttf`).
Then document each in the Assets table with its path and a note.

Copy, never move, and never make the build read a path inside the suite. Suite folders
routinely carry spaces, emoji and other characters that break shells and bundlers, which
is the whole reason the curated folder exists.

## Phase 5 — Verify

- `npx @google/design.md lint BRAND_GUIDE.md` reports **zero errors**. Warnings on
  component sub-tokens beyond the core eight are accepted; see the template. If `npx`
  hangs, install `@google/design.md` into a scratch folder and run the binary directly.
- Every `{token}` in the prose resolves to a key in the frontmatter.
- Every component in the frontmatter is described somewhere in the prose, and vice versa.
- No value appears that you cannot point at a source for.
- Section set matches the input set from Phase 1.

## Common mistakes

| Mistake | Why it is wrong |
|---|---|
| Harvesting only the home page | Heroes are atypical; body copy, forms and long-form type live elsewhere |
| Filling an empty section with plausible defaults | An omitted section is information. An invented one is a lie the reader cannot detect |
| Writing hexes into the prose | The value now lives in two places and they will drift |
| Naming type by size (`text-44`) | Dies at the first rescale. Name the role |
| Keeping all 60 censused colours | A palette is a decision, not an inventory |
| Illustrative examples alongside a live site | You saw the real components. Document those instead |
| Referencing a path inside the suite folder | Those paths break builds. Curate into `public/brand/` first |
| Silently substituting a licensed font | The reader will ship the substitute thinking it is the brand. Add the note |
