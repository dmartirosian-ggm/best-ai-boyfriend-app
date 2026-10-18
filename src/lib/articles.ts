import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;

export async function getArticles(): Promise<Article[]> {
  return (await getCollection('articles', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.priority - b.data.priority || a.data.title.localeCompare(b.data.title),
  );
}

export function articleHref(entry: Article): string {
  return entry.id === 'home' ? '/' : `/${entry.id}/`;
}

export const TYPE_LABEL: Record<Article['data']['type'], string> = {
  home: 'Top picks',
  listicle: 'Best of',
  review: 'Review',
  'review-support': 'Guide',
  vs: 'Comparison',
  alternatives: 'Alternatives',
  guide: 'Guide',
  faq: 'FAQ',
  page: '',
};

/** Hub page a type belongs to, for breadcrumbs. */
export const TYPE_HUB: Partial<Record<Article['data']['type'], { href: string; label: string }>> = {
  review: { href: '/reviews/', label: 'Reviews' },
  'review-support': { href: '/reviews/', label: 'Reviews' },
  vs: { href: '/vs/', label: 'Comparisons' },
  alternatives: { href: '/alternatives/', label: 'Alternatives' },
  listicle: { href: '/guides/', label: 'Guides' },
  guide: { href: '/guides/', label: 'Guides' },
  faq: { href: '/faq/', label: 'FAQ' },
};
