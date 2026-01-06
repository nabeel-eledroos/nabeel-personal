import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const photoBlog = defineCollection({
  loader: glob({ pattern: "./*.mdx", base: "./src/pages/photography/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    assetName: z.string(),
    pubDate: z.coerce.date()
  })
});

export const collections = { photoBlog };