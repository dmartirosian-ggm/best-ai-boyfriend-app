// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: set to the production domain before launch (used for canonicals + sitemap).
const SITE = process.env.SITE_URL ?? 'https://www.bestaiboyfriendapp.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({ filter: (page) => !page.includes('/go/') }),
  ],
  build: { format: 'directory' },
});
