---
version: alpha
name: ClearAI-design-system
description: The ClearAI design language, derived by direct inspection of clearai.com.au. Parchment ground, Obsidian ink, Clay Brown structure and footer, Signal Red reserved for brackets and dots. Two typefaces at weight 400 only: SpaceMono-Regular as the base face and Thorndale AMT Regular applied over it for titles and reading copy. Borders are 0.8px in brand colours, corners are square apart from the floating nav pill, and there are no shadows beyond the nav. Document formatting and scroll behaviour follow the ai-2027.com and ai-2040.com scenario papers: a sticky left timeline rail, a sticky right instrument panel, smooth anchored scrolling, and one-second fade-in-place reveals.

colors:
  parchment: "#F4F0ED"
  obsidian: "#22190C"
  clay: "#834A33"
  signal: "#FF4832"
  nav-white: "#FFFFFF"
  nav-veil: "rgba(255, 255, 255, 0.5)"
  ink-inactive: "#999999"
  scrim: "rgba(0, 0, 0, 0.4)"

typography:
  title-page:
    fontFamily: "'Thorndale AMT Regular', 'Thorndale', 'Times New Roman', Georgia, serif"
    fontSize: 120px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: normal
  title-chapter:
    fontFamily: "'Thorndale AMT Regular', 'Thorndale', 'Times New Roman', Georgia, serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: normal
  title-section:
    fontFamily: "'Thorndale AMT Regular', 'Thorndale', 'Times New Roman', Georgia, serif"
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: normal
  title-sub:
    fontFamily: "'Thorndale AMT Regular', 'Thorndale', 'Times New Roman', Georgia, serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: normal
  body-serif:
    fontFamily: "'Thorndale AMT Regular', 'Thorndale', 'Times New Roman', Georgia, serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: normal
  body-serif-read:
    fontFamily: "'Thorndale AMT Regular', 'Thorndale', 'Times New Roman', Georgia, serif"
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  statement-xl:
    fontFamily: "SpaceMono-Regular, 'Space Mono', 'Courier New', monospace"
    fontSize: 44px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: normal
  statement-lg:
    fontFamily: "SpaceMono-Regular, 'Space Mono', 'Courier New', monospace"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: normal
  mono-md:
    fontFamily: "SpaceMono-Regular, 'Space Mono', 'Courier New', monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  mono-base:
    fontFamily: "SpaceMono-Regular, 'Space Mono', 'Courier New', monospace"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal
  eyebrow:
    fontFamily: "SpaceMono-Regular, 'Space Mono', 'Courier New', monospace"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: normal
    textTransform: uppercase
  nav-label:
    fontFamily: "SpaceMono-Regular, 'Space Mono', 'Courier New', monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.36px
    textTransform: uppercase
  caption:
    fontFamily: "SpaceMono-Regular, 'Space Mono', 'Courier New', monospace"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: normal

rounded:
  none: 0px
  pill-sm: 50px
  pill: 100px
  dot: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  band: 120px
  chapter: 200px

