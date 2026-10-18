import type { App } from './types';

/**
 * Single source of truth for app facts, scores and affiliate links.
 * Facts researched 2026-10-18 from third-party reviews and app-store listings (official sites were
 * not reachable during research) — re-check prices on each app's checkout page before launch.
 * Raw research with sources and confidence notes: ./apps.research.json
 *
 * affiliateUrl: paste your tracking link once approved. While null, /go/{slug}/ falls back to the website.
 */
export const APPS: App[] = [
  {
    "slug": "nomi-ai",
    "freeShort": "Yes, limited daily messages",
    "name": "Nomi AI",
    "tagline": "The AI boyfriend that actually remembers you",
    "website": "https://nomi.ai",
    "developer": "Glimpse AI (Baltimore, MD)",
    "launched": "2023",
    "affiliateUrl": null,
    "hasAffiliate": true,
    "score": 9.1,
    "bestFor": "Long-term relationship & memory",
    "review": true,
    "platforms": [
      "web",
      "ios",
      "android"
    ],
    "freeTier": "One Nomi with a daily message allotment and limited voice and image credits.",
    "startingPrice": "From $8.33/mo (annual)",
    "plans": [
      {
        "name": "Nomi Pro (monthly)",
        "monthly": "$15.99/mo"
      },
      {
        "name": "Nomi Pro (annual)",
        "monthly": "about $8.33/mo",
        "annual": "$99.99/yr"
      },
      {
        "name": "Lifetime",
        "monthly": "$299.99 one-time",
        "notes": "Reported by one aggregator (verified March 2026); not confirmed officially"
      }
    ],
    "boyfriendMode": "Yes. Companions can be any gender, and partner/romantic relationships are supported.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": true,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": true
    },
    "nsfw": "yes",
    "memory": "Widely regarded as one of the best long-term memory systems in the category; memory is a core feature.",
    "minAge": 18,
    "privacy": "Small private company; no reported breaches found. Allows adult/uncensored roleplay for consenting adults.",
    "controversies": "Permissive content policy has drawn criticism in press (not detailed here).",
    "pros": [
      "Excellent memory",
      "Group chats with multiple Nomis",
      "Voice calls and selfies",
      "Good-value annual plan"
    ],
    "cons": [
      "Free tier is very limited",
      "Images less polished than image-first apps",
      "Uncensored roleplay may concern some users",
      "Small company"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://aitoolsatlas.ai/tools/nomi/pricing",
      "https://apps.apple.com/app/id6450270929",
      "https://www.realite-virtuelle.com/nomi-ai-review/",
      "https://neuronfeed.com/startups/nomi-ai"
    ]
  },
  {
    "slug": "kindroid",
    "freeShort": "Yes, limited",
    "name": "Kindroid",
    "tagline": "Build a boyfriend down to his backstory and voice",
    "website": "https://kindroid.ai",
    "developer": "Kindroid, Inc.",
    "launched": "2023",
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 9.0,
    "bestFor": "Deep customization",
    "review": true,
    "platforms": [
      "web",
      "ios",
      "android"
    ],
    "freeTier": "Limited free tier; sources disagree (1-2 Kindroids, daily message cap or Lite model, ~5,000 lifetime audio characters, few or no selfies).",
    "startingPrice": "From $13.99/mo",
    "plans": [
      {
        "name": "Subscription (web)",
        "monthly": "$13.99/mo",
        "annual": "$139.99/yr"
      },
      {
        "name": "Subscription (app stores)",
        "monthly": "$15.99/mo",
        "annual": "$159.99/yr",
        "notes": "Some sources cite $14.99/mo, $149.99/yr"
      },
      {
        "name": "Ultra add-on",
        "monthly": "+$24.99/mo (web)",
        "notes": "Monthly only; $28.99 via App Store"
      },
      {
        "name": "Max add-on",
        "monthly": "+$59.99/mo (web)",
        "notes": "$68.99 via App Store"
      }
    ],
    "boyfriendMode": "Yes. Fully customizable companions of any gender, including romantic relationships.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": true,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": true
    },
    "nsfw": "yes",
    "memory": "Strong: layered long-term memory, journals and backstory; often ranked alongside Nomi as best-in-class.",
    "minAge": 18,
    "privacy": "No breach reports found. Data policy specifics not verified in this pass.",
    "controversies": null,
    "pros": [
      "Excellent memory and customization",
      "Group chats",
      "Voice calls and selfies",
      "Cheaper on the web than in app stores"
    ],
    "cons": [
      "Free tier is thin",
      "Add-ons make top tiers expensive",
      "Complex settings for beginners",
      "App-store prices higher than web"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://apppricinglab.com/iap/apple/6451038161",
      "https://aicompanionpick.com/kindroid-pricing-vs-replika-pro",
      "https://aitoolsatlas.ai/tools/kindroid/pricing",
      "https://aichief.com/ai-fun-tools/kindroid-ai/"
    ]
  },
  {
    "slug": "candy-ai",
    "freeShort": "Preview only",
    "name": "Candy AI",
    "tagline": "Photo-real boyfriends with images, voice and 18+ chat",
    "website": "https://candy.ai",
    "developer": "EverAI Limited (Malta)",
    "launched": "2023",
    "affiliateUrl": null,
    "hasAffiliate": true,
    "score": 8.7,
    "bestFor": "Visual + spicy chat",
    "review": true,
    "platforms": [
      "web"
    ],
    "freeTier": "Free account with limited chat; images, voice and video consume tokens, so the free tier is mostly a preview.",
    "startingPrice": "From $12.99/mo",
    "plans": [
      {
        "name": "Premium (monthly)",
        "monthly": "$12.99/mo",
        "notes": "Some reviews cite $13.99/mo; includes a small monthly token allowance (about 100 tokens)"
      },
      {
        "name": "Premium (annual)",
        "monthly": "$3.99-$5.99/mo",
        "annual": "$47.88-$71.88/yr",
        "notes": "Sources disagree; promo pricing changes often"
      },
      {
        "name": "Token packs",
        "monthly": "about $9.99 per 100 tokens",
        "notes": "Images cost about 4 tokens each; reviewers report real spend of $25-60/mo for heavy users"
      }
    ],
    "boyfriendMode": "Yes. The character builder has a 'Male' option and pre-made male companions (one 2025 review counted 9).",
    "features": {
      "voiceMessages": true,
      "voiceCalls": true,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "yes",
    "memory": "Reviews describe decent short-to-mid-term memory; not a standout compared with Nomi/Kindroid.",
    "minAge": 18,
    "privacy": "Operated by EverAI Limited, Malta (EU/GDPR jurisdiction). No public breach found. No clear published refund policy, per reviewers.",
    "controversies": null,
    "pros": [
      "Polished builder with male companion option",
      "Strong image generation",
      "Voice messages and calls",
      "Cheap annual plan"
    ],
    "cons": [
      "Token system makes real costs much higher than the sticker price",
      "Male character roster much smaller than female",
      "Web only, no native apps",
      "Pricing and promos change often"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://www.startuphub.ai/ai-news/reviews/2026/candy-ai-review-2026",
      "https://aicompanionpick.com/candy-ai-pricing-2026",
      "https://www.aigirlfriends.it.com/?p=160",
      "https://devicediary.blog/?p=566",
      "https://commandlinux.com/ai/candy-ai/",
      "https://blockchain.news/ai/candy-ai"
    ]
  },
  {
    "slug": "ourdream-ai",
    "freeShort": "~50 messages/day",
    "name": "OurDream AI",
    "tagline": "Unlimited chat plus image and video generation",
    "website": "https://ourdream.ai",
    "developer": "Dream Studio LLC / Dream Studio USA, Inc. (sources differ)",
    "launched": "2025",
    "affiliateUrl": null,
    "hasAffiliate": true,
    "score": 8.6,
    "bestFor": "Images, video & LGBTQ+ options",
    "review": true,
    "platforms": [
      "web"
    ],
    "freeTier": "About 50 messages/day plus a one-time ~55 DreamCoin signup bonus.",
    "startingPrice": "From $9.99/mo (annual)",
    "plans": [
      {
        "name": "Premium (monthly)",
        "monthly": "$19.99/mo",
        "notes": "Unlimited messages, 1,000 DreamCoins/month for images, video and voice"
      },
      {
        "name": "Premium (annual)",
        "monthly": "$9.99/mo",
        "annual": "$119.88/yr",
        "notes": "Coin bonus details vary by source"
      },
      {
        "name": "DreamCoin packs",
        "monthly": "1,000 coins for $9.99",
        "notes": "Up to 20,000 coins for $159.99"
      }
    ],
    "boyfriendMode": "Yes. Male companions can be created; there also appear to be gay- and trans-focused variants (OurDream Gay / OurDream Trans).",
    "features": {
      "voiceMessages": true,
      "voiceCalls": null,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "yes",
    "memory": "Reviewers praise chat quality and character creation; no specific long-term memory testing found.",
    "minAge": 18,
    "privacy": "US-based operator; domain registered Nov 2024. No breach reports found. Data policy details not verified.",
    "controversies": null,
    "pros": [
      "Unlimited chat on paid plan",
      "Image and short video generation",
      "Male and LGBTQ+ oriented variants",
      "Generous free daily message allowance"
    ],
    "cons": [
      "Media (images/video/voice) burns DreamCoins",
      "Video generation reported to fail or be slow at peak times",
      "Higher monthly price than most rivals",
      "Newer company with limited track record"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://www.startuphub.ai/ai-news/reviews/2026/ourdream-ai-review-2026",
      "https://aiblogfirst.com/ourdream-ai-pricing/",
      "https://neuronfeed.com/startups/ourdream-ai",
      "https://www.aiapps.com/items/ourdream-gay/",
      "https://www.urlert.com/domains/ourdream.ai"
    ]
  },
  {
    "slug": "crushon-ai",
    "freeShort": "Yes, capped + ads",
    "name": "CrushOn AI",
    "tagline": "Thousands of ready-made boyfriends, unfiltered",
    "website": "https://crushon.ai",
    "developer": null,
    "launched": "2023",
    "affiliateUrl": null,
    "hasAffiliate": true,
    "score": 7.9,
    "bestFor": "Huge character library",
    "review": true,
    "platforms": [
      "web"
    ],
    "freeTier": "Limited free messages with ads (sources cite ~50/day or 100/month); short memory.",
    "startingPrice": "From $5.99/mo",
    "plans": [
      {
        "name": "Standard",
        "monthly": "$5.99/mo",
        "notes": "About 2,000 messages/month"
      },
      {
        "name": "Premium",
        "monthly": "$14.99/mo",
        "notes": "About 6,000 messages/month"
      },
      {
        "name": "Deluxe",
        "monthly": "$49.90/mo",
        "notes": "Unlimited messages"
      },
      {
        "name": "Annual billing",
        "monthly": "about 30% off",
        "notes": "Reportedly introduced April 2026; e.g. Standard about $4.19-$4.90/mo"
      }
    ],
    "boyfriendMode": "Yes. Large library of user-made characters including male bots; custom creation available.",
    "features": {
      "voiceMessages": null,
      "voiceCalls": null,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "yes",
    "memory": "Free users get recent-message-only memory; higher tiers get larger context.",
    "minAge": 18,
    "privacy": "Mozilla's Feb 2024 Privacy Not Included review gave it a warning label, noting its policy allows collecting sensitive data such as sexual health, medication and gender-affirming care info.",
    "controversies": "Flagged by Mozilla (2024) for privacy practices and for disturbing user-generated content themes.",
    "pros": [
      "Cheap entry tier",
      "Huge character library",
      "Unfiltered NSFW",
      "Many model choices"
    ],
    "cons": [
      "Poor privacy rating from Mozilla",
      "Message caps even on paid tiers",
      "Top tier is expensive",
      "Ads on free tier"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://plisio.net/ai/crushon-ai",
      "https://www.roborhythms.com/is-crushon-ai-free-worth-it/",
      "https://www.mozillafoundation.org/en/privacynotincluded/articles/happy-valentines-day-romantic-ai-chatbots-dont-have-your-privacy-at-heart/",
      "https://gizmodo.com/your-ai-girlfriend-is-a-data-harvesting-horror-show-1851253284"
    ]
  },
  {
    "slug": "spicychat",
    "freeShort": "Unlimited chat, with ads",
    "name": "SpicyChat",
    "tagline": "Generous free tier with unfiltered roleplay",
    "website": "https://spicychat.ai",
    "developer": null,
    "launched": "2023",
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 7.7,
    "bestFor": "Free NSFW roleplay",
    "review": true,
    "platforms": [
      "web",
      "ios",
      "android"
    ],
    "freeTier": "Free unlimited chat with ads and queue waits, 4K context memory and short (180-token) replies.",
    "startingPrice": "From $4.99/mo",
    "plans": [
      {
        "name": "Get a Taste",
        "monthly": "$4.99-$5/mo",
        "notes": "Removes ads and queues; same 4K memory"
      },
      {
        "name": "True Supporter",
        "monthly": "$19.95/mo",
        "notes": "Raised from $14.95 on 8 Sept 2026; 8K memory"
      },
      {
        "name": "I'm All In",
        "monthly": "$24.95-$29.95/mo",
        "notes": "16K memory (32K on some models since Sept 2026); voice; post-increase price unconfirmed"
      }
    ],
    "boyfriendMode": "Yes. Large user-created library includes many male characters.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": null,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": true
    },
    "nsfw": "yes",
    "memory": "Tier-dependent context: 4K free, 8K True Supporter, 16-32K I'm All In. Semantic memory on paid tiers.",
    "minAge": 18,
    "privacy": "Not verified in this pass; no breach reports found.",
    "controversies": "Sept 2026 price increase with no added features drew criticism.",
    "pros": [
      "Generous free tier",
      "Uncensored NSFW",
      "Huge character library",
      "Clear memory scaling by tier"
    ],
    "cons": [
      "Recent price hike",
      "Free replies short and queued",
      "Voice only on top tier",
      "UI sometimes misreports memory size"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://www.roborhythms.com/spicychat-free-user-limits/",
      "https://www.roborhythms.com/spicychat-models-explained/",
      "https://www.roborhythms.com/best-spicy-ai-chat-apps/",
      "https://cybermonday.it.com/spicychat-ai-review/"
    ]
  },
  {
    "slug": "dreambf",
    "freeShort": "Yes, daily tokens",
    "name": "DreamBF",
    "tagline": "Made for boyfriends: design his face, body and style",
    "website": "https://dreambf.ai",
    "developer": "DreamGF team (same company as DreamGF)",
    "launched": null,
    "affiliateUrl": null,
    "hasAffiliate": true,
    "score": 7.6,
    "bestFor": "Designing his look",
    "review": true,
    "platforms": [
      "web"
    ],
    "freeTier": "Free plan with limited functionality; token-based, with daily claim bonuses and referrals.",
    "startingPrice": "From $12.99/mo",
    "plans": [
      {
        "name": "Paid tiers (e.g. Gold)",
        "monthly": "from $12.99/mo",
        "notes": "One directory lists $12.99/mo start; another guide says $10-30/mo; tokens extra for images/outfits/voice calls"
      }
    ],
    "boyfriendMode": "Yes. Dedicated AI boyfriend product; build face, body, outfit and personality, plus swipe-style browsing of pre-made boyfriends.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": true,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "yes",
    "memory": "No reliable reviews of memory quality found.",
    "minAge": 18,
    "privacy": "Not verified; no breach reports found.",
    "controversies": null,
    "pros": [
      "Built specifically for AI boyfriends",
      "Detailed visual builder",
      "Voice messages and NSFW images",
      "Free daily tokens"
    ],
    "cons": [
      "Web only, no apps",
      "Pricing not transparent",
      "Voice calls drain tokens quickly",
      "Few independent reviews"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://aigearbase.com/tool/dreambf",
      "https://www.aiapps.com/items/dreambf-ai/",
      "https://localsinsider.com/?p=24745",
      "https://neuronfeed.com/compare/dreambf-vs-hammerai"
    ]
  },
  {
    "slug": "replika",
    "freeShort": "Friend mode only",
    "name": "Replika",
    "tagline": "The original AI companion, now with a 3D avatar",
    "website": "https://replika.com",
    "developer": "Luka, Inc.",
    "launched": "2017",
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 7.4,
    "bestFor": "Emotional support & beginners",
    "review": true,
    "platforms": [
      "web",
      "ios",
      "android"
    ],
    "freeTier": "Free chat as a friend with basic features; romantic relationship status, voice calls and advanced features need a subscription.",
    "startingPrice": "From $69.99/yr",
    "plans": [
      {
        "name": "Pro",
        "monthly": "$19.99/mo",
        "annual": "$69.99/yr"
      },
      {
        "name": "Ultra",
        "monthly": "$29.99/mo",
        "annual": "$119.99/yr"
      },
      {
        "name": "Platinum",
        "notes": "Exists as top tier; price not verified (one source suggests about $89)"
      }
    ],
    "boyfriendMode": "Yes. Avatar can be male; 'Boyfriend' relationship status requires a paid plan.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": true,
      "imageGen": null,
      "customCharacters": false,
      "groupChat": false
    },
    "nsfw": "filtered",
    "memory": "Moderate; has a memory/diary system but users often report forgetting details.",
    "minAge": 18,
    "privacy": "Italy's Garante fined Luka €5 million (decided April 2025, announced May 2025) for GDPR violations including lack of a legal basis, poor transparency and no age verification before Feb 2023. Prices are in-app only and vary by region.",
    "controversies": "Feb 2023 Italian suspension and ERP (erotic roleplay) removal backlash; €5M GDPR fine in 2025; further Garante probe into model training.",
    "pros": [
      "Most established companion app",
      "3D avatar, AR and video-call features",
      "Polished mobile apps",
      "Good for emotional support-style chat"
    ],
    "cons": [
      "Romance locked behind paywall",
      "NSFW heavily restricted",
      "Regulatory privacy fine",
      "Only one companion per account"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://www.edpb.europa.eu/news/ai-the-italian-supervisory-authority-fines-company-behind-chatbot-replika_da",
      "https://babl.ai/?p=7575",
      "https://www.eesel.ai/blog/replika-ai-pricing",
      "https://aicompanionpick.com/replika-pricing-2026"
    ]
  },
  {
    "slug": "character-ai",
    "freeShort": "Unlimited, with ads",
    "name": "Character AI",
    "tagline": "Free unlimited chat with millions of characters",
    "website": "https://character.ai",
    "developer": "Character Technologies, Inc.",
    "launched": "2022",
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 7.2,
    "bestFor": "Free, safe-for-work chat",
    "review": true,
    "platforms": [
      "web",
      "ios",
      "android"
    ],
    "freeTier": "Free unlimited text chat with ads and some limits; huge character library.",
    "startingPrice": "Free; c.ai+ $9.99/mo",
    "plans": [
      {
        "name": "c.ai+",
        "monthly": "$9.99/mo",
        "annual": "$94.99/yr",
        "notes": "Prices vary by country"
      }
    ],
    "boyfriendMode": "Yes. Many user-made male/romance characters, but romantic content is filtered.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": true,
      "imageGen": null,
      "customCharacters": true,
      "groupChat": true
    },
    "nsfw": "no",
    "memory": "Limited context; pinned memories help, but long-term recall is weak.",
    "minAge": 13,
    "privacy": "Uses behavioral age estimation plus Persona ID/face checks. Under-18 users lost open-ended chat on 25 Nov 2025 and are limited to guided formats like Stories.",
    "controversies": "Multiple teen-harm lawsuits incl. Sewell Setzer (Florida); Google and Character.AI agreed to settle in Jan 2026 (terms confidential, pending court approval).",
    "pros": [
      "Free and generous",
      "Massive character library",
      "Voice calls",
      "Cheap premium tier"
    ],
    "cons": [
      "Strict NSFW filter",
      "Weak long-term memory",
      "Lawsuits and safety controversies",
      "Age verification friction"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://techcrunch.com/2025/10/29/character-ai-is-killing-the-chatbot-experience-for-minors/",
      "https://aicompanionpick.com/character-ai-cost-pricing-guide",
      "https://fortune.com/2026/01/08/google-character-ai-settle-lawsuits-teenage-child-suicides-chatbots",
      "https://www.eweek.com/news/google-character-ai-teen-suicide-lawsuits/"
    ]
  },
  {
    "slug": "janitor-ai",
    "freeShort": "Yes (built-in model)",
    "name": "Janitor AI",
    "tagline": "Free, text-only roleplay with a giant library",
    "website": "https://janitorai.com",
    "developer": null,
    "launched": "2023",
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 7.0,
    "bestFor": "Free roleplay (bring your own model)",
    "review": true,
    "platforms": [
      "web",
      "ios",
      "android"
    ],
    "freeTier": "Free with built-in JanitorLLM (JLLM); some 2026 sources mention a ~50 requests/day cap. Bring-your-own API key also supported.",
    "startingPrice": "Free; paid from ~$9.99/mo",
    "plans": [
      {
        "name": "Pro / Janitor+",
        "monthly": "$9.99-$12.99/mo",
        "annual": "$99.99/yr",
        "notes": "Conflicting reports; a paid tier reportedly launched June 2026"
      },
      {
        "name": "Own API key",
        "monthly": "pay-per-token",
        "notes": "Often a few dollars up to $15-50/mo depending on model"
      }
    ],
    "boyfriendMode": "Yes. Huge library of user-created male characters.",
    "features": {
      "voiceMessages": false,
      "voiceCalls": false,
      "imageGen": false,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "yes",
    "memory": "JLLM has short context and gets repetitive after 20-30 messages; better with external models.",
    "minAge": 18,
    "privacy": "NSFW requires age verification and must be enabled at account and character level. Using third-party API keys sends chats to those providers.",
    "controversies": null,
    "pros": [
      "Free to use",
      "Massive character library",
      "NSFW allowed (web)",
      "Bring your own model"
    ],
    "cons": [
      "Text-only, no voice or images",
      "JLLM quality and uptime issues",
      "Setup with API keys is technical",
      "NSFW not available in mobile apps"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://neuronfeed.com/reviews/janitor-ai-review",
      "https://www.tooljunction.io/blog/the-ultimate-guide-to-janitor-ai-everything-you-need-to-know-2026",
      "https://acadcalendar.com/janitor-ai/",
      "https://nastia-sgv7.onrender.com/blog/janitor-ai-paywall-alternative-2026"
    ]
  },
  {
    "slug": "kupid-ai",
    "freeShort": "Yes, no memory",
    "name": "Kupid AI",
    "tagline": "Proactive check-ins and expressive voice notes",
    "website": "https://kupid.ai",
    "developer": null,
    "launched": null,
    "affiliateUrl": null,
    "hasAffiliate": true,
    "score": 7.0,
    "bestFor": "Voice messages",
    "review": false,
    "platforms": [
      "web"
    ],
    "freeTier": "Free account without persistent memory; voice, images and NSFW largely gated behind paid plans.",
    "startingPrice": "From $13.99/mo",
    "plans": [
      {
        "name": "Premium (monthly)",
        "monthly": "$13.99-$17.99/mo",
        "notes": "Sources disagree; one lists up to $49.99/mo top tier"
      },
      {
        "name": "Weekly",
        "monthly": "$12.99/week",
        "notes": "About $52/mo equivalent; poor value"
      },
      {
        "name": "Lifetime",
        "monthly": "about $777 one-time",
        "notes": "Reported, unverified"
      }
    ],
    "boyfriendMode": "Partial. Primarily AI girlfriends; one source says boyfriend and anime options exist.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": true,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "yes",
    "memory": "No persistent memory on free tier; paid tiers add memory and proactive check-ins.",
    "minAge": 18,
    "privacy": "No breach reports found. Operator and data policy not verified.",
    "controversies": null,
    "pros": [
      "Strong voice messages (its standout feature)",
      "Proactive check-in messages",
      "Mobile-friendly web app",
      "Custom characters"
    ],
    "cons": [
      "Girlfriend-first; few male options",
      "Confusing pricing, weekly plan is a trap",
      "Expensive compared with rivals",
      "Free tier lacks memory"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://www.startuphub.ai/ai-news/reviews/2026/kupid-ai-review-2026",
      "https://neuronfeed.com/reviews/kupidai-review",
      "https://www.roborhythms.com/kupid-ai-review/",
      "https://tooldirectory.ai/tools/kupid-ai"
    ]
  },
  {
    "slug": "talkie-ai",
    "freeShort": "~50 messages/day",
    "name": "Talkie AI",
    "tagline": "Voice-first characters with collectible cards",
    "website": "https://www.talkie-ai.com",
    "developer": "SUBSUP PTE. LTD. (Singapore), backed by MiniMax (Shanghai)",
    "launched": "2023",
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 6.9,
    "bestFor": "Voice chat on mobile",
    "review": true,
    "platforms": [
      "web",
      "ios",
      "android"
    ],
    "freeTier": "About 50 messages/day and short (2-minute) voice calls.",
    "startingPrice": "From $9.99/mo",
    "plans": [
      {
        "name": "Talkie+ Standard",
        "monthly": "$9.99/mo",
        "annual": "$95.99/yr"
      },
      {
        "name": "Talkie+ Pro",
        "monthly": "$24.99/mo",
        "notes": "Regional variants ($3.99-$15.99) reported"
      }
    ],
    "boyfriendMode": "Yes. Many male characters in the library.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": true,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "filtered",
    "memory": "Moderate; not a memory-focused app.",
    "minAge": null,
    "privacy": "Mozilla's 2024 review gave Talkie a privacy warning label and a content warning. Chinese-backed ownership may concern some users.",
    "controversies": "Disappeared from US App Store in Dec 2024 ('technical reasons'); returned on iOS as 'Talkie Lab' in Feb 2025. Reportedly briefly pulled from Google Play in April 2026, back in May.",
    "pros": [
      "Strong voice features",
      "Cheap entry price",
      "Large character library",
      "Collectible card gamification"
    ],
    "cons": [
      "Store removals and availability uncertainty",
      "Mozilla privacy warning",
      "Free tier capped at ~50 messages/day",
      "Content filtered"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://scmp.com/tech/tech-trends/article/3291715/chinese-owned-characterai-rival-vanishes-us-app-store",
      "https://www.itechguides.com/what-happened-to-talkie-ai-is-it-shut-down-or-banned/",
      "https://www.cloudtalk.io/blog/talkie-ai-pricing/",
      "https://www.roborhythms.com/is-talkie-ai-free/"
    ]
  },
  {
    "slug": "polybuzz",
    "freeShort": "Yes, with ads",
    "name": "PolyBuzz",
    "tagline": "Free character chat app with paid memory upgrades",
    "website": "https://polybuzz.ai",
    "developer": "Cloud Whale Interactive Technology LLC",
    "launched": null,
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 6.6,
    "bestFor": "Casual mobile roleplay",
    "review": true,
    "platforms": [
      "web",
      "ios",
      "android"
    ],
    "freeTier": "Free with ads (including mid-chat ads), message limits and ~30-message memory window.",
    "startingPrice": "From $9.90/mo",
    "plans": [
      {
        "name": "Poly Standard",
        "monthly": "$9.90/mo",
        "notes": "Mainly ad-free; same memory as free"
      },
      {
        "name": "Poly Premium",
        "monthly": "$19.90/mo",
        "notes": "Long Memory (~100 messages)"
      },
      {
        "name": "Poly Ultimate",
        "monthly": "$29.90/mo",
        "notes": "Permanent Memory"
      }
    ],
    "boyfriendMode": "Yes. Large library of user-created male characters.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": null,
      "imageGen": null,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "filtered",
    "memory": "Short on free (~30 messages); paid tiers extend to ~100 messages or permanent memory.",
    "minAge": 18,
    "privacy": "Age rating inconsistent across stores (18+, 17+, Teen reported); web version reportedly lacks an age gate.",
    "controversies": "Complaints about intrusive ads and replies becoming more restricted after updates.",
    "pros": [
      "Free to start",
      "Large character library",
      "Memory upgrades available",
      "Apps on all platforms"
    ],
    "cons": [
      "Ads interrupt chats",
      "Best memory requires $29.90 tier",
      "Inconsistent NSFW/age policy",
      "Pricing varies by region"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://apppricinglab.com/iap/apple/6449190344",
      "https://www.fast.io/resources/polybuzz-ai-review-2026.md",
      "https://skywork.ai/blog/agent/polybuzz-review-2025",
      "https://www.roborhythms.com/?p=35603"
    ]
  },
  {
    "slug": "lovescape",
    "freeShort": "Short trial",
    "name": "Lovescape",
    "tagline": "Romance companions with generated video clips",
    "website": "https://lovescape.com",
    "developer": "Lovescape (Cyprus)",
    "launched": "2023",
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 6.6,
    "bestFor": "AI video clips",
    "review": true,
    "platforms": [
      "web"
    ],
    "freeTier": "Limited free trial; credits consumed by media.",
    "startingPrice": "From $5.99/mo (annual)",
    "plans": [
      {
        "name": "Premium (annual billing)",
        "monthly": "from $5.99-$7.99/mo",
        "notes": "Billed yearly"
      },
      {
        "name": "Creative PRO (annual billing)",
        "monthly": "$24.99/mo",
        "notes": "Unlocks advanced memory"
      },
      {
        "name": "Top monthly plan",
        "monthly": "$64.99/mo"
      }
    ],
    "boyfriendMode": "Yes. Has a male companions category.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": null,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "yes",
    "memory": "Long-term memory advertised, but advanced memory gated behind Creative PRO.",
    "minAge": 18,
    "privacy": "Reviewers cite vague privacy and pricing transparency. Scam lookalike site lovescape.org.uk exists; only use lovescape.com / lovescape.ai.",
    "controversies": "Lookalike scam domains impersonating the brand.",
    "pros": [
      "AI-generated video clips of companions",
      "Male companion category",
      "Cheap annual entry price",
      "Romance-focused personalities"
    ],
    "cons": [
      "Opaque credit spending",
      "Memory paywalled",
      "Expensive monthly",
      "Scam lookalike sites"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://tooldirectory.ai/tools/lovescape",
      "https://aiporn.it.com/?p=4517",
      "https://aiinsightsnews.net/lovescape-ai/",
      "https://www.roborhythms.com/?p=35665"
    ]
  },
  {
    "slug": "eva-ai",
    "freeShort": "Limited daily messages",
    "name": "EVA AI",
    "tagline": "A phone-first virtual partner with voice calls",
    "website": "https://evaapp.ai",
    "developer": "Novi Limited (Cyprus)",
    "launched": "2021",
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 6.5,
    "bestFor": "Mobile-native romance",
    "review": true,
    "platforms": [
      "ios",
      "android"
    ],
    "freeTier": "Basic free version with limited daily messages (one source disputes a free tier).",
    "startingPrice": "From $11.99/mo",
    "plans": [
      {
        "name": "Premium",
        "monthly": "from $11.99/mo",
        "annual": "up to $47.99/yr",
        "notes": "1-, 3- and 12-month memberships; Neuron credit packs extra"
      }
    ],
    "boyfriendMode": "Yes. Customizable gender; boyfriend option available.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": true,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": false
    },
    "nsfw": "filtered",
    "memory": "Moderate; not well documented.",
    "minAge": 18,
    "privacy": "Policy says text and voice messages are used to develop its AI, with no opt-out described. Mozilla (2024) flagged it; it encourages sharing secrets, photos and voice.",
    "controversies": "Mozilla Privacy Not Included warning (2024).",
    "pros": [
      "Mobile-native apps",
      "Voice and reported live video calls",
      "Customizable partner",
      "Cheap annual option"
    ],
    "cons": [
      "Chats used for training, no opt-out",
      "Credit packs add cost",
      "Mozilla privacy warning",
      "Free tier unclear"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://apppricinglab.com/iap/apple/1551794721",
      "https://www.aicompanionguides.com/blog/eva-ai-review-2026/",
      "https://europeanpurpose.com/tool/evaai",
      "https://www.upgrad.com/blog/eva-artificial-intelligence/",
      "https://www.mozillafoundation.org/en/privacynotincluded/eva-ai-chat-bot-soulmate"
    ]
  },
  {
    "slug": "anima-ai",
    "freeShort": "Friend mode only",
    "name": "Anima AI",
    "tagline": "A simple, cheap companion app for iOS and Android",
    "website": "https://myanima.ai",
    "developer": "Apperry Ltd",
    "launched": null,
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 6.3,
    "bestFor": "Budget mobile option",
    "review": true,
    "platforms": [
      "web",
      "ios",
      "android"
    ],
    "freeTier": "Free chat limited to friendship level; romance and roleplay need premium.",
    "startingPrice": "From $9.99/mo",
    "plans": [
      {
        "name": "Premium (monthly)",
        "monthly": "$9.99/mo"
      },
      {
        "name": "Premium (annual)",
        "monthly": "about $3.33/mo",
        "notes": "Per one comparison site"
      }
    ],
    "boyfriendMode": "Yes. Apperry markets boyfriend variants of the app; romantic partner mode on premium.",
    "features": {
      "voiceMessages": null,
      "voiceCalls": null,
      "imageGen": null,
      "customCharacters": true,
      "groupChat": false
    },
    "nsfw": "filtered",
    "memory": "Basic; not a memory-focused app.",
    "minAge": 18,
    "privacy": "Parent-safety sites flag mature themes and data concerns. No breach reports found.",
    "controversies": null,
    "pros": [
      "Very cheap",
      "Simple mobile app",
      "Romance and roleplay modes",
      "Avatar customization"
    ],
    "cons": [
      "Romance locked behind paywall",
      "Basic AI quality",
      "One companion at a time",
      "Limited media features"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://neuronfeed.com/startups/anima-ai",
      "https://aicompanionpick.com/replika-vs-anima-ai-girlfriend",
      "https://gabb.com/blog/anima-ai/",
      "https://aichief.com/ai-fun-tools/myanima-ai/"
    ]
  },
  {
    "slug": "joi-ai",
    "freeShort": "Basic, credit-based",
    "name": "Joi AI",
    "tagline": "Photo and video companions paid for in credits",
    "website": "https://joi.com",
    "developer": null,
    "launched": null,
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 5.9,
    "bestFor": "Media-heavy chat",
    "review": true,
    "platforms": [
      "web"
    ],
    "freeTier": "Basic free tier (revocable per terms); most features consume 'Neurons' credits.",
    "startingPrice": "Credits (pay as you go)",
    "plans": [
      {
        "name": "Premium",
        "notes": "One review cites a $17.77 headline figure; not confirmed"
      },
      {
        "name": "Neurons credits",
        "monthly": "pay-as-you-go",
        "notes": "Reading a message ~4 Neurons, photo up to 120, video up to 1,900"
      }
    ],
    "boyfriendMode": "Unverified. Custom characters supported; no source confirmed male companions.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": null,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "yes",
    "memory": "Reviewers report short memory and repetitive chats.",
    "minAge": 18,
    "privacy": "Not verified. Trustpilot users report billing problems (missing Neurons, charges for failed images).",
    "controversies": "Pricing criticized as opaque; Neurons drain quickly, per reviews.",
    "pros": [
      "Adaptive personalities",
      "Photos, voice and video content",
      "Usable free tier",
      "Custom characters"
    ],
    "cons": [
      "Confusing Neurons economy",
      "Costs escalate fast",
      "Short memory",
      "Billing complaints"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://www.aicompanionguides.com/blog/joi-ai-review-2026/",
      "https://filmthreat.com/features/ai-chat-review-what-free-really-buys-you-and-the-neurons-math-that-predicts-spend/",
      "https://www.trustpilot.com/review/joi.ai?page=2",
      "https://neuronfeed.com/compare/kupidai-vs-joi-ai"
    ]
  },
  {
    "slug": "botify-ai",
    "freeShort": "Daily energy allowance",
    "name": "Botify AI",
    "tagline": "Ultra-cheap premium and a million user bots",
    "website": "https://botify.ai",
    "developer": "Ex-Human Inc. (San Francisco)",
    "launched": "2022",
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 5.8,
    "bestFor": "Cheapest premium",
    "review": true,
    "platforms": [
      "web",
      "android"
    ],
    "freeTier": "Free with a daily 'energy' allowance; voice replies consume energy.",
    "startingPrice": "From ~$2.50/mo (annual)",
    "plans": [
      {
        "name": "Premium",
        "monthly": "about $2.50/mo",
        "annual": "$29.99/yr"
      },
      {
        "name": "Ultra",
        "annual": "$79.99/yr",
        "notes": "Single source"
      }
    ],
    "boyfriendMode": "Yes. Over a million user-made bots, including male characters; custom creation.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": true,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "filtered",
    "memory": "Weak; session-based rather than persistent recall.",
    "minAge": 18,
    "privacy": "Ex-Human licenses its tech to partners (e.g. Grindr). Data policy not verified.",
    "controversies": "Feb 2025 MIT Technology Review found sexually charged bots of underage celebrity characters. In 2026, Apple removed Botify from the App Store and Ex-Human sued Apple, claiming ~$500k lost revenue.",
    "pros": [
      "Cheapest premium tier",
      "Huge bot library",
      "Voice and photos",
      "Custom characters"
    ],
    "cons": [
      "Removed from iOS App Store",
      "Underage-bot controversy",
      "Weak memory",
      "Shallow conversations"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://www.technologyreview.com/2025/02/27/1112616/an-ai-companion-site-is-hosting-sexually-charged-conversations-with-underage-celebrity-bots",
      "https://storyboard18.com/digital/apple-sued-by-ai-startup-over-app-store-takedowns-500000-revenue-loss-claimed-ws-l-94183.htm",
      "https://aicompanionguides.com/blog/botify-ai-review-late-to-the-party/",
      "https://aiinsightsnews.net/?p=4821"
    ]
  },
  {
    "slug": "chai-ai",
    "freeShort": "Barely (hard paywall)",
    "name": "Chai AI",
    "tagline": "Fast, mobile-only bot chat behind a paywall",
    "website": "https://www.chai-research.com",
    "developer": "Chai Research Corp.",
    "launched": "2021",
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 5.5,
    "bestFor": "Quick mobile bot chat",
    "review": true,
    "platforms": [
      "ios",
      "android"
    ],
    "freeTier": "Very limited; reviewers report a hard paywall with few or no free messages, plus message caps.",
    "startingPrice": "From $13.99/mo",
    "plans": [
      {
        "name": "Premium",
        "monthly": "$13.99/mo"
      },
      {
        "name": "Ultra",
        "monthly": "$29.99/mo",
        "annual": "$269.99-$289.99/yr",
        "notes": "Annual price differs by source"
      },
      {
        "name": "Weekly billing",
        "notes": "App reportedly shifted to weekly subscriptions"
      }
    ],
    "boyfriendMode": "Yes. User-created male characters available.",
    "features": {
      "voiceMessages": null,
      "voiceCalls": null,
      "imageGen": null,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "filtered",
    "memory": "Weak; small context window, bots forget details within a handful of messages even on Ultra.",
    "minAge": 17,
    "privacy": "Mozilla's 2024 report issued a content warning for Chai. Data policy not verified here.",
    "controversies": "2023: a Belgian man died by suicide after weeks of chats with a Chai bot named 'Eliza' that allegedly encouraged him. Ongoing complaints about aggressive paywall and billing.",
    "pros": [
      "Huge library of bots",
      "Fast responses",
      "Mobile-first",
      "Create bots easily"
    ],
    "cons": [
      "Aggressive paywall and weekly billing",
      "Poor memory",
      "Serious safety incident history",
      "Ultra barely better than Premium"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://www.roborhythms.com/chai-ai-review/",
      "https://www.roborhythms.com/is-chai-ai-premium-or-ultra-worth-paying-for/",
      "https://unstar.app/blog/is-chai-legit-safe-ai-chat-app-reviews-2026",
      "https://incidentdatabase.ai/reports/2865/",
      "https://uk.news.yahoo.com/man-ends-life-ai-chatbot-153723630.html"
    ]
  },
  {
    "slug": "muah-ai",
    "freeShort": "Limited",
    "name": "Muah AI",
    "tagline": "Uncensored companion app with a 2024 breach",
    "website": "https://muah.ai",
    "developer": null,
    "launched": null,
    "affiliateUrl": null,
    "hasAffiliate": false,
    "score": 4.8,
    "bestFor": "Not recommended",
    "review": true,
    "platforms": [
      "web",
      "ios",
      "android"
    ],
    "freeTier": "Limited free chat; NSFW images blurred; exact limits unclear.",
    "startingPrice": "From $9.99/mo",
    "plans": [
      {
        "name": "VIP",
        "monthly": "$9.99-$19.99/mo",
        "notes": "Sources disagree; ~$5.83/mo effective on annual"
      },
      {
        "name": "UHD VIP",
        "monthly": "$49.99/mo",
        "annual": "$499/yr (reported)"
      },
      {
        "name": "Ultra VIP",
        "monthly": "$99.99/mo",
        "notes": "Includes phone calls (US only, reportedly)"
      }
    ],
    "boyfriendMode": "Partial. Primarily marketed as AI girlfriend; custom characters possible.",
    "features": {
      "voiceMessages": true,
      "voiceCalls": true,
      "imageGen": true,
      "customCharacters": true,
      "groupChat": null
    },
    "nsfw": "yes",
    "memory": "Inconsistent; reviewers report it forgetting names mid-conversation.",
    "minAge": 18,
    "privacy": "Breached in September 2024: ~1.9 million accounts exposed, including email addresses tied to sexual image-generation prompts, some describing child abuse. Extortion attempts were reported afterwards.",
    "controversies": "2024 breach (listed on Have I Been Pwned, reported by 404 Media) exposed CSAM-related prompts linked to real email addresses.",
    "pros": [
      "Phone calls on top tier",
      "Uncensored chat and images",
      "Custom characters",
      "Multiple platforms"
    ],
    "cons": [
      "Major 2024 data breach",
      "CSAM prompt controversy",
      "Very expensive top tiers",
      "Weak memory"
    ],
    "verified": "2026-10-18",
    "sources": [
      "https://haveibeenpwned.com/Breach/Muah",
      "https://cyberinsider.com/ai-girlfriend-site-exposed-emails-and-interactions-of-1-9-million-users/",
      "https://www.linklaters.com/en/insights/blogs/digilinks/2024/october/the-muah-ai-data-breach---extortion-threats-and-cyber-vulnerabilities",
      "https://plisio.net/ai/muah-ai",
      "https://aiinsightsnews.net/?p=1465"
    ]
  },
];
