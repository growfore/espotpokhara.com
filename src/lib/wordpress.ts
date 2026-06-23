export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  rank_math_head?: {
    title: string;
    description: string;
    og_title: string;
    og_description: string;
    twitter_title: string;
    twitter_description: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details: {
        sizes: Record<string, { source_url: string }>;
      };
    }>;
  };
}

const API_BASE = "https://wp.espotpokhara.com/wp-json/wp/v2";

export async function getPosts(): Promise<WPPost[]> {
  const res = await fetch(
    `${API_BASE}/posts?per_page=20&_embed=wp:featuredmedia`,
    {
      next: { revalidate: 3600 },
    },
  );
  if (!res.ok) return [];
  return res.json();
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(
    `${API_BASE}/posts?slug=${slug}&_embed=wp:featuredmedia`,
    {
      next: { revalidate: 3600 },
    },
  );
  if (!res.ok) return null;
  const posts = await res.json();
  return posts?.[0] ?? null;
}

export function getFeaturedImageUrl(post: WPPost): string | null {
  const sizes = post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes;
  return sizes?.medium_large?.source_url ?? sizes?.full?.source_url ?? null;
}

export function getFeaturedImageAlt(post: WPPost): string {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ?? "";
}

export function getRankMathMeta(post: WPPost) {
  const rm = post.rank_math_head;
  return {
    title: rm?.title ?? post.title.rendered,
    description: rm?.description ?? "",
    og_title: rm?.og_title ?? post.title.rendered,
    og_description: rm?.og_description ?? "",
    twitter_title: rm?.twitter_title ?? post.title.rendered,
    twitter_description: rm?.twitter_description ?? "",
  };
}

export function rewriteContentLinks(html: string): string {
  return html
    .replace(/href="https?:\/\/wp\.espotpokhara\.com/gi, 'href="https://espotpokhara.com')
    .replace(/href='https?:\/\/wp\.espotpokhara\.com/gi, "href='https://espotpokhara.com");
}