components:
  nav-pill:
    backgroundColor: "{colors.nav-white}"
    textColor: "{colors.obsidian}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.lg}"
    height: 56px
    position: fixed
  nav-link:
    textColor: "{colors.obsidian}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.none}"
    padding: "0px {spacing.sm}"
  nav-link-active:
    textColor: "{colors.obsidian}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.none}"
    textDecoration: underline
  nav-dropdown-item:
    textColor: "{colors.obsidian}"
    inactiveColor: "{colors.ink-inactive}"
    typography: "{typography.mono-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xxs} {spacing.sm}"
  hero-wordmark:
    backgroundColor: "{colors.parchment}"
    asset: "/brand/logo-primary-obsidian.svg"
    width: 732px
    height: 220px
    rounded: "{rounded.none}"
  page-title-split:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.obsidian}"
    typography: "{typography.title-page}"
    asideTypography: "{typography.body-serif}"
    asideWidth: 313px
    rounded: "{rounded.none}"
  statement-centred:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.obsidian}"
    typography: "{typography.statement-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.band} 0px"
  statement-emphasis:
    textColor: "{colors.clay}"
    typography: "{typography.statement-lg}"
  dot-marker:
    backgroundColor: "{colors.signal}"
    rounded: "{rounded.dot}"
    size: 10px
  accent-mark:
    asset: "/brand/accent-dots-signal-red.svg"
    color: "{colors.signal}"
    rounded: "{rounded.dot}"
  eyebrow-numeral:
    textColor: "{colors.obsidian}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "0px 0px {spacing.lg} 0px"
  column-four:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.obsidian}"
    typography: "{typography.body-serif}"
    rounded: "{rounded.none}"
    padding: "0px"
    gap: "{spacing.xl}"
  link-bracket:
    textColor: "{colors.signal}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} 0px"
  link-bracket-on-clay:
    textColor: "{colors.obsidian}"
    typography: "{typography.mono-base}"
    rounded: "{rounded.none}"
  link-inline-serif:
    textColor: "{colors.clay}"
    typography: "{typography.body-serif}"
  photo-plate:
    backgroundColor: "{colors.parchment}"
    rounded: "{rounded.none}"
    padding: "0px"
    captionTypography: "{typography.caption}"
    captionColor: "{colors.obsidian}"
  photo-plate-bordered:
    borderColor: "{colors.clay}"
    borderWidth: 0.8px
    rounded: "{rounded.none}"
    captionTypography: "{typography.caption}"
  rule-hairline:
    borderColor: "{colors.clay}"
    borderWidth: 0.8px
  chip-ghost:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.obsidian}"
    borderColor: "{colors.obsidian}"
    borderWidth: 0.8px
    typography: "{typography.body-serif}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  chip-ghost-active:
    backgroundColor: "{colors.obsidian}"
    textColor: "{colors.parchment}"
    typography: "{typography.body-serif}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  callout-panel:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.obsidian}"
    borderColor: "{colors.clay}"
    borderWidth: 0.8px
    typography: "{typography.body-serif}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  meta-line:
    textColor: "{colors.obsidian}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} 0px"
  footnote-ref:
    textColor: "{colors.signal}"
    typography: "{typography.caption}"
  rail-timeline:
    backgroundColor: "{colors.parchment}"
    lineColor: "{colors.clay}"
    markerColor: "{colors.obsidian}"
    markerActiveColor: "{colors.signal}"
    labelTypography: "{typography.caption}"
    width: 220px
    stickyTop: 8px
  rail-instrument:
    backgroundColor: "{colors.parchment}"
    borderColor: "{colors.obsidian}"
    borderWidth: 0.8px
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
    width: 430px
    stickyTop: 20px
  metric-tile:
    backgroundColor: "{colors.obsidian}"
    textColor: "{colors.parchment}"
    typography: "{typography.statement-lg}"
    labelTypography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  metric-tile-light:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.obsidian}"
    borderColor: "{colors.clay}"
    borderWidth: 0.8px
    typography: "{typography.statement-lg}"
    labelTypography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  clay-band:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.obsidian}"
    typography: "{typography.mono-base}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  logo-strip:
    backgroundColor: "{colors.parchment}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl} {spacing.lg}"
    logoHeight: 40px
  newsletter-band:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.signal}"
    typography: "{typography.statement-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.band} {spacing.lg}"
  input-underline:
    backgroundColor: "{colors.parchment}"
    textColor: "{colors.obsidian}"
    borderColor: "{colors.obsidian}"
    borderWidth: 0.8px
    typography: "{typography.mono-base}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} 0px"
    height: 44px
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.parchment}"
    typography: "{typography.nav-label}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
  footer-clay:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.obsidian}"
    typography: "{typography.mono-base}"
    borderColor: "{colors.obsidian}"
    borderWidth: 0.8px
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    height: 97px
---

## Overview

> **Derived from:** `clearai.com.au` home, `/case-studies`, `/insights`, read through the DOM and computed styles rather than from the brand document alone. Formatting and scroll behaviour derived from `ai-2027.com` and `ai-2040.com`.

The ClearAI surface is a single sheet of Parchment with type on it. `{colors.parchment}` carries every band, `{colors.obsidian}` carries every word, and the page is broken only by photographic plates set off the grid, a Clay Brown footer, and the occasional mark of Signal Red. There is no card, no gradient and no shadow anywhere except beneath the floating nav, which means depth on this site is made by changing colour or by leaving space, never by lifting a panel.

Two typefaces do the work and both are served from the site's own CDN at weight 400 only, so nothing in this system can be set in bold:

- **SpaceMono-Regular** is the base face. It is what the site sets on `<p>` by default, and it carries statements at 36px and 44px, all eyebrows, nav labels, dates, captions, footer copy and bracketed links.
- **Thorndale AMT Regular** is applied over the base, usually on a `<span>` inside a mono paragraph. It carries page titles at 120px and reading copy at 16px, which is why the site reads as a printed document rather than as an interface.

The mono base with a serif overlay is worth stating plainly, because it inverts the usual arrangement. Space Mono is not the accent face here; it is the default, and Thorndale is the deliberate override.

Calls to action are written rather than styled. A destination appears as a bracketed mono link in Signal Red, `[ SUITE OF SERVICES → ]`, right-aligned beneath the content it follows, and the same idiom repeats in Obsidian on the Clay footer for the email address and phone number. Filled buttons appear only where a form must be submitted.

Every border on the site measures **0.8px**, and it is drawn in a brand colour rather than in grey: Clay Brown around photographic plates, Obsidian around the rare boxed element, Parchment where a border must sit on Clay. This matches the scenario papers, which also draw at 0.8px, so the two references agree on the finest detail of the page.

Sections are numbered in Roman and labelled in mono uppercase, so `I. LEADERSHIP` and `II. PEOPLE + CULTURE` give the page the cadence of a paper without needing a rule or a container.

**Structure and motion follow the scenario papers.** AI 2027 and AI 2040 hold a sticky SVG timeline rail on the left, marked with 6px and 4px circles whose labels stay invisible until the reader arrives at them, and a sticky instrument panel on the right that updates its readings as the prose passes anchors. Scrolling is smooth and anchored, reveals run for one second on an ease-out curve, and values change in place without anything sliding. ClearAI's own site already reveals on entry with a one second fade held in place, so adopting that structure extends what is there rather than replacing it.

