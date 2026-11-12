import { APPS } from '~/data/apps';
import type { App } from '~/data/types';
import { beauHref, beauPlacement } from './beau';

const bySlug = new Map(APPS.map((a) => [a.slug, a]));

export function getApp(slug: string): App {
  const app = bySlug.get(slug);
  if (!app) throw new Error(`Unknown app slug "${slug}". Add it to src/data/apps.ts.`);
  return app;
}

export function getApps(slugs: string[]): App[] {
  return slugs.map(getApp);
}

/**
 * Outbound link for CTAs. Affiliate apps go through /go/{slug}/ so links can be swapped in one place.
 * `fromPath` (the current page's pathname) is passed along as ?src= and forwarded to the network as sub3.
 */
export function ctaHref(app: App, fromPath?: string): string {
  if (app.ownedByUs) return beauHref(beauPlacement(fromPath ?? '/')?.target ?? '/');
  if (!app.hasAffiliate) return app.website;
  const go = app.affiliateUrlNsfw && fromPath && NSFW_PAGES.has(fromPath) ? `${app.slug}-nsfw` : app.slug;
  const src = fromPath?.replace(/^\/|\/$/g, '').replace(/\//g, '_') || 'home';
  return fromPath === undefined ? `/go/${go}/` : `/go/${go}/?src=${encodeURIComponent(src)}`;
}

/**
 * Pages whose readers are looking for 18+ chat. CTAs here use an app's affiliateUrlNsfw (adult lander)
 * when it has one; every other page uses the regular affiliateUrl.
 */
export const NSFW_PAGES = new Set([
  '/nsfw-ai-boyfriend/',
  '/candy-ai-alternatives/',
  '/crushon-ai-alternatives/',
  '/spicychat-alternatives/',
  '/janitor-ai-alternatives/',
  '/ourdream-ai-alternatives/',
  '/reviews/spicychat/',
  '/reviews/crushon-ai/',
  '/reviews/janitor-ai/',
  '/reviews/muah-ai/',
]);

export function ctaRel(app: App): string {
  if (app.ownedByUs) return 'noopener';
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
