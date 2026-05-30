import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const photoBlog = defineCollection({
  loader: glob({ pattern: "./*.mdx", base: "./src/pages/photography/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    assetName: z.string(),
    pubDate: z.coerce.date(),
    thumbnail: z.string().optional(),
    location: z.string().optional(),
  })
});

const projects = defineCollection({
  loader: file("./src/content/projects.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    link: z.string(),
    pubDate: z.coerce.date()
  })
});

const videos = defineCollection({
  loader: file("./src/content/videos.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    duration: z.string(),
    thumbnail: z.string().optional(),
    link: z.string(),
    pubDate: z.coerce.date()
  })
});

const graphicDesign = defineCollection({
  loader: file("./src/content/graphic-design.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.string(),
    year: z.number(),
    assetFolder: z.string(),
    thumbnail: z.string(),
    summary: z.string(),
    role: z.string(),
    client: z.string(),
    deliverables: z.string(),
  })
});

export const collections = { photoBlog, projects, videos, graphicDesign };