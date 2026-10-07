import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// No adapter and no `site` yet: this deploys to Vercel as a static build for
// internal testing, and Vercel autodetects Astro. Set `site` once there is a
// real domain, because that is what canonical URLs are built from.
export default defineConfig({
  output: 'static',
  integrations: [mdx()],
});
