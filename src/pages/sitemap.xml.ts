import type { APIRoute } from 'astro';

// @astrojs/sitemap writes /sitemap-index.xml + /sitemap-0.xml; many tools look for /sitemap.xml first.
export const GET: APIRoute = ({ site }) =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${new URL('/sitemap-0.xml', site)}</loc></sitemap></sitemapindex>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
