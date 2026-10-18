# Content guide

Every page is an `.mdx` file in `src/content/articles/`. **The file path is the URL**:
`src/content/articles/reviews/candy-ai.mdx` → `/reviews/candy-ai/`. `home.mdx` is the homepage.
Use `src/content/articles/home.mdx` as the reference for tone, structure and component usage.

Keyword targets for each page are in `docs/keyword-plan.json`. App facts, prices and scores live in
`src/data/apps.ts` (raw research + sources + confidence notes in `src/data/apps.research.json`).

Check your work with `node scripts/check-content.mjs path/to/file.mdx` (fast) and `npm run build` (full).

## Frontmatter

```yaml
---
title: "Candy AI Review (2026): Is It Worth It?"   # <title>, ≤ 65 chars, primary keyword near the front
h1: "Candy AI review: is it worth it in 2026?"       # optional, defaults to title
description: "…"                                     # 110–160 chars, includes primary keyword
keyword: "candy ai review"                           # primary keyword
type: review          # home | listicle | review | review-support | vs | alternatives | guide | faq | page
apps: [candy-ai]      # app slugs this page is about (review: 1, vs: 2, listicles: the ranked apps)
tldr: "…"             # 1–3 sentence direct answer to the search query (featured-snippet bait)
published: 2026-10-18
updated: 2026-10-18
priority: 1           # from the keyword plan (1–3)
related: [/candy-ai-pricing/, /is-candy-ai-safe/]   # 3–6 internal URLs
faqs:                 # 4–8 items, real "People also ask" style questions; answers 40–90 words, markdown allowed
  - q: "Is Candy AI free?"
    a: "…"
---
```

Always double-quote YAML strings that contain `:` or start with special characters (safest: quote every `q`/`a`).

## Components (available in every .mdx, no import needed)

| Component | Use |
|---|---|
| `<TopPicksStrip picks={[{ app: "nomi-ai", label: "Best overall" }]} />` | Top 3–4 picks above the fold on listicles |
| `<CompareTable apps={["nomi-ai", "candy-ai"]} />` | Quick comparison table |
| `<AppCard app="candy-ai" rank={1} award="Best overall">markdown</AppCard>` | Ranked entry on listicles / alternatives pages. Children = page-specific write-up (2 short paragraphs). Leave a blank line after the opening tag and before the closing tag. |
| `<ReviewSummary app="candy-ai" verdict="One-sentence verdict" />` | Scorecard at the top of reviews |
| `<PlanTable app="candy-ai" />` | Pricing table from apps.ts |
| `<VsTable a="candy-ai" b="ourdream-ai" />` | Side-by-side spec table on vs pages |
| `<CTA app="candy-ai" label="Try Candy AI free" />` | Outbound button (affiliate apps route through `/go/{slug}/`) |
| `<Callout type="tip\|warning\|info\|verdict" title="…">markdown</Callout>` | Highlight box |

Only these components exist. Don't import anything.

## Page recipes

- **Review** (`reviews/x.mdx`): intro answering the main query → `<ReviewSummary>` → `## What is X?` → features he/she can do as a boyfriend (`## Creating your boyfriend`, `## Chat quality & memory`, `## Voice, photos and video`) → `## Pricing` with `<PlanTable>` → `## Is X free?` → `## Is X safe?` (privacy, data, breaches, age) → `## Who should use it` / `## Who should skip it` → `## Alternatives` (AppCards or links, push affiliate apps where honestly better) → verdict Callout. 1,500–2,200 words.
- **Review-support** (pricing, safety, explainer): answer the query in the first paragraph and the `tldr`, then go deep on that one question. 900–1,400 words.
- **Vs**: `tldr` with the winner → `<VsTable>` → sections per dimension each ending with "**Winner:** X" → `## Which should you choose?` bullets → CTAs. 1,200–1,800 words.
- **Alternatives**: why people leave X (filters, price, memory, safety) → `<TopPicksStrip>` → `<CompareTable>` → 5–8 `<AppCard>`s ranked → how to switch / what to look for. 1,300–2,000 words.
- **Listicle / topic**: like home.mdx, scoped to the angle (free, voice calls, gay, anime…). 1,300–2,200 words.
- **FAQ** (`faq/x.mdx`): direct answer first sentence, then 500–900 words of genuinely useful detail, linking to relevant reviews/listicles. 3–5 extra `faqs`.

## Editorial rules (important)

1. **No fabrication.** Facts (prices, features, policies, incidents) must come from `apps.ts` / `apps.research.json`. Never invent quotes, Reddit usernames, user counts, test transcripts, or anecdotes ("when I asked him…"). Where research is low-confidence, hedge ("reportedly", "at the time of writing") or leave it out. Don't put specific prices in prose unless they match apps.ts — prefer `<PlanTable>` / `<CompareTable>`.
2. **Honest funnel.** Non-affiliate apps get fair reviews. Where it's genuinely true, point readers to affiliate apps (Nomi AI, Candy AI, OurDream AI, CrushOn AI, DreamBF, Kupid AI) as alternatives — e.g. "if you want long-term memory, Nomi does it better". Scores come from apps.ts; don't contradict them.
3. **Boyfriend angle.** Write for people (mostly women, plus gay/bi men) looking for a male AI companion. Use "he/him" for the companion. Mention when an app is girlfriend-first.
4. **Safety & wellbeing.** Keep a calm, non-judgmental tone. Mention 18+ requirements. Never describe explicit sexual content — "18+ chat", "spicy", "unfiltered" is as far as it goes.
5. **Style.** Plain English, short paragraphs, second person, specific over generic. No "In today's digital age", no "delve", no emoji in body text. American spelling. Year is 2026.
6. **Internal links.** 5+ contextual internal links per page using the planned URLs (`scripts/planned-urls.json`). Link the primary keyword pages with descriptive anchor text.
7. **MDX gotchas.** Don't write a bare `<` or `{` in prose (write "less than", or use words). Don't start the body with an H1 (`#`); start with an intro paragraph and use `##`/`###`.