**Key characteristics:**
- Parchment `{colors.parchment}` edge to edge, with Clay Brown reserved for the footer band and for 0.8px borders.
- Space Mono as the base face and Thorndale as the overlay, both at weight 400, with no bold available in either.
- Page titles at 120px Thorndale, left aligned on a 24px gutter, paired with a narrow 313px serif aside at the top right.
- The home hero is an animated GIF of the wordmark at 732 by 220px, square cornered, with nothing else in the band.
- Statements set in Space Mono at 36px, centred, with key phrases lifted into Clay Brown.
- Photographic plates positioned off the grid at varying sizes, each captioned `DD.MM.YYYY` in 10px mono.
- Bracketed mono links instead of buttons, in Signal Red on Parchment and in Obsidian on Clay.
- Borders at 0.8px in brand colours. Corners square, apart from the 100px nav pill and the Signal Red dot.
- A sticky left timeline rail and a sticky right instrument panel, both adopted from the scenario papers.
- One second fade in place on entry, smooth anchored scrolling, and no parallax or slide anywhere.

## Colors

Every value below was read off the live site. The palette has no greys apart from one inactive nav state, and no near-whites apart from the nav pill.

### Brand
- **Parchment** (`{colors.parchment}` `#F4F0ED`): The page. Measured as the most frequent background on the home page by a wide margin. Never substitute white for a full page background.
- **Obsidian** (`{colors.obsidian}` `#22190C`): Every word on Parchment, every word on Clay, and the ink of the boxed border. It replaces black completely, and the site contains no `#000000` text.
- **Clay Brown** (`{colors.clay}` `#834A33`): Three jobs, all verified. It lifts key phrases inside a mono statement, it draws the 0.8px border around photographic plates, and it fills the site footer.
- **Signal Red** (`{colors.signal}` `#FF4832`): Bracketed links, the section dot marker, the accent mark, and the newsletter heading at 44px, which is the one place the colour carries display type. It never fills an area and never sets a paragraph.

### Surface and support
- **Nav White** (`{colors.nav-white}` `#FFFFFF`): The floating nav pill only, the single element on the site that is pure white.
- **Nav Veil** (`{colors.nav-veil}` `rgba(255,255,255,0.5)`): A translucent white measured once on the nav, used where the pill sits over content.
- **Ink Inactive** (`{colors.ink-inactive}` `#999999`): The only grey in the system, measured on an inactive item inside the ABOUT dropdown. Use it for disabled and unvisited states and for nothing else.
- **Scrim** (`{colors.scrim}` `rgba(0,0,0,0.4)`): A dark overlay measured once on an image, available where a caption must sit over photography.

### Borders
The site has no hairline grey. Borders measure 0.8px and take `{colors.clay}` most often, `{colors.obsidian}` where the element is boxed, and `{colors.parchment}` where a border sits on the Clay footer. Do not introduce a neutral border colour, because a grey rule on Parchment reads as a different brand immediately.

### Semantic
There is no semantic palette on the site. Where state must be shown, use `{colors.signal}` for an error and `{colors.clay}` for a confirmation, expressed as a mono message beneath the field rather than as a coloured fill.

## Typography

### Font Family and assets

Both faces are self-hosted from `public/brand/fonts/`, copied out of the branding suite, and both are loaded at weight 400 only.

```css
@font-face {
  font-family: 'Thorndale AMT Regular';
  font-weight: 400;
  src: url('/brand/fonts/thorndale-amt-regular.woff2') format('woff2'),
       url('/brand/fonts/thorndale-amt-regular.woff') format('woff'),
       url('/brand/fonts/thorndale-amt-regular.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'SpaceMono-Regular';
  font-weight: 400;
  src: url('/brand/fonts/space-mono-regular.ttf') format('truetype');
  font-display: swap;
}
```

Thorndale AMT is a licensed face and the suite ships the web set the brand already serves, so use those files rather than substituting a display serif. Space Mono is also available from Google Fonts if a second source is wanted, but load 400 only so a stray 700 cannot appear.

The suite also ships `SpaceMono-Bold.ttf`, `SpaceMono-BoldItalic.ttf` and `SpaceMono-Italic.ttf`. None of them are copied into `public/brand/fonts/`, deliberately. This system has no bold, and a bold sitting in the fonts directory is an invitation to use it.

Because neither face has a bold, emphasis has to come from size, from colour, or from the change of face. Reaching for `font-weight: 700` will synthesise a fake bold in the browser and it looks wrong at every size.

Fallback stacks:
- Serif: `'Thorndale AMT Regular', 'Thorndale', 'Times New Roman', Georgia, serif`
- Mono: `SpaceMono-Regular, 'Space Mono', 'Courier New', monospace`

### Hierarchy

Sizes marked *measured* were read off the live site. Sizes marked *interpolated* fill the gap between the measured 120px title and the measured 16px body, and they are the only additions to the scale.

