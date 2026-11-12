#!/usr/bin/env python3
"""Generates the Google Ads Editor import CSVs in this folder and checks character limits.
Run: python3 docs/google-ads/build.py"""
import csv, os, sys

OUT = os.path.dirname(os.path.abspath(__file__))
SITE = 'https://www.bestaiboyfriendapp.com'

CAMPAIGNS = {
    'BAIB - Gay AI': {'budget': 15, 'max_cpc': 2.50},
    'BAIB - AI Boyfriend Apps': {'budget': 15, 'max_cpc': 3.00},
}

# (campaign, ad group, final url path, keywords as (text, match))
AD_GROUPS = [
    ('BAIB - Gay AI', 'Gay AI Boyfriend', '/gay-ai-boyfriend/', [
        ('gay ai boyfriend', 'Exact'), ('gay ai boyfriend', 'Phrase'), ('ai boyfriend gay', 'Phrase'),
        ('best gay ai boyfriend', 'Phrase'), ('gay ai boyfriend app', 'Phrase'), ('gay boyfriend ai', 'Phrase'),
    ]),
    ('BAIB - Gay AI', 'Gay AI Chat', '/gay-ai-boyfriend/', [
        ('gay ai chat', 'Exact'), ('gay ai chat', 'Phrase'), ('gay ai chatbot', 'Exact'), ('gay ai chatbot', 'Phrase'),
        ('gay chat ai', 'Phrase'), ('ai gay chat', 'Phrase'), ('gay ai chatbots', 'Phrase'),
        ('best gay ai chatbot', 'Phrase'), ('free gay ai chatbot', 'Phrase'), ('gay ai app', 'Phrase'),
        ('gay ai apps', 'Phrase'), ('best gay ai', 'Exact'),
    ]),
    ('BAIB - AI Boyfriend Apps', 'Best AI Boyfriend App', '/', [
        ('best ai boyfriend app', 'Exact'), ('best ai boyfriend app', 'Phrase'), ('best ai boyfriend', 'Phrase'),
        ('ai boyfriend app', 'Phrase'), ('ai boyfriend apps', 'Phrase'), ('ai boyfriend chat', 'Phrase'),
        ('ai boyfriend chatbot', 'Phrase'), ('virtual boyfriend app', 'Phrase'), ('ai companion app', 'Phrase'),
    ]),
    ('BAIB - AI Boyfriend Apps', 'Free AI Boyfriend', '/free/', [
        ('free ai boyfriend', 'Phrase'), ('ai boyfriend free', 'Phrase'), ('free ai boyfriend app', 'Phrase'),
        ('ai boyfriend no sign up', 'Phrase'), ('free ai boyfriend chat', 'Phrase'),
    ]),
]

# Campaign-level negatives (phrase match). Keep traffic to people choosing an app.
NEGATIVES = [
    # wrong product / intent
    'girlfriend', 'image', 'images', 'picture', 'pictures', 'photo', 'art', 'generator', 'video generator',
    'song', 'country song', 'test', 'is ai gay', 'meme', 'voice changer', 'jobs', 'job', 'course', 'ceo',
    # explicit / policy-risky terms
    'porn', 'xxx', 'nude', 'nudes', 'naked', 'deepfake', 'undress', 'hentai',
    # minors - never serve
    'kids', 'kid', 'teen', 'teens', 'child', 'children', 'minor', 'for school',
    # affiliate brand terms - check each program's paid-search rules before removing
    'ourdream', 'our dream', 'candy ai', 'candy.ai', 'nomi', 'kindroid', 'crushon', 'kupid', 'dreambf', 'dream bf',
    # navigational to other apps / low value
    'character ai', 'c.ai', 'janitor', 'replika', 'chatgpt', 'login', 'sign in', 'apk', 'mod apk', 'reddit',
]

