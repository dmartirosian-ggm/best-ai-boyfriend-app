// @ts-check
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import YAML from 'yaml';

// Production domain: used for canonicals, robots.txt and the sitemap. Set SITE_URL at build time or edit the fallback.
const SITE = process.env.SITE_URL ?? 'https://www.bestaiboyfriendapp.com';

// URL path -> `updated` date from each article's frontmatter, for <lastmod> in the sitemap.
const ARTICLES = './src/content/articles';
const walk = (/** @type {string} */ d) =>
  readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const lastmod = new Map(
  walk(ARTICLES)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const id = relative(ARTICLES, f).replace(/\\/g, '/').replace(/\.mdx$/, '');
      const fm = YAML.parse(readFileSync(f, 'utf8').split(/^---$/m)[1] ?? '') ?? {};
      return [id === 'home' ? '/' : `/${id}/`, fm.updated ? new Date(fm.updated).toISOString() : undefined];
    }),
);

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/go/'),
      serialize(item) {
        const updated = lastmod.get(new URL(item.url).pathname);
        return updated ? { ...item, lastmod: updated } : item;
      },
    }),
  ],
  build: { format: 'directory' },
});
