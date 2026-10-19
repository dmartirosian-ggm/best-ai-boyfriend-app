import type { APIRoute } from 'astro';

// Generated so the sitemap URL always matches the configured site domain.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nDisallow: /go/\n\nSitemap: ${new URL('/sitemap-index.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
