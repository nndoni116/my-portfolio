// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // ★最新のローダーをインポート

const worksCollection = defineCollection({
  // ★最新のContent Layer APIの書き方（globローダーを使用）
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    techStack: z.array(z.string()),
    sortOrder: z.number(),
    projectUrl: z.string().url(),
  }),
});

export const collections = {
  'works': worksCollection,
};