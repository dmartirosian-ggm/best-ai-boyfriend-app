import { APPS } from '~/data/apps';
import type { App } from '~/data/types';

const bySlug = new Map(APPS.map((a) => [a.slug, a]));

export function getApp(slug: string): App {
  const app = bySlug.get(slug);
  if (!app) throw new Error(`Unknown app slug "${slug}". Add it to src/data/apps.ts.`);
  return app;
}

export function getApps(slugs: string[]): App[] {
  return slugs.map(getApp);
}

/** Outbound link for CTAs. Affiliate apps go through /go/{slug}/ so links can be swapped in one place. */
export function ctaHref(app: App): string {
  return app.hasAffiliate ? `/go/${app.slug}/` : app.website;
}

export function ctaRel(app: App): string {
  return app.hasAffiliate ? 'sponsored nofollow noopener' : 'nofollow noopener';
}

export function reviewHref(app: App): string | null {
  return app.review ? `/reviews/${app.slug}/` : null;
}

/** Ranked list of apps that pay commission, best first. Used to funnel readers from non-affiliate pages. */
export function topAffiliateApps(limit = 4, exclude: string[] = []): App[] {
  return APPS.filter((a) => a.hasAffiliate && !exclude.includes(a.slug))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

export const PLATFORM_LABEL = { web: 'Web', ios: 'iOS', android: 'Android' } as const;
export const NSFW_LABEL = {
  yes: '18+ allowed',
  no: 'Not allowed',
  filtered: 'Filtered',
  unclear: 'Unclear',
} as const;
