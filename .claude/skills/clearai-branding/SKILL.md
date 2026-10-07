---
name: clearai-branding
description: >
  Apply ClearAI brand guidelines to every document, presentation, spreadsheet, PDF, HTML artifact, or
  any other output that ClearAI produces. This skill should trigger whenever Claude is creating any
  deliverable for ClearAI — documents, slide decks, one-pagers, reports, proposals, email templates,
  social media posts, landing pages, dashboards, or any visual/written output. Even if the user
  doesn't mention "branding" or "brand", if the output is a file or artifact being created for
  ClearAI, apply these guidelines. This includes formatting, colour choices, typography, tone of
  voice, logo placement, and overall visual identity. If in doubt, apply the brand — it's always
  better to be on-brand than off-brand.
---

# ClearAI Brand Guidelines

This skill contains the complete ClearAI brand system. Read it before creating any document,
presentation, or deliverable. The goal is to ensure everything produced feels measured, human,
and unmistakably ClearAI.

## Brand Essence

ClearAI exists to ensure technology elevates humanity, not replaces it. The brand is built on
thoughtfulness, integrity, and responsibility. It reflects a deliberate choice to slow down in
a world racing ahead.

**Tagline:** Elevate Humanity

**Brand Values:** Measured. Human. Courageous.

**Key messaging pillars:**
- AI that empowers people, strengthens culture, and builds a future worth inheriting
- The future belongs to those who harness intelligence with intent
- Intelligence without intent is directionless
- We believe intelligence is only as meaningful as the humanity it serves

When writing for ClearAI, the tone should feel confident without being overbearing, warm without
being casual, and precise without being cold. Favour clarity over noise, ethics over expedience,
and people over automation.

---

## Colour Palette

The palette has four colours with a clear hierarchy. Parchment dominates as the primary background,
Obsidian provides contrast and authority, Clay Brown adds warmth, and Signal Red is a sparingly
used accent.

### Colour Specifications

| Name         | Hex       | RGB            | CMYK         | Role                                                    |
|-------------|-----------|----------------|--------------|----------------------------------------------------------|
| Parchment   | `#F4F0ED` | 244, 240, 237  | 0, 2, 3, 4   | Primary background. Creates space, calm, and openness    |
| Obsidian    | `#22190C` | 34, 25, 12     | 0, 26, 65, 87| Headings, body copy, key design elements. Maximum contrast|
| Clay Brown  | `#834A33` | 131, 74, 51    | 0, 44, 61, 49| Backgrounds, containers, warmth and depth                 |
| Signal Red  | `#FF4832` | 255, 72, 50    | 0, 72, 80, 0 | Accent only — CTAs, highlights, brand accents. Use sparingly |

### Colour Usage Rules

