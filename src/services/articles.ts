import { getCollection, type CollectionEntry } from 'astro:content';
import { chapters } from '../data/chapters.ts';
import { references, type Reference } from '../data/references.ts';

export type Article = CollectionEntry<'articles'>;
export type CategoryId = Article['data']['category'];

export interface Category {
  id: CategoryId;
  numeral: string;
  title: string;
  period: string;
  reading: string;
}

export const categories: Category[] = chapters.map((chapter) => ({
  id: chapter.id as CategoryId,
  numeral: chapter.numeral,
  title: chapter.title,
  period: `${chapter.startYear}-${chapter.endYear}`,
  reading: chapter.reading,
}));

export const categoryOf = (id: CategoryId): Category =>
  categories.find((category) => category.id === id)!;

export const articleHref = (article: Article) => `/articles/${article.id}/`;

export async function getArticles(): Promise<Article[]> {
  const articles = await getCollection('articles');
  return articles.sort((a, b) => a.data.order - b.data.order);
}

/** Prose words only: MDX imports, JSX props and markup do not count. */
export function readingMinutes(article: Article): number {
  const prose = (article.body ?? '')
    .replace(/^import .*$/gm, '')
    .replace(/<[A-Z][\s\S]*?\/>/g, '')
    .replace(/<[^>]+>/g, '');
  const words = prose.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Every source number an article cites, in order, so its page can carry its
 * own short source list. Reads `<Ref n={...} />` and the `refNumber` prop the
 * figure components pass through to Ref.
 */
export function citedReferences(article: Article): Reference[] {
  const body = article.body ?? '';
  const numbers = new Set<number>();
  for (const match of body.matchAll(/(?:\bn|refNumber)[=:]\s*\{?\s*(\[[\d,\s]+\]|\d+)/g)) {
    for (const n of match[1].replace(/[[\]]/g, '').split(',')) {
      numbers.add(Number(n.trim()));
    }
  }
  return references
    .filter((reference) => numbers.has(reference.n))
    .sort((a, b) => a.n - b.n);
}
