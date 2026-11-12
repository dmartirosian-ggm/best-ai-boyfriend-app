# Google Ads starter campaign

Two Search campaigns, $30/day total to start, US only, English. Everything imports **paused** so nothing spends until you turn it on.

| Campaign | Ad group | Lands on | Main keywords (US searches/mo, CPC) |
|---|---|---|---|
| BAIB - Gay AI ($15/day, max CPC $2.50) | Gay AI Chat | /gay-ai-boyfriend/ | gay ai chatbot (2,900, ~$3.94), gay ai chat (2,400, ~$3.27), gay chat ai (260), best gay ai chatbot (70, ~$6.52) |
| | Gay AI Boyfriend | /gay-ai-boyfriend/ | gay ai boyfriend (390, ~$4.06), ai boyfriend gay (110) |
| BAIB - AI Boyfriend Apps ($15/day, max CPC $3.00) | Best AI Boyfriend App | / | best ai boyfriend app (210, ~$11.29), ai boyfriend app (880, ~$5.43), ai boyfriend chat (1,300) |
| | Free AI Boyfriend | /free/ | free ai boyfriend (1,300, ~$4.04), ai boyfriend free (1,000) |

Volumes and CPCs: DataForSEO / Google Ads estimates (Oct–Nov 2026). The gay campaign is the priority: it is the cheapest traffic, low competition, and your best organic page already converts it.

Max CPC caps are deliberately below the estimates: you will get fewer, cheaper clicks while you learn what converts.

## Files (Google Ads Editor import)

Regenerate after editing `build.py` (it also checks every headline ≤ 30 and description ≤ 90 characters):

```bash
python3 docs/google-ads/build.py
```

| File | What |
|---|---|
| `campaigns.csv` | 2 campaigns, Search only (no Display/Search partners), paused |
| `ad-groups.csv` | 4 ad groups with max CPC |
| `keywords.csv` | 32 exact/phrase keywords with final URLs |
| `negative-keywords.csv` | 55 campaign negatives × 2: image/art generators, girlfriends, explicit terms, minors, other apps' brand names |
| `responsive-search-ads.csv` | 1 RSA per ad group, 15 headlines + 4 descriptions each |

Import in Google Ads Editor: **Account → Import → From file**, one CSV at a time in the order above, review, then **Post**. (Or copy the keywords/ads into the web UI.)

## Setup checklist

1. **Ask OurDream's affiliate manager whether paid search is allowed** and which keywords are banned. Most programs ban bidding on their brand. That's why `ourdream`, `candy ai`, `nomi` etc. are negatives. Do this before spending.
2. **Turn on auto-tagging** (Admin → Account settings → Auto-tagging). The site detects `gclid` and tags those visitors' affiliate clicks as `sub3=ppc_<page>`, so in Everflow you can compare paid (`ppc_…`) against organic conversions.
3. **Create a conversion action** for affiliate clicks: Goals → Conversions → New → Website → *Manual / Google tag* → category "Outbound click", count "One". Copy the conversion ID (`AW-XXXXXXXXX`) and label, then set them in your host's build environment:
   ```
   PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX
   PUBLIC_GOOGLE_ADS_CLICK_LABEL=xxxxxxxxxxxx
   ```
   Redeploy. Every click on an affiliate button then records a conversion.
4. **Account-level:** add the site's privacy policy URL, and check the "Sexual content" policy ([support.google.com/adspolicy/answer/6023699](https://support.google.com/adspolicy/answer/6023699)). Expect some ads to show as "Eligible (limited)": that's normal for this category.
5. Enable the gay campaign first; add the second campaign after a week.

## Policy rules for this account

- No sex, nude(s), NSFW, porn or "uncensored" in headlines, descriptions or sitelinks, even though competitors do it. That copy gets ads disapproved and, repeated, gets accounts suspended.
- No other brands' trademarks in ad text (Roger, OurDream, Candy AI…).
- Never show reviewers a different page from users (cloaking = permanent ban).
- Landing pages stay as they are: original content, 18+ notice, no explicit images.

## Reading results (after ~2 weeks / ~$300)

- **Google Ads:** cost per affiliate click (conversion) by keyword. Pause keywords with 30+ clicks and no affiliate clicks.
- **Everflow:** filter Sub3 starting `ppc_` for signups and revenue from ads.
- **Break-even:** OurDream pays 40% revshare. A $9.99–19.99/mo subscriber earns about $4–8 a month for you. Work out cost per paying signup = ad spend ÷ paying signups, and compare with expected lifetime commission (e.g. 3–6 months of revshare). Only scale ad groups that come in below that.
- Once you have ~30 conversions a month, switch the bid strategy from Maximize clicks to Maximize conversions (with a target CPA).
