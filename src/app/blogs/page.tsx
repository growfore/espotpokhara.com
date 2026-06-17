import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, getFeaturedImageUrl } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read blogs from Espot Pokhara Education and Visa Services about studying abroad, university selection, visa guidance, and test preparation tips.",
  alternates: { canonical: "/blogs" },
  openGraph: { title: "Blog | Espot Pokhara", description: "Study abroad tips and guides.", url: "/blogs" },
};

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-paper-white">
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-20 md:pb-28">
        <nav className="text-sm text-outline mb-8 font-heading">
          Blog
        </nav>
        <div className="mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-3">Blog</h1>
          <p className="text-body-lg text-on-surface-variant">
            Insights and guides to help you navigate your study abroad journey
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-on-surface-variant">No articles found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {posts.map((post) => {
              const imageUrl = getFeaturedImageUrl(post);
              return (
                <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block">
                  {imageUrl && (
                    <div className="aspect-[16/9] overflow-hidden rounded-xl bg-linen-bg mb-4">
                      <img
                        src={imageUrl}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <time className="text-sm text-on-surface-variant">
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                    <h2 className="font-heading text-lg font-bold text-navy group-hover:text-crimson transition-colors leading-snug">
                      {post.title.rendered}
                    </h2>
                    <p
                      className="text-sm text-on-surface-variant line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
