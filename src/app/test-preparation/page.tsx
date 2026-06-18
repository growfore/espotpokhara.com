import type { Metadata } from "next";
import DocsLayout, { Section } from "@/components/global/DocsLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Test Preparation",
  description:
    "Comprehensive test preparation services for IELTS, PTE, and Japanese Language (JLPT) at Espot Pokhara Education and Visa Services in Pokhara, Nepal.",
};

export default function TestPreparationPage() {
  const tp = siteConfig.testPreparation;

  return (
    <DocsLayout
      title={tp.title}
      subtitle="Expert coaching and preparation for standardized tests to help you achieve your target scores"
      headerImage={tp.hero}
    >
      <p>{tp.intro}</p>

      {tp.tests.map((test) => (
        <Section key={test.id} title={test.title}>
          <p>{test.description}</p>

          {test.id === "ielts" && (
            <>
              <p className="mt-4">
                The Academic IELTS and the General Training IELTS are the two primary forms. The option to choose between the two different versions depends upon why the individual taking the test has to show if they are excellent in English.
              </p>

              <table className="w-full text-sm border-collapse mt-4">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="text-left py-2 pr-4 text-sm font-semibold text-on-surface uppercase tracking-wider">Band Score</th>
                    <th className="text-left py-2 pr-4 text-sm font-semibold text-on-surface uppercase tracking-wider">User</th>
                    <th className="text-left py-2 pr-4 text-sm font-semibold text-on-surface uppercase tracking-wider">Descriptor</th>
                  </tr>
                </thead>
                <tbody>
                  {tp.ieltsBandScoreTable.rows.map((row) => (
                    <tr key={row.band} className="border-b border-gray-100">
                      <td className="py-2 pr-4 text-on-surface font-medium">{row.band}</td>
                      <td className="py-2 pr-4 text-on-surface-variant">{row.user}</td>
                      <td className="py-2 pr-4 text-on-surface-variant">{row.descriptor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {test.id === "pte" && (
            <>
              <p className="mt-4">{tp.pteScoreTable.intro}</p>

              <table className="w-full text-sm border-collapse mt-4">
                <thead>
                  <tr className="border-b border-outline-variant">
                    <th className="text-left py-2 pr-4 text-sm font-semibold text-on-surface uppercase tracking-wider">Band Score</th>
                    <th className="text-left py-2 pr-4 text-sm font-semibold text-on-surface uppercase tracking-wider">User</th>
                  </tr>
                </thead>
                <tbody>
                  {tp.pteScoreTable.rows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-2 pr-4 text-on-surface font-medium">{row.score}</td>
                      <td className="py-2 pr-4 text-on-surface-variant">{row.user}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {test.id === "jlpt" && (
            <>
              <p className="mt-4">
                The Japanese Language Proficiency Test, or JLPT, is an internationally known standardized test to assess and confirm Japanese language proficiency for non-native speakers. The JLPT in Japan is managed and supervised by the Ministry of Education through the Japan Educational Exchanges and Services (JEES). Abroad, the Japan Foundation co-proctors test administration with local cultural exchange and educational institutions, or with committees particularly set up for this purpose. Anyone can sit for the JLPT. There is no age limit for this test.
              </p>
              <p className="mt-4">
                There are five levels of proficiency in the JLPT, ranging from N1 to N5, with N1 being the highest level of proficiency and N5 being the lowest. Here is a brief overview of each level:
              </p>
              <div className="mt-4 space-y-4">
                {[
                  { level: "N1", title: "Advanced Proficiency", desc: "This is the most advanced level, measuring highly advanced language skills required for academic and professional settings. It involves complex reading and listening comprehension, as well as advanced grammar and vocabulary knowledge." },
                  { level: "N2", title: "Upper Intermediate Proficiency", desc: "This level represents an upper-intermediate proficiency. It requires a good understanding of intermediate-level grammar, vocabulary, reading comprehension, and listening skills." },
                  { level: "N3", title: "Lower Intermediate Proficiency", desc: "This level signifies a lower-intermediate proficiency. It assesses basic grammar, vocabulary, reading comprehension, and listening skills necessary for everyday communication and daily life situations." },
                  { level: "N4", title: "Basic Skills in Japanese", desc: "This level indicates basic proficiency. It focuses on basic grammar, vocabulary, reading, and listening skills required for simple communication and understanding of everyday topics." },
                  { level: "N5", title: "Elementary Proficiency", desc: "This is the most basic level of proficiency. It evaluates elementary grammar, vocabulary, and basic reading and listening skills necessary for basic communication and understanding of simple expressions." },
                ].map((lvl) => (
                  <div key={lvl.level} className="border border-outline-variant rounded-xl p-4">
                    <h3 className="font-heading text-heading-sm text-navy">{lvl.level} — {lvl.title}</h3>
                    <p className="text-body-md text-on-surface-variant mt-1">{lvl.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-4 space-y-1">
            {test.details.map((detail, i) => (
              <p key={i} className="text-body-md text-on-surface-variant">• {detail}</p>
            ))}
          </div>
        </Section>
      ))}

      <Section title="Flexible Shift Schedule">
        <p>We understand your busy routine. Choose a shift that fits your lifestyle. Our regular preparation classes are structured to ensure consistency.</p>

        <table className="w-full text-sm border-collapse mt-4">
          <thead>
            <tr className="border-b border-outline-variant">
              <th className="text-left py-2 pr-4 text-sm font-semibold text-on-surface uppercase tracking-wider">Shift</th>
              <th className="text-left py-2 pr-4 text-sm font-semibold text-on-surface uppercase tracking-wider">Timing</th>
              <th className="text-left py-2 pr-4 text-sm font-semibold text-on-surface uppercase tracking-wider">Highlights</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 text-on-surface font-medium">Morning Shift</td>
              <td className="py-2 pr-4 text-on-surface-variant">07:00 AM — 08:00 AM</td>
              <td className="py-2 pr-4 text-on-surface-variant">Fresh mind start, intensive drills</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 text-on-surface font-medium">Day Shift</td>
              <td className="py-2 pr-4 text-on-surface-variant">10:00 AM — 11:00 AM</td>
              <td className="py-2 pr-4 text-on-surface-variant">Full resource access, library hours</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-4 text-on-surface font-medium">Evening Shift</td>
              <td className="py-2 pr-4 text-on-surface-variant">05:00 PM — 06:00 PM</td>
              <td className="py-2 pr-4 text-on-surface-variant">Professional cohort, mock tests focus</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section title="Working Hours">
        <p><strong>Sunday — Friday:</strong> 10:00 AM — 6:00 PM</p>
        <p><strong>Saturday:</strong> Closed</p>
      </Section>

      <Section title={tp.testFAQs.heading}>
        <div className="space-y-8">
          <div>
            <h3 className="font-heading text-heading-sm text-navy mb-3">IELTS</h3>
            <div className="space-y-4">
              {tp.testFAQs.ielts.map((faq, i) => (
                <div key={i}>
                  <p className="font-medium text-on-surface">{faq.q}</p>
                  <p className="text-body-md text-on-surface-variant mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-heading-sm text-navy mb-3">PTE</h3>
            <div className="space-y-4">
              {tp.testFAQs.pte.map((faq, i) => (
                <div key={i}>
                  <p className="font-medium text-on-surface">{faq.q}</p>
                  <p className="text-body-md text-on-surface-variant mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-heading-sm text-navy mb-3">JLPT</h3>
            <div className="space-y-4">
              {tp.testFAQs.jlpt.map((faq, i) => (
                <div key={i}>
                  <p className="font-medium text-on-surface">{faq.q}</p>
                  <p className="text-body-md text-on-surface-variant mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </DocsLayout>
  );
}
