import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['foundations', 'build-up', 'public']),
    /** Position in the reading order across the whole hub. */
    order: z.number(),
    /** The years the article covers, set large on its card cover. */
    period: z.string(),
    excerpt: z.string(),
    description: z.string(),
  }),
});

export const collections = { articles };