- **Parchment** is the default background for all documents and layouts. It anchors the brand with
  warmth and calm. When creating light-themed documents, use Parchment (#F4F0ED) as the page
  background rather than pure white.
- **Obsidian** is for all text, headings, and key design elements. Use it wherever maximum legibility
  and strength are needed. It replaces standard black (#000000) in all ClearAI materials.
- **Clay Brown** works for secondary backgrounds, containers, dividers, and areas that need depth
  without the heaviness of Obsidian. It pairs well with both Parchment and Signal Red.
- **Signal Red** is the spark — use it only for emphasis such as call-to-action buttons, key
  highlights, accent lines, or the dot accent marks. Never use it for large background areas or
  body text. Its power comes from restraint.

### Document-Specific Colour Application

**Word Documents / PDFs:**
- Page background: Parchment (#F4F0ED) or white
- Body text: Obsidian (#22190C)
- Headings: Obsidian (#22190C)
- Accent lines / borders: Signal Red (#FF4832) used sparingly
- Highlight boxes: Clay Brown (#834A33) background with Parchment text

**Presentations (PPTX):**
- Slide backgrounds: alternate between Parchment, Obsidian, and Clay Brown
- Title slides: Obsidian background with Parchment/white text
- Content slides: Parchment background with Obsidian text
- Accent/divider slides: Clay Brown background
- Signal Red for emphasis elements, data highlights, or key callouts only

**Spreadsheets (XLSX):**
- Header row: Obsidian background (#22190C) with Parchment text (#F4F0ED)
- Alternating rows: Parchment (#F4F0ED) and white (#FFFFFF)
- Accent borders or highlights: Signal Red (#FF4832) sparingly
- Section dividers: Clay Brown (#834A33)

**HTML / React artifacts:**
- Background: `#F4F0ED` (Parchment)
- Text: `#22190C` (Obsidian)
- Accent/hover/CTA: `#FF4832` (Signal Red)
- Secondary containers: `#834A33` (Clay Brown)
- Use CSS variables for consistency:
  ```css
  :root {
    --clearai-parchment: #F4F0ED;
    --clearai-obsidian: #22190C;
    --clearai-clay-brown: #834A33;
    --clearai-signal-red: #FF4832;
  }
  ```

---

## Typography

ClearAI uses two typefaces that work in tandem to balance warmth with precision.

### Primary Typeface: Thorndale Regular

A classic serif selected for clarity, balance, and understated authority. Use for headlines,
subheadings, core statements, and body copy where warmth and presence matter.

Thorndale carries weight and assurance with traditional letterforms and even rhythm. It signals
professionalism, trust, and timelessness.

**Fallback stack:** `'Thorndale', 'Times New Roman', Georgia, serif`

### Secondary Typeface: Space Mono Regular

A monospaced typewriter-inspired font that brings structure and an analogue feel. Use for
technical details, captions, metadata, labels, data tables, and digital interfaces.

Space Mono offers precision and order while remaining approachable. It echoes a slower,
more deliberate era of communication — perfectly aligned with ClearAI's ethos.

**Fallback stack:** `'Space Mono', 'Courier New', monospace`

### Typography Usage by Document Type

**Word Documents / PDFs:**
- Headings: Thorndale (or fallback to Times New Roman / Georgia) — bold for H1, regular for H2+
- Body text: Thorndale at 11-12pt
- Captions, footnotes, metadata: Space Mono (or fallback to Courier New) at 9-10pt
- Page numbers, headers/footers: Space Mono

**Presentations:**
- Slide titles: Thorndale, large and confident
- Body text: Thorndale
- Labels, data annotations, small text: Space Mono
- Slide numbers: Space Mono

**HTML / React:**
- Import Space Mono from Google Fonts: `@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');`
- For Thorndale, fall back to the serif stack since it's not a web font
- Headings: serif stack (Georgia as web-safe stand-in for Thorndale)
- Body: serif stack
- Code, labels, metadata: Space Mono

---

## Logo

The ClearAI logo is a distinctive wordmark that pairs a refined serif font ("Clear") with a
handwritten rendering of "AI" — a deliberate tension between the structured and the human-made.

### Logo Variants

1. **Primary Logo** — Serif "Clear" + handwritten "AI". The default for all materials where
   space, background, and context allow.
2. **Secondary Logo** — Full serif wordmark "ClearAI" without the handwritten element. Use for
   formal documents, small-scale contexts, contracts, and internal reports where legibility is
   essential.
3. **Tertiary Logo** — Fully handwritten "Clear AI". Reserved for campaign work, social media,
   and internal culture pieces where warmth and personality are central.

### Logo Colour Usage

- On dark backgrounds (Obsidian, dark imagery): use the white/inverted logo
- On light backgrounds (Parchment, white): use the black/Obsidian logo
- The logo may also appear in Clay Brown, Signal Red, or Parchment on appropriate backgrounds
- Never re-colour the logo outside the approved brand palette

### Logo Placement in Documents

- **Letterhead:** Primary logo top-left, contact details aligned beside it
- **Presentations:** Small primary or secondary logo in the top-left corner of each slide;
  larger logo on title and closing slides
- **Reports/Proposals:** Secondary logo on the cover page and in the header or footer
- **Clear space:** Maintain padding equal to 1/3 of the logo height on all sides

### Logo Don'ts

Never rotate, flip, re-colour outside brand palette, adjust letter spacing, distort, warp, scale
disproportionately, add shadows/glows, or change the font of the logo.

### Where to Find Logo Files

Logo files are stored on Google Drive in the ClearAI Marketing shared drive:
- **Primary Logo:** `Marketing/Brand/Branding Suite/Logos/Primary Logo/` (PNG, SVG, JPG, PDF, EPS, AI)
- **Secondary Logo:** `Marketing/Brand/Branding Suite/Logos/Secondary Logo/`
- **Tertiary Logo:** `Marketing/Brand/Branding Suite/Logos/Tertiary Logo/`
- **Human Made Logos:** `Marketing/Brand/Branding Suite/Logos/Human Made Logos/`

When creating documents that require an embedded logo image, check whether the user has made
logo files available locally. If not, note where they can be found on Google Drive and offer
to fetch them.

---

## Accent Mark

The ClearAI accent mark is a cluster of six circles arranged in a 3x2 grid, rendered in
Signal Red. It represents individuals, ideas, and efforts coming together — a visual nod to
human collaboration behind technology.

Use the accent mark sparingly as a subtle design detail. It works well as a small decorative
element on title pages, section breaks, or near the sign-off of documents.

---

## Photography Style

When selecting or recommending imagery for ClearAI materials:

- Favour warmth, natural tones, soft depth, and thoughtful composition
- Imagery should feel honest, lived-in, and analogue — not sterile or overly polished
- Capture real environments: natural light, textured surfaces, people at ease
- Themes: collaboration, reflection, belonging, quiet details of human spaces
- Avoid stock-photo sterility, forced poses, or overly saturated colours

---

## Branded Assets Reference

### Business Cards
- Size: 90mm x 55mm
- Parchment background with Signal Red logo accent
- Name in Thorndale serif, role beneath
- Contact details in Space Mono
- Two finishes: matte Signal Red with raised Spot UV logo, or pared-back without embellishment

### Letterhead
- A4 format
- Primary logo top-left
- Contact details (phone, email, website) aligned beside logo in Space Mono
- Body text left-aligned in Thorndale with ample white space
- Signal Red accent dots near the sign-off
- Handwritten signature adds personal touch

### Email Signature
- Minimal and purposeful
- Contact details in Space Mono (web mono font)
- ClearAI logo below name/title
- "*Human Made" tagline in Signal Red beneath logo
- Sign-off style: "Kind Regards," followed by name, title, and "and above all, human."

---

## Tone of Voice

When writing any content for ClearAI, follow these principles:

1. **Be measured, not rushed.** Write with intention. Every sentence should earn its place.
2. **Be human, not corporate.** Warmth and authenticity over jargon and buzzwords.
3. **Be courageous, not loud.** Confidence expressed through restraint, not volume.
4. **Favour clarity over complexity.** If a simpler word works, use it.
5. **Use UK English throughout.** Colour, not color. Organisation, not organization. Favour, not favor.
6. **Avoid hype.** ClearAI is built for impact, not hype. No "revolutionary", "game-changing",
   "cutting-edge". Instead: thoughtful, practical, enduring, deliberate.
7. **Centre people.** Technology serves humanity, not the other way round. Frame everything
   through the lens of human benefit and empowerment.

---

## Quick Reference Checklist

Before delivering any ClearAI output, verify:

- [ ] Background uses Parchment (#F4F0ED) or appropriate brand colour, not plain white
- [ ] Text is in Obsidian (#22190C), not standard black
- [ ] Headings use Thorndale / serif stack
- [ ] Technical/meta text uses Space Mono / monospace stack
- [ ] Signal Red (#FF4832) is used sparingly — accents only
- [ ] Logo is correctly placed and uses the right variant for context
- [ ] Tone is measured, human, and courageous — no hype language
- [ ] UK English spelling throughout
- [ ] Generous white space and breathing room in layouts
- [ ] Photography (if used) feels warm, analogue, and human
