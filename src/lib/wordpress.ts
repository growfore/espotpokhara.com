export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
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
