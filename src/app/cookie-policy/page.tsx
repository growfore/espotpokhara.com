import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import Container from "@/components/global/Container";
import Heading from "@/components/shared/Heading";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Learn how ${siteConfig.name} uses cookies to improve your browsing experience on our website.`,
  alternates: { canonical: "/cookie-policy" },
  openGraph: {
    title: `Cookie Policy | ${siteConfig.shortName}`,
    description: `Learn how ${siteConfig.shortName} uses cookies to improve your browsing experience.`,
    url: "/cookie-policy",
  },
};

const sections = [
  {
    title: "What Are Cookies",
    content:
      "Cookies are small text files stored on your device by your web browser when you visit a website. They help websites remember your preferences, understand how you interact with the site, and improve your overall browsing experience.",
  },
  {
    title: "Why We Use Cookies",
    content:
      "We use cookies to enhance your experience on our website. This includes remembering your preferences, analysing site traffic to improve our content and services, and ensuring the website functions correctly. Cookies help us understand which pages are most useful to our visitors and how we can serve you better.",
  },
  {
    title: "Types of Cookies We Use",
    items: [
      {
        name: "Essential Cookies",
        description:
          "These are necessary for the website to function properly. They enable core functionality such as navigation and access to secure areas of the site.",
      },
      {
        name: "Analytics Cookies",
        description:
          "These help us understand how visitors interact with our website by collecting anonymous information about pages visited, time spent on the site, and other browsing patterns. This data helps us improve our website and services.",
      },
      {
        name: "Preference Cookies",
        description:
          "These remember your choices such as language preferences and display settings, providing a more personalised experience.",
      },
    ],
  },
  {
    title: "Managing Cookies",
    content:
      "You can control and manage cookies in your browser settings. Most browsers allow you to block or delete cookies, but please note that disabling certain cookies may affect the functionality of our website.",
  },
  {
    title: "Contact Us",
    content: `If you have any questions about our use of cookies, please contact us at ${siteConfig.contact.email} or call us at ${siteConfig.contact.phone}.`,
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="Learn about how we use cookies to improve your experience"
        bgImage="/images/counter-banner.webp"
      />

      <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container paddingTop="default" paddingBottom="default">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section) => (
              <Reveal key={section.title}>
                <div className="academic-rule mb-4" />
                <Heading tag="h2" size="xl" className="text-navy mb-6">
                  {section.title}
                </Heading>
                {"content" in section && section.content && (
                  <p className="text-body-lg text-on-surface-variant leading-relaxed">
                    {section.content}
                  </p>
                )}
                {"items" in section && section.items && (
                  <div className="space-y-6 mt-6">
                    {section.items.map((item) => (
                      <div key={item.name}>
                        <h3 className="text-headline-xs font-heading text-navy mb-2">
                          {item.name}
                        </h3>
                        <p className="text-body-md text-on-surface-variant">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
