export type Platform = 'web' | 'ios' | 'android';
export type NsfwPolicy = 'yes' | 'no' | 'filtered' | 'unclear';

export interface Plan {
  name: string;
  monthly: string | null;
  annual?: string | null;
  notes?: string;
}

export interface App {
  slug: string;
  name: string;
  /** One-line positioning used on cards. */
  tagline: string;
  website: string;
  developer?: string | null;
  launched?: string | null;

  /** Affiliate tracking link. null = no program (or not approved yet) -> CTA goes to `website`. */
  affiliateUrl: string | null;
  /** Whether a known affiliate program exists for this app. */
  hasAffiliate: boolean;

  /** Editorial score out of 10. */
  score: number;
  /** Short "best for" label for listicles. */
  bestFor: string;
  /** Whether /reviews/{slug}/ exists. */
  review: boolean;

  platforms: Platform[];
  freeTier: string;
  /** 2-5 word label for tables/cards. */
  freeShort: string;
  /** Short price label for tables, e.g. "From $12.99/mo". */
  startingPrice: string;
  plans: Plan[];

  boyfriendMode: string;
  features: {
    voiceMessages: boolean | null;
    voiceCalls: boolean | null;
    imageGen: boolean | null;
    customCharacters: boolean | null;
    groupChat: boolean | null;
  };
  nsfw: NsfwPolicy;
  memory: string;
  minAge: number | null;
  privacy: string;
  controversies?: string | null;

  pros: string[];
  cons: string[];

  /** Date the facts above were last checked (YYYY-MM-DD). */
  verified: string;
  sources?: string[];
}