| Token | Face | Size | Line Height | Tracking | Source | Use |
|---|---|---|---|---|---|---|
| `{typography.title-page}` | Thorndale | 120px | 1.0 | normal | measured | Page title, left aligned on the 24px gutter |
| `{typography.title-chapter}` | Thorndale | 64px | 1.0 | normal | interpolated | Chapter opening |
| `{typography.title-section}` | Thorndale | 44px | 1.05 | normal | interpolated | Section title |
| `{typography.title-sub}` | Thorndale | 28px | 1.2 | normal | interpolated | Sub-section, pull-quote |
| `{typography.body-serif}` | Thorndale | 16px | 1.2 | normal | measured | Reading copy in columns and asides |
| `{typography.body-serif-read}` | Thorndale | 19px | 1.5 | normal | extension | Long-form article body, taken from the scenario papers' reading measure |
| `{typography.statement-xl}` | Space Mono | 44px | 1.2 | normal | measured | Newsletter heading, set in Signal Red |
| `{typography.statement-lg}` | Space Mono | 36px | 1.3 | normal | measured | The centred manifesto statement |
| `{typography.mono-md}` | Space Mono | 16px | 1.5 | normal | measured | Dropdown items, list rows |
| `{typography.mono-base}` | Space Mono | 15px | 1.5 | normal | measured | The site's base size. Footer, mono paragraphs, form fields |
| `{typography.eyebrow}` | Space Mono | 15px | 1.2 | normal | measured | `I. LEADERSHIP` and `[ BRACKET LINKS ]`, uppercase |
| `{typography.nav-label}` | Space Mono | 12px | 1.5 | 0.36px | measured | Nav items, meta lines, button labels, uppercase |
| `{typography.caption}` | Space Mono | 10px | 1.5 | normal | measured | Photo plate dates, figure captions, rail labels |

### Principles
- **Mono is the base and serif is the overlay.** Set Space Mono on the body element, then apply Thorndale to titles and to reading copy. This is how the site is actually built, and reversing it changes the character of the page.
- **Neither face has a bold.** Emphasis comes from size, from Clay Brown, or from switching face. Never synthesise weight.
- **Statements are mono and centred.** The 36px centred statement is the most recognisable typographic moment on the site, and it sits alone in its band with nothing sharing the space.
- **Uppercase belongs to mono.** Eyebrows, nav labels and bracketed links are uppercase. Thorndale is never set in caps, which is why the 120px title reads as a book title rather than as a banner.
- **The only tracking in the system is 0.36px on the 12px nav label.** Everything else runs at natural tracking, and mono is never tightened.
- **Australian English, sentence case.** Colour, organisation, centre, favour. No title case in headings.

## Layout

### Spacing System
- **Base unit**: 8px, with a 4px sub-token for fine work.
- **Tokens**: `{spacing.xxs}` 4px, `{spacing.xs}` 8px, `{spacing.sm}` 12px, `{spacing.md}` 16px, `{spacing.lg}` 24px, `{spacing.xl}` 40px, `{spacing.xxl}` 64px, `{spacing.band}` 120px, `{spacing.chapter}` 200px.
- **Gutter**: 24px, measured as a 23px left offset on the case studies title.
- **Band rhythm**: `{spacing.band}` 120px between sections and `{spacing.chapter}` 200px around the hero. The live site achieves this by absolute position rather than by padding, so treat these as target gaps rather than as literal CSS padding values.

### Grid & Container
- **Container**: 1475px to 1521px measured, so cap content at 1500px with 24px gutters.
- **Page title split**: the 120px Thorndale title sits hard left while a 313px serif aside at 16px sits at the far right of the same band, roughly x=1165 on a 1521px page. The asymmetry is the pattern, and the aside should not be centred or widened.
- **Four column service row**: four equal columns with no dividers and no card chrome, each opening with a Roman numeral eyebrow.
- **Photographic field**: plates are positioned individually against a full bleed band rather than laid into a grid. Two to four per band at different sizes, some breaking the left or right edge, overlap permitted, and no shared baseline. One measured plate runs 567 by 453px with a 0.8px Clay border; smaller plates measure around 233 by 181px and 301 by 214px.
- **Reading measure**: 680 to 700px for `{typography.body-serif-read}` on article surfaces, following the scenario papers.

### Whitespace
Emptiness carries the page. Large parts of the home page hold nothing but Parchment, and a band containing one sentence is correct rather than unfinished. When a layout feels thin, add space rather than content.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat Parchment | Everything by default |
| 1 | 0.8px border in `{colors.clay}` | Photographic plates, callout panels, table rows |
| 2 | 0.8px border in `{colors.obsidian}` | Boxed elements and ghost chips |
| 3 | Colour change to `{colors.clay}` or `{colors.obsidian}` | Band and footer depth |
| 4 | `box-shadow: rgba(0,0,0,0.25) 0 2px 5px` | The floating nav pill and its dropdown, and nothing else |

The single measured shadow on the site belongs to the nav. Everything else is flat, so a shadow appearing on a plate, a panel or a tile is a defect rather than a variation.

### Decorative depth
The photographic field is the only decoration. Plates sit at varying sizes and positions with mono date captions beneath, so the band reads as prints laid across a desk. Client logos appear as monochrome PNGs in a strip. Case study imagery sits inside a 0.8px Clay border with the client name in mono uppercase beneath.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Plates, bands, panels, chips, inputs, tiles. The default for everything. |
| `{rounded.pill-sm}` | 50px | Measured once on a small nav element |
| `{rounded.pill}` | 100px | The floating nav pill |
| `{rounded.dot}` | 9999px | The Signal Red dot and the accent mark circles |

