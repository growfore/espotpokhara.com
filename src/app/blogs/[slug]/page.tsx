import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/global/Container";
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
    <>
      <section className="relative pt-24 md:pt-28 pb-28 md:pb-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featuredImage || "/images/banner-bg.jpg"})` }}
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 max-w-8xl mx-auto px-4 xl:px-10">
          <Link href="/blogs" className="text-paper-white/70 hover:text-paper-white text-body-md mb-4 inline-block transition-colors">
            &larr; Back to Blogs
          </Link>
          <h1 className="font-heading text-display-lg text-paper-white mb-2">{post.title.rendered}</h1>
          <p className="text-body-md text-paper-white/60">
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <article className="blog-content max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Container>
      </section>
    </>
  );
}
