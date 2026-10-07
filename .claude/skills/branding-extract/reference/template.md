# BRAND_GUIDE.md template

The annotated skeleton. Angle brackets mark what you replace. Sections marked
**[conditional]** appear only for the input set named in SKILL.md Phase 1.

---

## The frontmatter

Fenced by `---` at the top of the file. Order is fixed: `version`, `name`,
`description`, `colors`, `typography`, `rounded`, `spacing`, `components`.

```yaml
---
version: alpha
name: <Brand-name-design-system>          # or -design-analysis when derived from a site you don't own
description: >-                           # folded block, so a colon-space inside cannot become a nested mapping
  <Three to five sentences. Not a summary of the sections — the actual thesis
  of the brand. What the ground is, what carries emphasis, how many typefaces
  do the work and at what weights, what the corners and borders do, and the
  one rule a reader would otherwise get wrong.>

colors:
  <name>: "#RRGGBB"                       # brand's own vocabulary where it exists
  <name-with-alpha>: "rgba(0, 0, 0, 0.4)"

typography:
  <role-name>:                            # title-page, body-serif, eyebrow, mono-base
    fontFamily: "<'Face', 'Fallback', generic>"
    fontSize: <n>px
    fontWeight: <n>
    lineHeight: <n>                       # unitless multiplier
    letterSpacing: <n>px                  # a dimension. `normal` fails lint; write 0px
                                          # no textTransform here: the linter only knows
                                          # fontFamily, fontSize, fontWeight, lineHeight,
                                          # letterSpacing, fontFeature, fontVariation.
                                          # Say "uppercase" in the Hierarchy table instead.

rounded:                                  # one px value each. `50%`, `100%` and
  none: 0px                               # four-value shorthands fail lint; a circle
  <name>: <n>px                           # is 9999px, an asymmetric corner is the
  <pill-or-dot>: 9999px                   # one radius, with the sides named in prose

spacing:                                  # the observed rhythm, rounded to the system
  xxs: 4px
  xs: 8px
  # ... through to the band and chapter rhythms

components:                               # every distinct component you observed
  <component-name>:
    backgroundColor: "{colors.<name>}"    # always a token reference
    textColor: "{colors.<name>}"
    typography: "{typography.<role>}"
    borderColor: "{colors.<name>}"
    borderWidth: <n>px
    rounded: "{rounded.<name>}"
    padding: "{spacing.<a>} {spacing.<b>}"
---
```

Three frontmatter rules:

- **It must lint with zero errors.** `npx @google/design.md lint BRAND_GUIDE.md`
  reports errors and warnings; errors are format violations (bad units, bad
  shorthands, unparseable YAML) and must be fixed. Warnings on component
  sub-tokens outside the core set (`backgroundColor`, `textColor`, `typography`,
  `rounded`, `padding`, `size`, `height`, `width`) are accepted: borders, icons
  and dividers have no home in that set and are worth recording anyway.
- Component values are **token references**, never literals. `"{colors.accent}"`, not
  `"#FF4832"`. The one exception is a measured pixel dimension with no token
  (`height: 56px`, `borderWidth: 0.8px`).
- A component belongs here only if you observed it. Do not seed the block with the
  components a site of this type usually has.

---

## The prose

### `## Overview`

Open with a blockquote naming the sources exactly:

> **Derived from:** `<url>` home, `<url>/<page>`, `<url>/<page>`, read through the DOM
> and computed styles. Suite read at `<path>`.

Then three to six paragraphs. Cover, in this order:

1. **The ground.** What surface the brand sits on and what breaks it up.
2. **The type.** How many faces, at what weights, and which one is the default versus
   the override. State it plainly if the arrangement is unusual.
3. **The accent.** What the emphasis colour is and — more useful — what it is *reserved
   for*, since that rule is what a reader needs to extend the system.
4. **The structural tell.** The one measurement that recurs everywhere: a border width,
   a radius, a band rhythm.
5. **Motion and scroll**, if the site has any worth recording.

Close with a `**Key characteristics:**` bullet list, eight to twelve items, each one
concrete and each one referencing tokens.

### `## Colors`

A sentence on what the palette does and does not contain — the absences are as
informative as the values. Then `###` subsections grouping the palette by job:
Brand, Surface, Text, Semantic, Borders, Dividers and scrims. Each entry gives the token,
the value, and **where it is used**.

### `## Typography`

- `### Font Family and assets` — the faces, the weights actually present, where they are
  served from.
- `### Hierarchy` — a table: Role, Token, Size, Weight, Line-height, Usage.
- `### Principles` — the rules a reader needs to set new type correctly.
- `### Note on Font Substitutes` **[conditional: URL only, or licensed face unavailable]**
  — name the real face, the substitute, and how they differ.

### `## Layout`

`### Spacing System`, `### Grid & Container` (the measure, the gutter, the max-width),
`### Whitespace`, `### Responsive Strategy` with the observed breakpoints.

### `## Elevation & Depth`

How depth is made. Often the answer is "it isn't" — say so, because that is a rule.
`### Decorative depth` covers gradients, plates and scrims.

### `## Shapes`

`### Border Radius Scale` as a table with usage. `### Photography geometry` — crop
ratios, treatments, whether images are bled or framed.

### `## Assets` **[conditional: suite present]**

A table: Asset, Path, Notes. Paths point at the curated folder, never inside the suite.
Follow with a paragraph on what the suite contains, its size, and any trap in it —
a folder name that breaks shells, an inconsistent naming scheme, a missing colourway.
Mark anything you guessed as **Provisional** and say what to swap.

### `## Where the suite and the site differ` **[conditional: both inputs]**

One paragraph naming the two sources and stating the default ruling and its reason.
Then a table: Item, Live site, Suite, Ruling. One row per disagreement, including the
rows where they agree — agreement confirmed from two sources is worth recording.

### `## Components`

`###` subsections grouped by function. Each component gets a bold name, one or two
sentences on what it is and when it is used, and its distinguishing measurements.
Describe the real thing, including its states.

### `### Examples (illustrative)` **[conditional: no live site observed]**

Under `## Components`. Speculative re-skins of common patterns, each labelled `ex-`
and each listing the properties it uses. Introduce them with a blockquote making clear
they are demonstrations, not observations.

### `## Motion`

Durations, easings, what animates and what must not. `### Reduced motion`.
`### Prohibited` is often the most useful subsection.

### `## Do's and Don'ts`

Two `###` lists, six to ten items each, specific to this brand. "Use good contrast"
belongs in no brand guide. "Never set the serif above weight 200" belongs in one.

### `## Responsive Behavior`

Breakpoints, touch targets, what collapses and in what order, image behaviour.

### `## Iteration Guide`

A numbered list of the order to build in, first step first. It should start with the
single change that carries most of the character — usually loading the faces — and end
with the verification command.
