import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Every page on the site lives in src/content/articles as .mdx.
 * The file path is the URL: reviews/candy-ai.mdx -> /reviews/candy-ai/
 * home.mdx is the homepage.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(), // <title> tag
    h1: z.string().optional(),
    description: z.string(),
    keyword: z.string(), // primary target keyword (internal use)
    type: z.enum(['home', 'listicle', 'review', 'review-support', 'vs', 'alternatives', 'guide', 'faq', 'page']),
    /** Review: the app reviewed. Vs: both apps. Support pages: the app discussed. */
    apps: z.array(z.string()).default([]),
    /** Short answer shown in a highlighted box under the H1 (great for featured snippets). */
    tldr: z.string().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.string()).default([]),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    priority: z.number().int().min(1).max(3).default(3),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
