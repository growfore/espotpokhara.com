import type { Metadata } from "next";
import DocsLayout, { Section, Callout } from "@/components/global/DocsLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Test Preparation",
  description:
    "Comprehensive test preparation services for IELTS, PTE, TOEFL, SAT, GRE, and Japanese Language at Espot Pokhara Education and Visa Services in Pokhara, Nepal.",
};

export default function TestPreparationPage() {
  return (
    <DocsLayout
      title="Test Preparation"
      subtitle="Expert coaching and preparation for standardized tests to help you achieve your target scores"
      headerImage={siteConfig.testPreparation.hero}
    >
      <Section title="Our Preparation Programs">
        <Callout type="info">
          All our test preparation programs include diagnostic assessments,
          personalized study plans, weekly mock tests, and one-on-one
          doubt-clearing sessions.
        </Callout>

        <h3>IELTS — International English Language Testing System</h3>
        <p>
          IELTS is the world&apos;s most popular English language proficiency
          test for higher education and global migration. We provide
          comprehensive preparation covering all four modules: Listening,
          Reading, Writing, and Speaking.
        </p>

        <h3>PTE — Pearson Test of English</h3>
        <p>
          PTE is a computer-based English language test accepted by thousands of
          institutions worldwide. Our training focuses on all test sections
          including Speaking, Writing, Reading, and Listening with AI-scored
          mock tests.
        </p>

        <h3>TOEFL — Test of English as a Foreign Language</h3>
        <p>
          TOEFL is a standardized test measuring English proficiency for
          non-native speakers. Our TOEFL preparation covers Reading, Listening,
          Speaking, and Writing sections with comprehensive study materials.
        </p>

        <h3>SAT — Scholastic Assessment Test</h3>
        <p>
          SAT is a standardized test widely used for college admissions in the
          United States. We offer structured preparation for Evidence-Based
          Reading and Writing, Math, and the optional Essay.
        </p>

        <h3>GRE — Graduate Record Examination</h3>
        <p>
          GRE is a standardized test required for graduate school admissions.
          Our preparation covers Analytical Writing, Verbal Reasoning, and
          Quantitative Reasoning with extensive practice materials.
        </p>

        <h3>Japanese Language — JLPT</h3>
        <p>
          JLPT measures Japanese language proficiency for non-native speakers.
          Our courses range from N5 (beginner) to N2 (advanced), covering Kanji,
          Vocabulary, Grammar, Reading, and Listening.
        </p>
      </Section>

      <Section title="Why Choose Our Test Preparation">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-heading text-heading-lg text-navy">
              Expert Instructors
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Learn from certified and experienced instructors with deep
              knowledge of test formats and scoring strategies.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-heading-lg text-navy">
              Comprehensive Materials
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Access to updated study materials, practice tests, and resources
              tailored to each test format.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-heading-lg text-navy">Mock Tests</h3>
            <p className="text-body-md text-on-surface-variant">
              Regular mock tests with detailed performance analysis to track
              your progress and identify areas for improvement.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-heading-lg text-navy">
              Flexible Schedules
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Choose from morning, day, and weekend batches designed to fit
              around your academic schedule.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Flexible Shift Schedule">
        <p>
          We understand your busy routine. Choose a shift that fits your
          lifestyle. Our regular preparation classes are structured to ensure
          consistency.
        </p>

        <table className="w-full text-sm border-collapse mt-4">
          <thead>
            <tr className="border-b border-outline-variant">
              <th className="text-left py-2 pr-4 text-sm font-semibold text-on-surface uppercase tracking-wider">
                Shift
              </th>
              <th className="text-left py-2 pr-4 text-sm font-semibold text-on-surface uppercase tracking-wider">
                Timing
              </th>
              <th className="text-left py-2 pr-4 text-sm font-semibold text-on-surface uppercase tracking-wider">
                Highlights
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 text-on-surface font-medium">
                Morning Shift
              </td>
              <td className="py-2 pr-4 text-on-surface-variant">
                07:00 AM — 08:00 AM
              </td>
              <td className="py-2 pr-4 text-on-surface-variant">
                Fresh mind start, intensive drills
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 text-on-surface font-medium">
                Day Shift
              </td>
              <td className="py-2 pr-4 text-on-surface-variant">
                10:00 AM — 11:00 AM
              </td>
              <td className="py-2 pr-4 text-on-surface-variant">
                Full resource access, library hours
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 text-on-surface font-medium">
                Evening Shift
              </td>
              <td className="py-2 pr-4 text-on-surface-variant">
                05:00 PM — 06:00 PM
              </td>
              <td className="py-2 pr-4 text-on-surface-variant">
                Professional cohort, mock tests focus
              </td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section title="Working Hours">
        <p>
          <strong>Sunday — Friday:</strong> 10:00 AM — 6:00 PM
        </p>
        <p>
          <strong>Saturday:</strong> Closed
        </p>
      </Section>
    </DocsLayout>
  );
}
