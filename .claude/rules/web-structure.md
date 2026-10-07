# Web project structure

- Separate files into `assets/` and `src/`.
- `assets/` holds fonts, images, scripts, styles (global CSS) and related folders.
- `src/` holds components, services, style (component-level styles) and related folders.
- In this Astro project `public/` holds only files that need a fixed URL (the favicon).
  Everything else is imported from `assets/` so Vite fingerprints it.
