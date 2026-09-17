import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort(
    (left, right) => right.data.publishedAt.valueOf() - left.data.publishedAt.valueOf(),
  );
}

export function postUrl(post: Post): string {
  return `/${post.data.path.replace(/^\/+|\/+$/g, '')}/`;
}

export function termSlug(term: string): string {
  return term.trim().replace(/\s+/g, '-');
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}