Square corners are the rule and the measured evidence is unambiguous: apart from the nav and the dot, the site has no rounded corner anywhere. Chips and panels adopted from the scenario papers should therefore be drawn square in ClearAI, even though the papers themselves round them to 3px.

### Photography geometry
Square corners, no shadow, no overlay unless a caption sits over the image, in which case use `{colors.scrim}`. Ratios vary deliberately within one band, and 4:3, 1:1 and 3:2 all appear together. Every plate carries a `DD.MM.YYYY` caption in `{typography.caption}` beneath its lower left corner at `{spacing.xs}` offset. Some plates render in greyscale and some in colour in the same band. Imagery should look warm, lived in and analogue: natural light, textured surfaces, people at ease, no stock sterility.

## Assets

Brand assets are served from `/brand/`, which is `public/brand/` in the repository. Every file there was copied out of the branding suite and renamed to kebab-case.

| Asset | Path | Notes |
|---|---|---|
| Secondary logo | `/brand/logo-secondary-{black,obsidian,parchment,white}.svg` | The nav wordmark, rendered at 75 by 19px. The live site uses the black cut; Obsidian is the on-brand alternative and Parchment and White are for Clay and Obsidian grounds |
| Primary logo | `/brand/logo-primary-{obsidian,parchment,white}.svg` | The home hero at 732 by 220px |
| Tertiary logo | `/brand/logo-tertiary-{signal-red,obsidian,parchment,white}.svg` | The sign-off mark, used in the footer and at the end of an issue |
| Accent mark | `/brand/accent-dots-signal-red.svg` | The six circle mark in Signal Red |
| Handwritten mark | `/brand/human-made-01-signal-red.svg` | The `*Human Made` footer mark. **Provisional**: the suite holds 84 of these named only by number, and 01 was taken as a placeholder. Swap the file, keep the name |
| Favicon | `/brand/favicon.ico` | |
| Thorndale AMT | `/brand/fonts/thorndale-amt-regular.{woff2,woff,ttf}` | Weight 400 |
| Space Mono | `/brand/fonts/space-mono-regular.ttf` | Weight 400 |
| Client logos | `https://irp.cdn-website.com/908ce75c/dms3rep/multi/opt/*-1920w.png` | Still on the CDN. Site content rather than brand assets, and not in the suite |
| Case study imagery | `https://irp.cdn-website.com/908ce75c/dms3rep/multi/opt/*-640w.jpg` | Still on the CDN, same reason. Applied as a background image behind a 0.8px Clay border |

`branding_suite/` in the repository root is the full ClearAI + Wülfe package: logo sets in six colourways across SVG, PNG, JPG, EPS, PDF and AI, both typefaces, InDesign sources for print collateral, the Brand Guidelines PDF, and a `Claude Design System.zip`. It runs to 239 MB across 1,590 files and is gitignored. Treat it as the archive to pull from, not as something the build reads — nothing should reference a path inside it. Its top folder is named `Branding Suite _ ClearAI + Wülfe = 🧨`, which breaks shells, path resolution and most build tooling, and is the reason `public/brand/` exists.

One inconsistency worth knowing when pulling a replacement handwritten mark: the Signal Red variants are named `All Handwritten Logos-NN.svg` while every other colourway names the same 84 marks `Human Made Logos-NN.svg`.

## Where the suite and this spec differ

This document was derived from the live site. The suite's `Claude Design System.zip` carries `colors_and_type.css`, drawn from Brand Guidelines p.22. The two agree exactly on colour and disagree on most other things.

**The live site wins.** This site sits beside `clearai.com.au` and has to look like its neighbour, not like a parallel reading of the same guidelines. The table below records each disagreement so the question does not get reopened from scratch.

| Item | Live site (this spec) | Suite / guidelines | Ruling |
|---|---|---|---|
| Colour values | `#F4F0ED` `#22190C` `#834A33` `#FF4832` | Identical, per Guidelines p.22 | Agreement. The palette is confirmed from two independent sources |
| Base face | Space Mono base, Thorndale overlay | Thorndale-led, mono for captions and data | Site |
| Weights | 400 only, no bold anywhere | Ships Space Mono Bold and BoldItalic | Site. The bold files are not copied |
| Type scale | 120 / 64 / 44 / 28 / 19 / 16 | 72 / 48 / 36 / 24 / 20 / 18 / 16 | Site |
| Corners | 0px, bar the nav pill and the dot | 2px inputs, 4px buttons, 8px containers | Site |
| Borders | 0.8px in brand colours | 1 / 2 / 3px, hairlines at `#D9D1C6` | Site. No grey rules |
| Muted text | Obsidian only | `#5A4F41` body, `#8A7F70` captions | Site |
| Shadows | The nav pill and nothing else | Five-level scale | Site |
| Inline links | Clay serif underline, Signal Red only inside brackets | Every `a` in Signal Red, underlined | Site |
| Emoji in copy | Not addressed | None | Adopt the suite's rule. No conflict |

## Components

### Navigation

