# Best AI Boyfriend App

Affiliate review site for AI boyfriend / companion apps, built with [Astro](https://astro.build) as a fully static site.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run check:content   # fast lint of all articles (frontmatter, MDX, app slugs, internal links)
```

## How it's organized

| Path | What |
|---|---|
| `src/content/articles/**.mdx` | Every page. File path = URL (`reviews/candy-ai.mdx` → `/reviews/candy-ai/`). `home.mdx` is the homepage. |
| `src/data/apps.ts` | **Single source of truth** for every app: scores, prices, features, pros/cons, affiliate links. Tables, cards and scorecards across the site read from here. |
| `src/data/apps.research.json` | Raw research behind apps.ts, with sources and confidence notes. |
| `src/components/` | MDX components (`AppCard`, `CompareTable`, `ReviewSummary`, `VsTable`, `PlanTable`, `CTA`, `Callout`, `TopPicksStrip`…) |
| `src/layouts/Article.astro` | Article template: breadcrumbs, TL;DR box, TOC, FAQ accordion, related links, JSON-LD (Review / Article / FAQPage / BreadcrumbList). |
| `src/pages/` | Homepage, catch-all article route, hubs (`/reviews/`, `/vs/`, `/alternatives/`, `/guides/`, `/faq/`), affiliate redirects (`/go/{slug}/`). |
| `docs/keyword-plan.json` | Keyword plan (from the spreadsheet): page → primary + secondary keywords. |
| `docs/CONTENT_GUIDE.md` | Writing rules, page recipes, component reference. |

## Before launch

1. **Domain:** set `SITE_URL` (or edit `astro.config.mjs`) and update `public/robots.txt`.
2. **Affiliate links:** paste tracking URLs into `affiliateUrl` in `src/data/apps.ts`. Until then `/go/{slug}/` redirects to the app's homepage. Programs (from the keyword plan): Candy AI, OurDream AI, Nomi AI, CrushOn AI, Kupid AI, DreamGF/DreamBF.
3. **Verify facts.** Prices in `apps.ts` were researched from third-party sources on 2026-10-18 (official sites couldn't be reached), several at low confidence — see `notes` in `apps.research.json`. Check each app's checkout page, then bump `verified`.
4. **Add first-hand material.** The copy is written in the site's editorial voice; add your own screenshots, test notes and personal details to reviews to strengthen E-E-A-T, and personalize `/about/`.
5. **Contact details:** the privacy policy and about page say "contact us" but no email is set yet. Add one (privacy rights requests need it).
6. **Hosting:** any static host (Netlify, Vercel, Cloudflare Pages). If your host supports redirects, consider replacing the meta-refresh `/go/` pages with real 302s.

## Adding a page

Create `src/content/articles/<url>.mdx` following `docs/CONTENT_GUIDE.md`, run `npm run check:content`, then `npm run build`. New apps go in `src/data/apps.ts` first.
