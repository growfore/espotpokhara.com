import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Container from "@/components/global/Container";
import Heading from "@/components/shared/Heading";
import PageHero from "@/components/PageHero";
import { getPosts, getFeaturedImageUrl } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read blogs from Espot Pokhara Education and Visa Services about studying abroad, university selection, visa guidance, and test preparation tips.",
  alternates: { canonical: "/blogs" },
  openGraph: { title: "Blogs | Espot Pokhara", description: "Study abroad tips and guides.", url: "/blogs" },
};

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        title="Blogs"
        subtitle="Insights and guides to help you navigate your study abroad journey"
        bgImage="/images/banner-bg.jpg"
      />

      <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <Reveal>
            <div className="academic-rule mb-4" />
            <Heading tag="h2" size="xl" className="text-on-surface mb-12">Latest Articles</Heading>
          </Reveal>
          {posts.length === 0 ? (
            <p className="text-center text-body-lg text-on-surface-variant">No articles found.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {posts.map((post, i) => (
                <Reveal key={post.slug} direction="up" delay={i * 0.05}>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="block border border-dashed border-outline-variant rounded-3xl bg-paper-white group hover:border-crimson/30 transition-colors duration-200 h-full overflow-hidden"
                  >
                    {getFeaturedImageUrl(post) && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={getFeaturedImageUrl(post)!}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <Heading tag="h3" size="sm" className="text-on-surface group-hover:text-crimson transition-colors duration-200 line-clamp-2">
                        {post.title.rendered}
                      </Heading>
                      <p
                        className="text-body-sm text-on-surface-variant mt-2 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                      <span className="text-label-sm text-on-surface-variant mt-3 block">
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