**`nav-pill`** is the floating white bar, fixed at the top with `z-index: 13` and inset from the viewport by `{spacing.lg}`.
- Background `{colors.nav-white}`, shape `{rounded.pill}` 100px, height 56px, padding `{spacing.md} {spacing.lg}`. The secondary logo SVG sits at 75 by 19px on the left with nav labels right aligned. It enters with `fadeInDown` over one second on `ease`, and carries the one measured shadow in the system.

**`nav-link`** items are `{typography.nav-label}`, 12px mono uppercase at 0.36px tracking, padding `0px {spacing.sm}`, colour `{colors.obsidian}`. The current page takes `nav-link-active`, which is the same label with an underline. Hover moves to `{colors.signal}`.

**`nav-dropdown-item`** rows under ABOUT are `{typography.mono-md}` at 16px, colour `{colors.obsidian}`, with unavailable rows in `{colors.ink-inactive}`.

### Opening surfaces

**`hero-wordmark`** is the home opening: the primary logo SVG at 732 by 220px, centred on `{colors.parchment}`, square cornered, with nothing else in the band. No strapline, no button, no scroll hint.

The live site animates this moment with a wordmark GIF that draws the serif "Clear" stroke by stroke. That GIF is not in the branding suite and has no local source, so this build opens on the static mark instead, which is what the site's own reduced-motion path would have shown anyway. If the animated source is recovered from Wülfe later, it drops into the same band at the same size with the static SVG kept as the `prefers-reduced-motion` fallback.

**`page-title-split`** opens every interior page. The title takes `{typography.title-page}` at 120px Thorndale hard against the left gutter, with a 313px aside in `{typography.body-serif}` at the far right of the same band, three or four lines long. Nothing sits between them.

**`statement-centred`** is the manifesto moment: `{typography.statement-lg}`, 36px Space Mono, centred, max width 720px, padding `{spacing.band}` vertical. A `dot-marker` sits on its own line above the first word, and key phrases inside take `statement-emphasis` in `{colors.clay}`.

**`dot-marker`** is a 10px `{colors.signal}` circle at `{rounded.dot}`, one per band and never two.

**`accent-mark`** is `/brand/accent-dots-signal-red.svg`, the six circle mark in Signal Red, used at most twice on a page beside a chapter opening or a sign off.

**`eyebrow-numeral`** labels a numbered section: `{typography.eyebrow}`, 15px mono uppercase, written `I. LEADERSHIP` or `II. PEOPLE + CULTURE`, sitting `{spacing.lg}` above its body with no rule and no colour.

**`column-four`** is the service row: four equal columns at `{spacing.xl}` gap on Parchment with no dividers, each holding an `eyebrow-numeral` then body in `{typography.body-serif}`. A single `link-bracket` sits right aligned beneath the whole row rather than one per column.

### Links and actions

**`link-bracket`** is the primary call to action and the reason this system barely needs buttons. Text `{colors.signal}` in `{typography.eyebrow}`, written with literal brackets and an arrow, `[ SUITE OF SERVICES → ]`, right aligned beneath the content it follows. Hover moves the arrow `{spacing.xxs}` to the right without changing colour.

**`link-bracket-on-clay`** is the same idiom in the footer, set in `{colors.obsidian}` on the Clay band at `{typography.mono-base}`: `[HELLO@CLEARAI.COM.AU→ ]` and `[0421 932 166→ ]`.

**`link-inline-serif`** handles links inside Thorndale copy: `{colors.clay}` with a 1px underline at 2px offset. Clay rather than Signal Red keeps a paragraph calm.

**`button-signal`** is the only filled button, permitted for a form submit and nothing else, at one per page. Background `{colors.signal}`, text `{colors.parchment}`, label `{typography.nav-label}`, square corners, padding `{spacing.sm} {spacing.lg}`.

### Content surfaces

**`photo-plate`** is the unbordered print: no background, no shadow, square corners, with a `{typography.caption}` date beneath the lower left corner. Positioned off grid within its band.

**`photo-plate-bordered`** adds a 0.8px `{colors.clay}` border and is how case study imagery is framed, measured at 567 by 453px with the client name in mono uppercase beneath.

**`callout-panel`** is the bordered aside adopted from the scenario papers, drawn square here rather than rounded: 0.8px `{colors.clay}` border on Parchment, padding `{spacing.lg}`, heading in `{typography.title-sub}`, body in `{typography.body-serif}`, and a ragged row of `chip-ghost` items beneath.

**`chip-ghost`** is the papers' navigation idiom rebuilt in ClearAI: label in `{typography.body-serif}`, so serif rather than mono, inside a 0.8px `{colors.obsidian}` border, square corners, padding `{spacing.xs} {spacing.sm}`, laid three or four to a ragged row at `{spacing.xs}` gap. Hover thickens the border to 1.6px with no fill change. The selected state is `chip-ghost-active`, which flips to an Obsidian fill with Parchment text.

**`meta-line`** is the document metadata row in `{typography.nav-label}`, pipe separated: `PUBLISHED 05.02.2025 │ PDF │ LISTEN`. It sits directly above a chapter title, with links in `{colors.clay}`.

**`footnote-ref`** is a `{colors.signal}` superscript in `{typography.caption}` linking to a numbered source list at the foot of the page. Footnoting claims suits the brand's own preference for showing its working, and both scenario papers do it throughout.

