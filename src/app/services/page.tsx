import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import StaggerContainer from "@/components/StaggerContainer";
import Container from "@/components/global/Container";
import Heading from "@/components/shared/Heading";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive study abroad services by Espot Pokhara Education and Visa Services in Pokhara, Nepal. University matching, visa guidance, language classes, scholarships, and more.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Espot Pokhara Education and Visa Services",
    description: "Study abroad services including visa guidance, university matching, language classes, and scholarships.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive study abroad services tailored to help you achieve your educational goals"
        bgImage="/images/counter-banner.webp"
      />

      <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <Reveal>
            <div className="text-center mb-12">
              <div className="academic-rule mx-auto mb-4" />
              <Heading tag="h2" size="xl" className="text-navy mb-4">What We Offer</Heading>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                End-to-end support for your study abroad journey, from initial consultation to post-arrival assistance
              </p>
            </div>
          </Reveal>

          <StaggerContainer staggerDelay={0.06}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.services.map((service, i) => (
                <Reveal key={service.title} direction="up" delay={i * 0.06}>
                  <div className="border border-dashed border-outline-variant rounded-3xl bg-paper-white p-8 h-full group">
                    <div className="w-14 h-14 flex items-center justify-center bg-crimson text-paper-white rounded-2xl mb-6">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-7.25-2.1M5.97 7.67L12 9.75l6.03-2.08M12 20.25V9.75M4.5 9.75v6.75a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V9.75" />
                      </svg>
                    </div>
                    <Heading tag="h3" size="md" className="text-on-surface mb-3">{service.title}</Heading>
                    <p className="text-body-md text-on-surface-variant">{service.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </StaggerContainer>
        </Container>
      </section>

      <section className="px-4 xl:px-10">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <Reveal>
            <div className="text-center mb-12">
              <div className="academic-rule mx-auto mb-4" />
              <Heading tag="h2" size="xl" className="text-navy mb-4">Our Process</Heading>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                A streamlined approach to help you achieve your study abroad goals
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Counseling", desc: "Initial consultation to understand your goals, preferences, and academic background." },
              { step: "02", title: "University Selection", desc: "Expert guidance in choosing the right university and program for your profile." },
              { step: "03", title: "Application & Visa", desc: "Complete assistance with applications, documentation, and visa processing." },
              { step: "04", title: "Pre-Departure", desc: "Orientation and support to ensure a smooth transition to your new destination." },
            ].map((step, i) => (
              <Reveal key={step.step} direction="up" delay={i * 0.1}>
                <div className="border border-dashed border-outline-variant rounded-3xl bg-paper-white text-center p-8">
                  <div className="text-display-lg font-heading font-extrabold text-crimson/20 mb-4">{step.step}</div>
                  <Heading tag="h3" size="md" className="text-on-surface mb-3">{step.title}</Heading>
                  <p className="text-body-md text-on-surface-variant">{step.desc}</p>
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
