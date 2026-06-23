import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Check, Shield, Star, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";
import Container from "@/components/global/Container";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Espot Pokhara Education and Visa Services in Pokhara, Nepal. We help students achieve their study abroad dreams with expert guidance for USA, Australia, Canada, the UK, Germany, France, New Zealand, Cyprus, Dubai and Malta.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us - Espot Pokhara Education and Visa Services",
    description:
      "Learn about Espot Pokhara Education and Visa Services in Pokhara, Nepal.",
    url: "/about-us",
    images: [{ url: "/images/counter-banner.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Espot Pokhara Education and Visa Services",
    description:
      "Learn about Espot Pokhara Education and Visa Services in Pokhara, Nepal.",
    images: ["/images/counter-banner.webp"],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Your trusted partner in educational consultancy since our establishment in Pokhara"
        bgImage="/images/counter-banner.webp"
      />

      <section className="px-4 xl:px-10">
        <Container className="py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className=" border border-outline-variant rounded-3xl overflow-hidden">
                <div
                  className="h-[400px] bg-cover bg-center grayscale-hover"
                  style={{ backgroundImage: "url('/images/who-we-are.webp')" }}
                />
              </div>
            </Reveal>
            <Reveal direction="right">
              <span className="inline-flex items-center rounded-full border border-crimson/15 bg-crimson/5 px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-crimson font-mono mb-3">
                About Us
              </span>
              <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-6">
                Who We Are
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                {siteConfig.aboutPage.whoWeAre}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="px-4 xl:px-10 bg-linen-bg">
        <Container className="py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <span className="inline-flex items-center rounded-full border border-crimson/15 bg-crimson/5 px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-crimson font-mono mb-3">
                Why Us
              </span>
              <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-6">
                Why Choose Us
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-6">
                {siteConfig.aboutPage.whyChooseUs}
              </p>
              <ul className="space-y-3">
                {siteConfig.whyChooseUs.map((reason) => (
                  <li
                    key={reason}
                    className="flex items-start gap-3 text-body-md text-on-surface-variant"
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-crimson/10 text-crimson flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {reason}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal direction="right">
              <div className=" border border-outline-variant rounded-3xl overflow-hidden">
                <div
                  className="h-[400px] bg-cover bg-center grayscale-hover"
                  style={{
                    backgroundImage:
                      "url('/images/why-choose-us-about-page.webp')",
                  }}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="Message-From-Director" className="px-4 xl:px-10">
        <Container className="py-16 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-crimson/15 bg-crimson/5 px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-crimson font-mono mb-3">
              Director
            </span>
            <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-6">
              Message From Director
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-6">
              {siteConfig.aboutPage.messageFromDirector}
            </p>
          </div>
        </Container>
      </section>

      <section className="px-4 xl:px-10 bg-linen-bg">
        <Container className="py-16 md:py-28">
          <Reveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center rounded-full border border-crimson/15 bg-crimson/5 px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-crimson font-mono mb-3">
                Values
              </span>
              <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-4">
                Our Core Values
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {siteConfig.values.map((value, i) => (
              <Reveal key={value.title} direction="up" delay={i * 0.1}>
                <div className="border border-outline-variant rounded-3xl bg-paper-white text-center p-8 h-full">
                  <div className="w-16 h-16 flex items-center justify-center bg-crimson text-paper-white rounded-2xl mx-auto mb-6">
                    {value.icon === "shield" ? (
                      <Shield className="w-8 h-8" />
                    ) : value.icon === "star" ? (
                      <Star className="w-8 h-8" />
                    ) : (
                      <Heart className="w-8 h-8" />
                    )}
                  </div>
                  <h3 className="font-heading tracking-tighter text-heading-lg text-on-surface mb-3">
                    {value.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