**`clay-band`** is a full bleed `{colors.clay}` band with `{colors.obsidian}` type. Note the direction: the live footer sets Obsidian on Clay rather than Parchment on Clay, and that is the combination to follow.

**`logo-strip`** holds client logos as monochrome PNGs at a consistent 40px height on Parchment, padding `{spacing.xl} {spacing.lg}`.

**`rule-hairline`** is a 0.8px `{colors.clay}` rule, the only divider in the system.

### Instrument components

These are the scenario papers' structure, rebuilt in ClearAI tokens. Use them on pages that argue something and have real figures to show. On a page with nothing to display, leave them out rather than filling them with decoration.

**`rail-timeline`** is the sticky left navigation, 220px wide, sticky at `top: 8px`. It is drawn as an inline SVG: a vertical `{colors.clay}` line with a 6px `{colors.obsidian}` circle per section and a 4px inner circle, plus a `{typography.caption}` label beside each marker. Labels sit at `opacity: 0` and fade to 1 over 300ms when their section becomes current, and the active marker fills `{colors.signal}`. On the papers this rail measures 220 by 674px, which is a useful ceiling.

**`rail-instrument`** is the sticky right panel, 430px wide, sticky at `top: 20px`, and sticky only at desktop widths. Background Parchment inside a 0.8px `{colors.obsidian}` border, padding `{spacing.md}`, square corners. It holds a period label, a two or three series chart drawn in `{colors.obsidian}`, `{colors.clay}` and `{colors.signal}`, a one line reading in `{typography.caption}`, and a row of metric tiles. Readings advance as the prose passes section anchors, and they change in place with no movement. Below the desktop breakpoint the panel unsticks and docks to the bottom of the viewport, following the papers' own mobile behaviour.

**`metric-tile`** inverts to an Obsidian fill with Parchment type: value in `{typography.statement-lg}` at 36px mono and label above in `{typography.caption}` uppercase, square corners, padding `{spacing.sm}`. Because Space Mono has no bold here, the figure carries through size rather than weight. Inside the instrument rail the 36px is a cap: a row whose longest value would not fit its tile steps the figure down, for that row only, until it does. **`metric-tile-light`** is the same tile on Parchment inside a 0.8px Clay border, and alternating the two across a row is what makes the row read as an instrument.

### Forms

**`input-underline`** is a text field with no box: a single 0.8px `{colors.obsidian}` bottom rule on Parchment, text in `{typography.mono-base}`, height 44px, padding `{spacing.xs} 0px`, label above in `{typography.nav-label}`. Focus thickens the rule to 1.6px and shifts it to `{colors.signal}`, and an error message sits beneath in `{typography.caption}` in `{colors.signal}`.

**`newsletter-band`** is the *analogue by ClearAI* sign up. Heading in `{typography.statement-xl}`, 44px Space Mono set in `{colors.signal}`, which is the one measured place where the accent carries display type. Body beneath in `{typography.body-serif}`, then one `input-underline` and one `button-signal`.

**`footer-clay`** is the site footer: a full bleed `{colors.clay}` band roughly 97px tall with `{colors.obsidian}` type at `{typography.mono-base}`. The first row holds `link-bracket-on-clay` items for email and phone, a 0.8px rule divides the rows, and the second row holds the site credit. A narrow column at the right edge carries a vertical `LINKEDIN` label in mono with its own 0.8px rule. `*Human Made` sits in `{colors.signal}` where the footer carries a sign off, either as mono text or as `/brand/human-made-01-signal-red.svg`, the handwritten mark.

## Motion

The site already reveals content on entry with a one second fade held in place, and the scenario papers fade over one second on `cubic-bezier(0.4, 0, 0.2, 1)`, so the two agree. The specification below combines ClearAI's measured configuration with the papers' scroll structure.

### Reveal on entry
Trigger when the element enters the viewport, once only, using `IntersectionObserver` at a 0.15 threshold.

```css
:root { --reveal: 1s cubic-bezier(0.4, 0, 0.2, 1); }

.reveal { opacity: 0; transition: opacity var(--reveal); }
.reveal.revealed { opacity: 1; }
```

Duration one second, delay zero, and **no directional movement**, because the measured configuration on the live site is `fadeInCombo` with `dir: "in-place"`. Content appears where it will sit rather than travelling into position. Stagger siblings by 60ms where a row reveals together.

### Nav entry
`fadeInDown` over one second on `ease`, with the pill travelling from `translateY(-40px)`. This is the one downward movement in the system and it belongs to the nav alone.

### Scrolling
- `html { scroll-behavior: smooth; }` so anchored jumps from the timeline rail glide rather than snap.
- The left `rail-timeline` and the right `rail-instrument` are `position: sticky`, not fixed, so they release at the end of their section.
- Rail state changes use `opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)` for labels and `color, background-color, border-color 300ms` for markers and chips.
- Chart series and bar values animate through a CSS custom property over 500ms on `ease`, matching the papers' approach, so a figure counts rather than slides.
- Expanding panels use `height, opacity 300ms ease-in-out`.

