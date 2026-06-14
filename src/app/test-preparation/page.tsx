import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Container from "@/components/global/Container";
import Heading from "@/components/shared/Heading";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Test Preparation",
  description:
    "Comprehensive test preparation services for IELTS, PTE, TOEFL, SAT, GRE, and Japanese Language at Espot Pokhara Education and Visa Services in Pokhara, Nepal.",
  alternates: { canonical: "/test-preparation" },
  openGraph: {
    title: "Test Preparation | Espot Pokhara Education and Visa Services",
    description: "Test preparation services for IELTS, PTE, TOEFL, SAT, GRE, and Japanese Language in Pokhara.",
    url: "/test-preparation",
  },
};

const tests = [
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    description: "IELTS is the world's most popular English language proficiency test for higher education and global migration. We provide comprehensive preparation covering all four modules: Listening, Reading, Writing, and Speaking.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    name: "PTE",
    fullName: "Pearson Test of English",
    description: "PTE is a computer-based English language test accepted by thousands of institutions worldwide. Our training focuses on all test sections including Speaking, Writing, Reading, and Listening with AI-scored mock tests.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h-9.75m-3.75 0H7.5" />
      </svg>
    ),
  },
  {
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    description: "TOEFL is a standardized test measuring English proficiency for non-native speakers. Our TOEFL preparation covers Reading, Listening, Speaking, and Writing sections with comprehensive study materials.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    description: "SAT is a standardized test widely used for college admissions in the United States. We offer structured preparation for Evidence-Based Reading and Writing, Math, and the optional Essay.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    name: "GRE",
    fullName: "Graduate Record Examination",
    description: "GRE is a standardized test required for graduate school admissions. Our preparation covers Analytical Writing, Verbal Reasoning, and Quantitative Reasoning with extensive practice materials.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478A12.06 12.06 0 0 1 12 22.5c-3.375 0-6.491-1.38-8.718-3.587m8.718-10.453a6.01 6.01 0 0 1-1.5-.189m1.5.189a6.01 6.01 0 0 0 1.5-.189M5.25 18h.008v.008H5.25V18ZM7.5 18h.008v.008H7.5V18ZM9.75 18h.008v.008H9.75V18ZM12 18h.008v.008H12V18Z" />
      </svg>
    ),
  },
  {
    name: "Japanese Language",
    fullName: "Japanese Language Proficiency Test (JLPT)",
    description: "JLPT measures Japanese language proficiency for non-native speakers. Our courses range from N5 (beginner) to N2 (advanced), covering Kanji, Vocabulary, Grammar, Reading, and Listening.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
  },
];

export default function TestPreparationPage() {
  return (
    <>
      <PageHero
        title="Test Preparation"
        subtitle="Expert coaching and preparation for standardized tests to help you achieve your target scores"
        bgImage="/images/counter-banner.webp"
      />

      <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <Reveal>
            <div className="text-center mb-12">
              <div className="academic-rule mx-auto mb-4" />
              <Heading tag="h2" size="xl" className="text-navy mb-4">Our Test Preparation Programs</Heading>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                We offer comprehensive preparation for a wide range of standardized tests, with experienced instructors and proven methodologies
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test, i) => (
              <Reveal key={test.name} direction="up" delay={i * 0.06}>
                <div className="border border-dashed border-outline-variant rounded-3xl bg-paper-white p-8 h-full group">
                  <div className="w-14 h-14 flex items-center justify-center bg-crimson text-paper-white rounded-2xl mb-6">
                    {test.icon}
                  </div>
                  <Heading tag="h3" size="md" className="text-on-surface mb-1">{test.name}</Heading>
                  <p className="text-caption text-crimson font-heading font-semibold mb-3">{test.fullName}</p>
                  <p className="text-body-md text-on-surface-variant">{test.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-4 xl:px-10">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <Reveal>
            <div className="text-center mb-12">
              <div className="academic-rule mx-auto mb-4" />
              <Heading tag="h2" size="xl" className="text-navy mb-4">Why Choose Our Test Preparation</Heading>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Instructors", desc: "Learn from certified and experienced instructors with deep knowledge of test formats and scoring strategies." },
              { title: "Comprehensive Materials", desc: "Access to updated study materials, practice tests, and resources tailored to each test format." },
              { title: "Mock Tests", desc: "Regular mock tests with detailed performance analysis to track your progress and identify areas for improvement." },
              { title: "Flexible Schedules", desc: "Choose from morning, day, and weekend batches designed to fit around your academic schedule." },
            ].map((item, i) => (
              <Reveal key={item.title} direction="up" delay={i * 0.1}>
                <div className="border border-dashed border-outline-variant rounded-3xl bg-paper-white p-8 text-center h-full">
                  <Heading tag="h3" size="sm" className="text-on-surface mb-3">{item.title}</Heading>
                  <p className="text-body-md text-on-surface-variant">{item.desc}</p>
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
