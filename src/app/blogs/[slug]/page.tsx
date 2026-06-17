import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPosts, getPostBySlug, getFeaturedImageUrl } from "@/lib/wordpress";

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
  return {
    title: post.title.rendered,
    description: `Read about ${post.title.rendered} - Espot Pokhara Education and Visa Services`,
    alternates: { canonical: `/blogs/${slug}` },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const featuredImage = getFeaturedImageUrl(post);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-4 pb-20 md:pb-28">
        <nav className="text-sm text-gray-400 mb-8 font-headline-xl">
          <Link href="/blogs" className="hover:text-on-surface transition-colors">Blog</Link> / <span className="text-on-surface font-medium">{post.title.rendered}</span>
        </nav>

        {featuredImage && (
          <div className="aspect-[16/9] overflow-hidden rounded-xl bg-gray-100 mb-10">
            <img src={featuredImage} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        <h1 className="font-headline-xl text-3xl md:text-4xl font-bold text-on-surface mb-4 leading-tight">
          {post.title.rendered}
        </h1>

        <time className="text-sm text-gray-500 block mb-12">
          {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>

        <article className="blog-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </div>
  );
}