### Prohibited
No parallax, no scroll jacking, no scale on hover, no horizontal travel, and no movement of the rails themselves. The statement may reveal word by word at 40ms intervals, which is the only sequenced reveal permitted.

### Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal.revealed { opacity: 1; transition: none; }
  html { scroll-behavior: auto; }
}
```
The hero GIF should swap to a static SVG wordmark under the same query, and rails should render their final state per section with no transitions.

## Do's and Don'ts

### Do
- Keep `{colors.parchment}` as the page background on every surface, and keep `{colors.clay}` for the footer and for 0.8px borders.
- Set Space Mono as the base face and apply Thorndale over it for titles and reading copy.
- Draw every border at 0.8px in a brand colour.
- Set page titles at 120px Thorndale hard against the left gutter, with the narrow serif aside at the far right.
- Set statements in 36px centred Space Mono with one Signal Red dot above.
- Write calls to action as bracketed mono links, in Signal Red on Parchment and Obsidian on Clay.
- Number sections in Roman numerals with a mono uppercase eyebrow.
- Position photographic plates off the grid at varying sizes with a `DD.MM.YYYY` mono caption beneath.
- Reveal content with a one second fade held in place, and let the sticky rails carry the reader's sense of position.
- Spend the layout budget on empty Parchment.

### Don't
- Don't set `font-weight: 700` on either face. Neither has a bold, and the browser will synthesise one.
- Don't introduce a grey hairline. The site's borders are Clay, Obsidian or Parchment, and grey reads as another brand.
- Don't round a corner. The nav pill and the dot are the only curved shapes, so chips and panels stay square even where the reference papers round them.
- Don't add a shadow to anything other than the nav pill.
- Don't set Parchment type on a Clay band. The measured combination is Obsidian on Clay.
- Don't fill an area with Signal Red beyond a dot, a bracket, a 0.8px rule or one small submit button.
- Don't use white as a page background or black as an ink colour.
- Don't set reading copy in mono or a nav label in serif.
- Don't slide, scale or parallax anything on scroll. The reveal is a fade held in place.
- Don't lay photography into a tidy grid of matching ratios, because the scatter is the idiom.
- Don't reach for hype vocabulary in any copy this system carries. Thoughtful, practical and deliberate are the register; revolutionary and game-changing are not.

## Responsive Behavior

### Breakpoints

| Name | Width | Key changes |
|---|---|---|
| Wide | ≥ 1500px | Container caps at 1500px, plates may break the container edge, both rails sticky |
| Desktop | 1180 to 1499px | `rail-instrument` narrows to about 380px, `rail-timeline` holds 220px, page title 120px |
| Tablet | 768 to 1179px | Both rails unstick. The timeline becomes a horizontal anchor row beneath the nav and the instrument panel docks to the bottom of the viewport. Service row goes 2-up, page title 64px |
| Mobile | < 768px | Single column, statement 22px, hero GIF full width, one plate per band, instrument panel reduced to a period label and a 2-up tile grid behind a `SHOW FIGURES` control |

### Touch targets
`nav-link` items inflate to a 44px tap height through vertical padding while the label stays 12px. `link-bracket` takes `{spacing.sm}` vertical padding so the bracketed text reaches 44px. `input-underline` and `chip-ghost` hold 44px at every width.

### Collapsing strategy
- Thorndale titles step 120, 64, 44, 28px. Reading copy holds 16px, and long-form copy steps 19px to 17px rather than down to 15px.
- Mono statements step 44, 36, 28, 22px and stay centred.
- The four column service row goes 4-up, 2-up, 1-up, and the Roman numerals stay at every width because they carry the structure once the columns are gone.
- The nav pill keeps its 100px radius and reduces to the logo plus a mono `MENU` label opening a full screen Parchment overlay.
- Band rhythm steps 120px, 80px, 56px and stops there.
- Below 1180px, do not attempt to keep a narrow sticky rail beside the prose, because it compresses the reading measure past comfort. Convert the rail instead.

### Image behaviour
Photography still comes from the Duda CDN, so plates use `srcset` at 1x and 2x against its `-279w`, `-640w` and `-1920w` variants. On mobile a plate goes full bleed with its caption inset by `{spacing.lg}`, and the off grid scatter is abandoned rather than compressed, because overlapping plates at 375px read as a rendering fault. The hero mark is an SVG and needs no `srcset`.

## Iteration Guide

1. Load the two faces from `/brand/fonts/` at weight 400 before anything else, then set Space Mono on the body and Thorndale on titles and reading copy. Most of the character arrives with that one step.
2. Work on one component at a time and reference tokens directly, such as `{colors.signal}`, `{typography.statement-lg}` and `{rounded.none}`.
3. Before adding a container, ask whether space and a 0.8px rule would do the same work, because on this site they usually do.
4. Keep a Signal Red budget for each page: one dot per band, one bracketed link per section, and at most one filled button. Write the budget down and audit against it.
5. Build the rails only where there are real figures or real sections to track. An empty instrument panel is worse than none.
6. Check that no element has picked up a shadow, a rounded corner or a synthesised bold, and remove rather than tune.
7. Read the copy against the ClearAI writing guide before shipping: Australian English, no em dashes, measured rather than loud.
8. Run `npx @google/design.md lint DESIGN.md` after edits.
