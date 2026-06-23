import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPosts, getPostBySlug, getFeaturedImageUrl, getRankMathMeta, rewriteContentLinks } from "@/lib/wordpress";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const featuredImage = getFeaturedImageUrl(post);
  const meta = getRankMathMeta(post);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      title: meta.og_title,
      description: meta.og_description,
      url: `/blogs/${slug}`,
      images: featuredImage ? [{ url: featuredImage, width: 1200, height: 630 }] : undefined,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitter_title,
      description: meta.twitter_description,
      images: featuredImage ? [featuredImage] : undefined,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const featuredImage = getFeaturedImageUrl(post);

  return (
    <div className="min-h-screen bg-paper-white">
      <div className="max-w-4xl mx-auto px-6 pt-4 pb-20 md:pb-28">
        <nav className="text-sm text-outline mb-8 font-heading">
          <Link href="/blogs" className="hover:text-on-surface transition-colors">Blog</Link> / <span className="text-on-surface font-medium">{post.title.rendered}</span>
        </nav>

        {featuredImage && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-linen-bg mb-10">
            <Image src={featuredImage} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
          </div>
        )}

        <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
          {post.title.rendered}
        </h1>

        <time className="text-sm text-on-surface-variant block mb-12">
          {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>

        <article className="blog-content" dangerouslySetInnerHTML={{ __html: rewriteContentLinks(post.content.rendered) }} />
      </div>
    </div>
  );
}
