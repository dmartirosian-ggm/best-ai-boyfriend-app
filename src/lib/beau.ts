/**
 * Beau is our own AI boyfriend app (beauaiboyfriend.com). These helpers pick the most relevant Beau page
 * and pitch for the page a reader is on. Every placement is disclosed as our own product.
 */
import { NSFW_PAGES } from './apps';

export const BEAU_URL = 'https://beauaiboyfriend.com';

interface Placement {
  /** Path on beauaiboyfriend.com. */
  target: string;
  /** Headline for the banner. */
  pitch: string;
}

const alt = (name: string, target: string): Placement => ({
  target,
  pitch: `Looking for a simpler ${name} alternative?`,
});

/** Page on this site -> best-matching Beau page and pitch. */
const PLACEMENTS: Record<string, Placement> = {
  '/': { target: '/', pitch: 'Want a boyfriend who remembers your day and sends photos from his?' },
  '/free/': { target: '/free-ai-boyfriend', pitch: 'Want a free AI boyfriend that stays safe for work?' },
  '/best-ai-companion-apps/': { target: '/', pitch: 'Want a companion built just for romance?' },
  '/character-ai-alternatives/': alt('Character AI', '/character-ai-alternative'),
  '/replika-alternatives/': alt('Replika', '/replika-alternative'),
  '/chai-ai-alternatives/': alt('Chai', '/chai-alternative'),
  '/polybuzz-alternatives/': alt('PolyBuzz', '/polybuzz-alternative'),
  '/reviews/character-ai/': alt('Character AI', '/character-ai-alternative'),
  '/reviews/replika/': alt('Replika', '/replika-alternative'),
  '/reviews/nomi-ai/': alt('Nomi', '/nomi-alternative'),
  '/reviews/kindroid/': alt('Kindroid', '/kindroid-alternative'),
  '/reviews/chai-ai/': alt('Chai', '/chai-alternative'),
  '/reviews/polybuzz/': alt('PolyBuzz', '/polybuzz-alternative'),
  '/reviews/talkie-ai/': alt('Talkie', '/talkie-alternative'),
  '/vs/kindroid-vs-nomi/': { target: '/nomi-alternative', pitch: 'Want something simpler than Kindroid or Nomi?' },
  '/vs/polybuzz-vs-character-ai/': { target: '/character-ai-alternative', pitch: 'Want one boyfriend instead of a character library?' },
  '/vs/chai-vs-character-ai/': { target: '/character-ai-alternative', pitch: 'Want one boyfriend instead of a character library?' },
  '/gay-ai-boyfriend/': { target: '/gay-ai-boyfriend', pitch: 'Want a boyfriend you design, with photos from his day?' },
  '/virtual-boyfriend/': { target: '/virtual-boyfriend', pitch: 'Want a virtual boyfriend with his own face and memory of you?' },
  '/how-to-make-an-ai-boyfriend/': { target: '/how-to-create-an-ai-boyfriend', pitch: 'Want to make one in about five minutes?' },
  '/faq/are-ai-boyfriends-safe/': { target: '/is-an-ai-boyfriend-healthy', pitch: 'Want an AI boyfriend built around safety?' },
  '/faq/can-ai-boyfriends-remember-you/': { target: '/ai-boyfriend-chat', pitch: 'Want a boyfriend who remembers your life?' },
};

/** Pages where Beau doesn't fit: 18+ pages (Beau is SFW) and voice pages (Beau has no voice yet). */
const SKIP = new Set(['/ai-boyfriend-voice-call/', '/faq/can-an-ai-boyfriend-call-you/', '/about/', '/privacy/', '/affiliate-disclosure/', '/how-we-test/']);

export function beauPlacement(path: string): Placement | null {
  if (NSFW_PAGES.has(path) || SKIP.has(path)) return null;
  return PLACEMENTS[path] ?? { target: '/', pitch: 'Want an AI boyfriend who remembers your day and sends photos from his?' };
}

export const beauHref = (target: string) => BEAU_URL + target;
