import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import Container from "@/components/global/Container";
import Heading from "@/components/shared/Heading";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Espot Pokhara Education and Visa Services in Pokhara, Nepal. We help students achieve their study abroad dreams with expert guidance for USA, Japan, Australia, and Canada.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Espot Pokhara Education and Visa Services",
    description: "Learn about Espot Pokhara Education and Visa Services in Pokhara, Nepal.",
    url: "/about",
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

      <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="border border-dashed border-outline-variant rounded-3xl overflow-hidden">
                <div className="h-[400px] bg-cover bg-center grayscale-hover"                     style={{ backgroundImage: "url('/images/who-we-are.webp')" }} />
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="academic-rule mb-4" />
              <Heading tag="h2" size="xl" className="text-navy mb-6">Who We Are</Heading>
              <p className="text-body-lg text-on-surface-variant">
                {siteConfig.aboutPage.whoWeAre}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="px-4 xl:px-10">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="academic-rule mb-4" />
              <Heading tag="h2" size="xl" className="text-navy mb-6">Why Choose Us</Heading>
              <p className="text-body-lg text-on-surface-variant mb-6">{siteConfig.aboutPage.whyChooseUs}</p>
              <ul className="space-y-4">
                {siteConfig.whyChooseUs.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-body-md text-on-surface-variant">
                    <Check className="w-5 h-5 text-crimson mt-0.5 flex-shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal direction="right">
              <div className="border border-dashed border-outline-variant rounded-3xl overflow-hidden">
                <div className="h-[400px] bg-cover bg-center grayscale-hover"                     style={{ backgroundImage: "url('/images/why-choose-us-about-page.webp')" }} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="Message-From-Director" className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="academic-rule mb-4" />
              <Heading tag="h2" size="xl" className="text-navy mb-6">Message From Director</Heading>
              <p className="text-body-lg text-on-surface-variant mb-6">
                Welcome to Espot Pokhara Education and Visa Services! We are established with the motto of fulfilling our student&apos;s requirements and needs for a better future and an excellent journey. Our goal is to understand and fulfill your unique requirements. We strive to provide our students with ongoing service to make sure they are comfortable in a completely different country and new environment. Our motto is to establish strong relationships with every student, ensuring their academic excellence and bright future. We believe that by fostering these relationships, we can create a solid foundation for success and provide comprehensive assistance throughout your time abroad.
              </p>
              <p className="text-body-md text-on-surface-variant">
                We make sure to provide you with essential support like choosing a university in accordance with your academic grades, career goals, and interests and other facilities like visa assistance and accommodation facilities in abroad countries. Our dedicated team is committed to providing personalized care, addressing your concerns, and ensuring a smooth transition into your new academic environment. At Espot Pokhara Education and Visa Services, we are eager to support you in your dreams and aspirations, and we are excited to be a part of your educational path. Join us and let&apos;s shape your future together! Thank You. Dinbandhu Pokharel Director Espot Pokhara Education and Visa Services
              </p>
            </Reveal>
            <Reveal direction="right">
              <div className="border border-dashed border-outline-variant rounded-3xl overflow-hidden">
                <div className="h-[400px] bg-cover bg-center grayscale-hover" style={{ backgroundImage: "url('/images/uploads/2023/06/Banner_img.jpeg')" }} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="px-4 xl:px-10">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <Reveal>
            <div className="text-center mb-12">
              <div className="academic-rule mx-auto mb-4" />
              <Heading tag="h2" size="xl" className="text-navy mb-4">Our Core Values</Heading>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {siteConfig.values.map((value, i) => (
              <Reveal key={value.title} direction="up" delay={i * 0.1}>
                <div className="border border-dashed border-outline-variant rounded-3xl bg-paper-white text-center p-8 h-full">
                  <div className="w-16 h-16 flex items-center justify-center bg-crimson text-paper-white rounded-2xl mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <Heading tag="h3" size="md" className="text-on-surface mb-3">{value.title}</Heading>
                  <p className="text-body-md text-on-surface-variant">{value.description}</p>
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