# Responsive search ads: up to 15 headlines (<=30 chars), 4 descriptions (<=90 chars), paths <=15 chars.
ADS = {
    'Gay AI Boyfriend': {
        'path': ('gay-ai', 'boyfriend'),
        'headlines': [
            'Best Gay AI Boyfriend Apps', 'Gay AI Boyfriend Apps 2026', 'Top Gay AI Boyfriend Picks',
            'Built for Gay, Bi & Queer Men', 'Compare Gay AI Boyfriends', 'Honest Reviews & Rankings',
            'Free Options Included', 'Design Your AI Boyfriend', 'Find Your Perfect AI Match',
            'Voice Calls, Photos & More', 'Updated for 2026', 'Privacy Tips Included',
            'See Our Top Pick', 'Try Free Before You Pay', 'Side-by-Side Comparison',
        ],
        'descriptions': [
            'We compared the top gay AI boyfriend apps on memory, voice, photos, privacy and price.',
            'Apps built for gay, bi and queer men, plus free options. See which one is right for you.',
            'Design his look and personality, then chat, call and get photos. Compare picks for 2026.',
            'Independent rankings with honest pros and cons. Free tiers and privacy notes included.',
        ],
    },
    'Gay AI Chat': {
        'path': ('gay-ai', 'chat'),
        'headlines': [
            'Best Gay AI Chat Apps 2026', 'Gay AI Chatbot Picks', 'Top Gay AI Chat Compared',
            'Chat With Your AI Boyfriend', 'Built for Gay, Bi & Queer Men', 'Free Gay AI Chat Options',
            'Honest Reviews & Rankings', 'Voice Calls, Photos & More', 'Design Your Own Companion',
            'Updated for 2026', 'See Our Top Pick', 'Try Free Before You Pay',
            'Side-by-Side Comparison', 'Privacy Tips Included', 'Find Your Perfect AI Match',
        ],
        'descriptions': [
            'The best gay AI chat apps compared on memory, voice, photos, privacy and real cost.',
            'Chat with an AI boyfriend made for gay, bi and queer men. Free options included.',
            'We ranked every major gay AI chatbot so you can skip the bad ones. See our top pick.',
            'Honest pros and cons, free tiers and privacy notes for each app. Updated for 2026.',
        ],
    },
    'Best AI Boyfriend App': {
        'path': ('best', 'ai-boyfriend'),
        'headlines': [
            'Best AI Boyfriend Apps 2026', '9 AI Boyfriend Apps Ranked', 'Compare AI Boyfriend Apps',
            'Honest Reviews & Rankings', 'Find Your Perfect AI Match', 'Free Options Included',
            'Memory, Voice & Photos', 'Design Your AI Boyfriend', 'Updated for 2026',
            'See Our Top Pick', 'Side-by-Side Comparison', 'Try Free Before You Pay',
            'Real Costs, No Surprises', 'Privacy & Safety Checked', 'Gay & Bi Friendly Picks',
        ],
        'descriptions': [
            'We compared the top AI boyfriend apps on memory, voice, photos, privacy and real cost.',
            'From free apps to the most realistic: see which AI boyfriend app is right for you.',
            'Honest pros and cons for every app, including hidden token costs and privacy records.',
            'Design his look and personality, then chat, call and get photos. Our 2026 rankings.',
        ],
    },
    'Free AI Boyfriend': {
        'path': ('free', 'ai-boyfriend'),
        'headlines': [
            'Free AI Boyfriend Apps 2026', 'Best Free AI Boyfriend Apps', 'Free AI Boyfriend Chat',
            'Which Free Tiers Are Real?', 'Truly Free vs Free Trials', 'Honest Reviews & Rankings',
            'Free Plans Compared', 'Android & iPhone Picks', 'Updated for 2026',
            'See Our Top Free Pick', 'Compare Free Plans', 'Skip the Fake Free Apps',
            'Free Chat, Voice & Photos', 'Find Your Perfect AI Match', 'Privacy Tips Included',
        ],
        'descriptions': [
            'Which AI boyfriend apps are really free and which are trials in disguise. Compared.',
            'Free AI boyfriend apps for Android, iPhone and web, with honest limits for each one.',
            'We checked every free tier so you know what you get before paying anything. 2026 list.',
            'Free message limits, voice and photos compared, plus the best upgrade if you want more.',
        ],
    },
}

errors = []
for g, ad in ADS.items():
    for h in ad['headlines']:
        if len(h) > 30: errors.append(f'{g}: headline {len(h)} chars: {h}')
    for d in ad['descriptions']:
        if len(d) > 90: errors.append(f'{g}: description {len(d)} chars: {d}')
    for p in ad['path']:
        if len(p) > 15: errors.append(f'{g}: path {p}')
    if len(ad['headlines']) > 15 or len(ad['descriptions']) > 4: errors.append(f'{g}: too many assets')
if errors:
    print('\n'.join(errors)); sys.exit(1)

def w(name, header, rows):
    with open(os.path.join(OUT, name), 'w', newline='') as f:
        cw = csv.writer(f); cw.writerow(header); cw.writerows(rows)

w('campaigns.csv', ['Campaign', 'Campaign Type', 'Budget', 'Bid Strategy Type', 'Networks', 'Languages', 'Location', 'Campaign Status'],
  [[c, 'Search', v['budget'], 'Maximize clicks', 'Google search', 'en', 'United States', 'Paused'] for c, v in CAMPAIGNS.items()])
w('ad-groups.csv', ['Campaign', 'Ad Group', 'Max CPC', 'Ad Group Status'],
  [[c, g, CAMPAIGNS[c]['max_cpc'], 'Enabled'] for c, g, _, _ in AD_GROUPS])
w('keywords.csv', ['Campaign', 'Ad Group', 'Keyword', 'Criterion Type', 'Final URL'],
  [[c, g, kw, m, f'{SITE}{url}'] for c, g, url, kws in AD_GROUPS for kw, m in kws])
w('negative-keywords.csv', ['Campaign', 'Keyword', 'Criterion Type'],
  [[c, n, 'Campaign negative phrase'] for c in CAMPAIGNS for n in NEGATIVES])
rsa_header = ['Campaign', 'Ad Group', 'Ad type', 'Final URL', 'Path 1', 'Path 2'] + \
    [f'Headline {i}' for i in range(1, 16)] + [f'Description {i}' for i in range(1, 5)]
rows = []
for c, g, url, _ in AD_GROUPS:
    ad = ADS[g]
    rows.append([c, g, 'Responsive search ad', f'{SITE}{url}', *ad['path'], *ad['headlines'], *ad['descriptions']])
w('responsive-search-ads.csv', rsa_header, rows)
print('OK: all assets within limits; CSVs written to', OUT)
