# Mining a branding suite

A branding suite is an archive built for designers opening files by hand, not for a build
system. It is large, duplicative across formats, and its folder names often contain
spaces, ampersands and emoji. Read it in the order below; the first three steps usually
give you most of the guide.

## 1. Survey before opening anything

```bash
find "<suite>" -maxdepth 2 -type d
find "<suite>" -type f | sed 's/.*\.//' | tr 'A-Z' 'a-z' | sort | uniq -c | sort -rn
du -sh "<suite>"
```

The directory names are the brand's own taxonomy — Primary / Secondary / Tertiary logo,
Accent, Fonts, Assets — and that taxonomy is worth carrying into the guide. The extension
histogram tells you whether there is a token file hiding among the artwork.

## 2. Find the machine-readable token source first

In order of value:

1. Any `.css`, `.json`, `.scss` or `tokens.*` file, often inside a design-system zip.
   This is the brand's own values with the brand's own names — the best source there is.
2. The Brand Guidelines PDF. Read the colour page and the type page. They are usually
   numbered in the low twenties.
3. A Figma template, if the suite ships one.

Values from a token file or a guidelines page are **stated** values. Values from a live
site are **observed**. When both exist, the reconciliation table records which won.

## 3. Inventory the fonts by what is actually there

```bash
find "<suite>" -iname '*.ttf' -o -iname '*.otf' -o -iname '*.woff*' | sort
```

The filenames carry the weights. This matters more than it sounds: if the suite ships
only Regular, the brand has no bold, and any guide that specifies `fontWeight: 700` is
describing a synthesised face the brand never approved. Record the weights present, and
prefer `.woff2` over `.ttf` for anything a browser will load.

## 4. Inventory the logos by variant and colourway

Group by lockup (primary, secondary, tertiary, accent, wordmark) and within each by
colourway. Note which colourways exist, because the gaps are constraints — a logo with no
light cut cannot go on a dark band.

Watch for inconsistent naming across colourways of the same set. Suites are assembled by
hand and one colourway is frequently named differently from the other five. Record it; it
is exactly the thing that wastes twenty minutes later.

## 5. Curate, do not reference

Copy what a build needs into `public/brand/` (or `brand/` where there is no `public/`):

- the logo cuts actually used, kebab-cased with the colourway in the name
- `favicon.ico`
- the fonts, under `fonts/`, at the weights present
- the accent mark

Copy, never move — the suite is the archive. Never let the build read a path inside the
suite: those paths break shells, path resolution and most bundlers, and that is the whole
reason the curated folder exists.

Where a suite offers eighty numbered variants of one mark with no indication which is
canonical, pick one, name it plainly, and mark it **Provisional** in the Assets table with
a note saying to swap the file and keep the name.

## 6. What a suite cannot tell you

A suite has no layout, no spacing rhythm, no motion, no component states and no rule about
what the accent is reserved for. If you have only a suite, those sections of the guide are
empty — leave them empty and say why. Do not fill them with defaults; an omitted section
is information, an invented one is a lie the reader cannot detect.
