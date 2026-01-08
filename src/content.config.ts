import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
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

const projects = defineCollection({
  loader: file("./src/pages/projects/projectList.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    skills: z.string(),
    description: z.string(),
    link: z.string(),
    pubDate: z.coerce.date()
  })
});

const videos = defineCollection({
  loader: file("./src/pages/video/videoList.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
    pubDate: z.coerce.date()
  })
});

export const collections = { photoBlog, projects, videos };