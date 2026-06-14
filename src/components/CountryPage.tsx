"use client";

import type { Country } from "@/lib/site-config";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import Container from "@/components/global/Container";
import Heading from "@/components/shared/Heading";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

function Section({
  label,
  title,
  intro,
  children,
  odd,
}: {
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  odd: boolean;
}) {
  return (
    <section className={`px-4 xl:px-10 ${odd ? "pattern-bg border-y border-dashed" : ""}`}>
      <Container className="py-16 md:py-28 border-x border-dashed">
        <Reveal>
          <div className="text-center mb-12">
            <div className="academic-rule mx-auto mb-4" />
            <span className="text-label-bold text-crimson tracking-wider block mb-3">{label}</span>
            <Heading tag="h2" size="xl" className="text-navy mb-4">{title}</Heading>
            {intro && <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">{intro}</p>}
          </div>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`border border-dashed border-outline-variant rounded-3xl bg-paper-white p-8 ${className}`}>{children}</div>;
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-14 h-14 flex items-center justify-center bg-crimson text-paper-white font-heading text-headline-sm font-bold flex-shrink-0 rounded-2xl">
      {children}
    </div>
  );
}

function CircleStep({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white font-heading text-headline-sm font-bold flex-shrink-0 rounded-full">
      {children}
    </div>
  );
}

export default function CountryPage({ country }: { country: Country }) {
  let si = 0;
  const odd = () => ++si % 2 === 1;

  return (
    <>
      <section className="relative pt-24 md:pt-28 pb-28 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${country.hero})` }} />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-8xl mx-auto px-4 xl:px-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-display-lg text-paper-white mb-4"
          >
            {country.title}
          </motion.h1>
        </div>
      </section>

      <section className={`px-4 xl:px-10 ${odd() ? "pattern-bg border-y border-dashed" : ""}`}>
        <Container className="py-16 md:py-28 border-x border-dashed">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="academic-rule mb-4" />
              <Heading tag="h2" size="xl" className="text-navy mb-6">
                {country.name}
              </Heading>
              <p className="text-body-lg text-on-surface-variant">
                {country.intro}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {country.languageClassIntro && (
        <section className={`px-4 xl:px-10 ${odd() ? "pattern-bg border-y border-dashed" : ""}`}>
          <Container className="py-16 md:py-28 border-x border-dashed">
            <Reveal>
              <div className="text-center mb-12">
                <div className="academic-rule mx-auto mb-4" />
                <span className="text-label-bold text-crimson tracking-wider block mb-3">Language Classes</span>
                <Heading tag="h2" size="xl" className="text-navy mb-6">
                  {country.heading}
                </Heading>
                <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                  {country.languageClassIntro}
                </p>
              </div>
            </Reveal>
            <div className="max-w-3xl mx-auto">
              {country.jlptLevels?.map((level, i) => (
                <Reveal key={level.level} direction="up" delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="border border-dashed border-outline-variant rounded-3xl bg-paper-white flex gap-6 items-start p-6 mb-4"
                  >
                    <IconBox>{level.level}</IconBox>
                    <p className="text-body-md text-on-surface-variant pt-4">
                      {level.description}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <Section label="Why Choose Us" title={country.heading} odd={odd()}>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {country.features.map((feature, i) => (
            <Reveal key={feature.title} direction="up" delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="border border-dashed border-outline-variant rounded-3xl bg-paper-white p-8 h-full"
              >
                <Heading tag="h3" size="sm" className="text-on-surface mb-4">
                  {feature.title}
                </Heading>
                <p className="text-body-md text-on-surface-variant">
                  {feature.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

      {country.academicRequirements && (
        <Section label="Academic Requirements" title={country.academicRequirements.heading} intro={country.academicRequirements.intro} odd={odd()}>
          <Reveal direction="up">
            <div className="overflow-x-auto max-w-4xl mx-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-dashed border-outline-variant">
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Requirement</th>
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {country.academicRequirements.rows.map((row, i) => (
                    <tr key={i} className="border-b border-dashed border-outline-variant/50">
                      <td className="py-3 px-4 text-body-md text-on-surface font-medium">{row.requirement}</td>
                      <td className="py-3 px-4 text-body-md text-on-surface-variant">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Section>
      )}

      {country.educationalOpportunities && (
        <Section label="Educational Opportunities" title="Educational Opportunities" odd={odd()}>
          <Reveal direction="up">
            <div className="overflow-x-auto max-w-4xl mx-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-dashed border-outline-variant">
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Opportunity</th>
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {country.educationalOpportunities.map((item, i) => (
                    <tr key={i} className="border-b border-dashed border-outline-variant/50">
                      <td className="py-3 px-4 text-body-md text-on-surface font-medium">{item.title}</td>
                      <td className="py-3 px-4 text-body-md text-on-surface-variant">{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Section>
      )}

      {country.gpaTable && (
        <Section label="GPA & Qualifications" title={country.gpaTable.heading} odd={odd()}>
          <Reveal direction="up">
            <div className="overflow-x-auto max-w-3xl mx-auto mb-12">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-dashed border-outline-variant">
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">GPA Range</th>
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Grade</th>
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {country.gpaTable.rows.map((row, i) => (
                    <tr key={i} className="border-b border-dashed border-outline-variant/50">
                      <td className="py-3 px-4 text-body-md text-on-surface font-medium">{row.range}</td>
                      <td className="py-3 px-4 text-body-md text-on-surface-variant">{row.grade}</td>
                      <td className="py-3 px-4 text-body-md text-on-surface-variant">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <div className="max-w-3xl mx-auto">
            {country.gpaTable.levels.map((level, i) => (
              <Reveal key={i} direction="up" delay={i * 0.08}>
                <Card className="mb-4">
                  <Heading tag="h3" size="sm" className="text-on-surface mb-2">{level.level}</Heading>
                  <p className="text-body-md text-on-surface-variant">{level.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {country.languageRequirements && (
        <Section label="Language Requirements" title={country.languageRequirements.heading} intro={country.languageRequirements.intro} odd={odd()}>
          <Reveal direction="up">
            <div className="overflow-x-auto max-w-4xl mx-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-dashed border-outline-variant">
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Program</th>
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">IELTS</th>
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">PTE</th>
                  </tr>
                </thead>
                <tbody>
                  {country.languageRequirements.rows.map((row, i) => (
                    <tr key={i} className="border-b border-dashed border-outline-variant/50">
                      <td className="py-3 px-4 text-body-md text-on-surface font-medium">{row.program}</td>
                      <td className="py-3 px-4 text-body-md text-on-surface-variant">{row.ielts}</td>
                      <td className="py-3 px-4 text-body-md text-on-surface-variant">{row.pte}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Section>
      )}

      {country.topUniversities && (() => {
        const hasRank = !!country.topUniversities[0]?.rank;
        const hasQsRank = !!country.topUniversities[0]?.qsRank;
        const hasRanking = !!country.topUniversities[0]?.ranking;
        const hasDesc = !!country.topUniversities[0]?.desc;
        return (
          <Section label="Top Universities" title="Top Universities" odd={odd()}>
            <Reveal direction="up">
              <div className="overflow-x-auto max-w-4xl mx-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-dashed border-outline-variant">
                      {hasRank && <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Rank</th>}
                      <th className="py-3 px-4 font-heading text-label-bold text-on-surface">University</th>
                      {hasQsRank && <th className="py-3 px-4 font-heading text-label-bold text-on-surface">QS Rank</th>}
                      {hasRanking && <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Ranking</th>}
                      {hasDesc && <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Description</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {country.topUniversities.map((uni, i) => (
                      <tr key={i} className="border-b border-dashed border-outline-variant/50">
                        {hasRank && <td className="py-3 px-4 text-body-md text-on-surface font-medium">{uni.rank}</td>}
                        <td className="py-3 px-4 text-body-md text-on-surface font-medium">{uni.name}</td>
                        {hasQsRank && <td className="py-3 px-4 text-body-md text-on-surface-variant">{uni.qsRank}</td>}
                        {hasRanking && <td className="py-3 px-4 text-body-md text-on-surface-variant">{uni.ranking}</td>}
                        {hasDesc && <td className="py-3 px-4 text-body-md text-on-surface-variant">{uni.desc}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </Section>
        );
      })()}

      {country.studyCost && (
        <Section label="Study Cost" title={country.studyCost.heading} intro={country.studyCost.intro} odd={odd()}>
          <Reveal direction="up">
            <div className="overflow-x-auto max-w-3xl mx-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-dashed border-outline-variant">
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Expense</th>
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {country.studyCost.rows.map((row, i) => (
                    <tr key={i} className="border-b border-dashed border-outline-variant/50">
                      <td className="py-3 px-4 text-body-md text-on-surface-variant">{row.expense}</td>
                      <td className="py-3 px-4 text-body-md text-on-surface font-medium">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Section>
      )}

      {country.costOfLiving && (
        <Section label="Cost of Living" title={country.costOfLiving.heading} intro={country.costOfLiving.intro} odd={odd()}>
          <Reveal direction="up">
            <div className="overflow-x-auto max-w-3xl mx-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-dashed border-outline-variant">
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Category</th>
                    <th className="py-3 px-4 font-heading text-label-bold text-on-surface">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {country.costOfLiving.rows.map((row, i) => (
                    <tr key={i} className="border-b border-dashed border-outline-variant/50">
                      <td className="py-3 px-4 text-body-md text-on-surface-variant">{row.category}</td>
                      <td className="py-3 px-4 text-body-md text-on-surface font-medium">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          {country.costOfLiving.note && (
            <Reveal>
              <p className="text-body-md text-on-surface-variant mt-6 max-w-3xl mx-auto text-center italic">{country.costOfLiving.note}</p>
            </Reveal>
          )}
        </Section>
      )}

      {(country.documents || country.documentChecklist) && (
        <Section label="Required Documents" title="Required Documents" odd={odd()}>
          {country.documents && (
            <div className="max-w-3xl mx-auto">
              {country.documents.map((doc, i) => (
                <Reveal key={i} direction="up" delay={i * 0.05}>
                  <div className="flex items-start gap-4 mb-4">
                    <Check className="w-6 h-6 text-crimson mt-1 flex-shrink-0" />
                    <p className="text-body-md text-on-surface-variant">{doc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
          {country.documentChecklist && (
            <div className="max-w-3xl mx-auto">
              {country.documentChecklist.map((item, i) => (
                <Reveal key={i} direction="up" delay={i * 0.05}>
                  <Card className="mb-4">
                    <Heading tag="h3" size="sm" className="text-on-surface mb-2">{item.title}</Heading>
                    <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          )}
        </Section>
      )}

      {country.admissionProcess && (
        <Section label="Admission Process" title="Admission Process" odd={odd()}>
          <div className="max-w-4xl mx-auto">
            {country.admissionProcess.map((step, i) => (
              <Reveal key={i} direction="up" delay={i * 0.06}>
                <div className="flex gap-6 items-start mb-8">
                  <CircleStep>{step.step}</CircleStep>
                  <div className="pt-2">
                    <Heading tag="h3" size="sm" className="text-on-surface mb-2">{step.title}</Heading>
                    <p className="text-body-md text-on-surface-variant">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {country.supportSystems && (
        <Section label="Support Systems" title="Support Systems" odd={odd()}>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {country.supportSystems.map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <Card className="h-full">
                  <Heading tag="h3" size="sm" className="text-on-surface mb-4">{item.title}</Heading>
                  <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {country.employmentOpportunities && (
        <Section label="Employment Opportunities" title="Employment Opportunities" odd={odd()}>
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto">
              <p className="text-body-lg text-on-surface-variant">{country.employmentOpportunities}</p>
            </div>
          </Reveal>
        </Section>
      )}

      {country.ourServices && (
        <Section label="Our Services" title="Our Services" odd={odd()}>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {country.ourServices.map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <Card className="h-full">
                  <Heading tag="h3" size="sm" className="text-on-surface mb-4">{item.title}</Heading>
                  <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {country.livingInAustralia && (
        <Section label="Living in Australia" title="Living in Australia" odd={odd()}>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {country.livingInAustralia.map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <Card className="h-full">
                  <Heading tag="h3" size="sm" className="text-on-surface mb-4">{item.title}</Heading>
                  <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {country.employabilityServices && (
        <Section label="Employability Services" title="Employability Services" odd={odd()}>
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto">
              <p className="text-body-lg text-on-surface-variant">{country.employabilityServices}</p>
            </div>
          </Reveal>
        </Section>
      )}

      {country.languageSupport && (
        <Section label="Language Support" title="Language Support" odd={odd()}>
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto">
              <p className="text-body-lg text-on-surface-variant">{country.languageSupport}</p>
            </div>
          </Reveal>
        </Section>
      )}

      {country.supportForStudents && (
        <Section label="Support for Students" title="Support for Students" odd={odd()}>
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto">
              <p className="text-body-lg text-on-surface-variant">{country.supportForStudents}</p>
            </div>
          </Reveal>
        </Section>
      )}

      {country.studentLife && (
        <Section label="Student Life" title="Student Life" odd={odd()}>
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto">
              <p className="text-body-lg text-on-surface-variant">{country.studentLife}</p>
            </div>
          </Reveal>
        </Section>
      )}

      {country.budgetingTips && (
        <Section label="Budgeting Tips" title="Budgeting Tips" odd={odd()}>
          <div className="max-w-3xl mx-auto">
            {country.budgetingTips.map((tip, i) => (
              <Reveal key={i} direction="up" delay={i * 0.06}>
                <div className="flex gap-4 items-start mb-4">
                  <CircleStep>{tip.step}</CircleStep>
                  <p className="text-body-md text-on-surface-variant pt-3">{tip.tip}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {country.workOpportunities && (
        <Section label="Work Opportunities" title="Work Opportunities" odd={odd()}>
          <div className="max-w-4xl mx-auto">
            {country.workOpportunities.duringStudies.length > 0 && (
              <>
                <Heading tag="h3" size="md" className="text-navy mb-6">During Studies</Heading>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {country.workOpportunities.duringStudies.map((item, i) => (
                    <Reveal key={i} direction="up" delay={i * 0.1}>
                      <Card className="h-full">
                        <Heading tag="h4" size="xs" className="text-on-surface mb-4">{item.title}</Heading>
                        <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
            {country.workOpportunities.postGraduation.length > 0 && (
              <>
                <Heading tag="h3" size="md" className="text-navy mb-6">Post-Graduation</Heading>
                <div className="grid sm:grid-cols-2 gap-6">
                  {country.workOpportunities.postGraduation.map((item, i) => (
                    <Reveal key={i} direction="up" delay={i * 0.1}>
                      <Card className="h-full">
                        <Heading tag="h4" size="xs" className="text-on-surface mb-4">{item.title}</Heading>
                        <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>
        </Section>
      )}

      {country.extendedJlptLevels && (
        <Section label="JLPT Levels" title="Japanese Language Proficiency Levels" odd={odd()}>
          <div className="max-w-4xl mx-auto space-y-6">
            {country.extendedJlptLevels.map((level, i) => (
              <Reveal key={i} direction="up" delay={i * 0.08}>
                <Card>
                  <div className="flex items-center gap-4 mb-4">
                    <IconBox>{level.level}</IconBox>
                    <Heading tag="h3" size="sm" className="text-on-surface">{level.title}</Heading>
                  </div>
                  <p className="text-body-md text-on-surface-variant">{level.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {country.whyChooseUs && (
        <Section label="Why Choose Us" title="Why Choose Us" odd={odd()}>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {country.whyChooseUs.map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <Card className="h-full">
                  <Heading tag="h3" size="sm" className="text-on-surface mb-4">{item.title}</Heading>
                  <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {country.documentationProcess && (
        <Section label="Documentation Process" title="Documentation Process" odd={odd()}>
          <div className="max-w-3xl mx-auto">
            {country.documentationProcess.map((step, i) => (
              <Reveal key={i} direction="up" delay={i * 0.06}>
                <div className="flex gap-4 items-start mb-6">
                  <CircleStep>{step.step.replace("Step ", "")}</CircleStep>
                  <p className="text-body-md text-on-surface-variant pt-3">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {country.jobOpportunities && (
        <Section label="Job Opportunities" title="Job Opportunities" odd={odd()}>
          <Reveal direction="up">
            <div className="max-w-4xl mx-auto">
              <p className="text-body-lg text-on-surface-variant">{country.jobOpportunities}</p>
            </div>
          </Reveal>
        </Section>
      )}

      {country.faqs && (
        <Section label="FAQs" title="Frequently Asked Questions" odd={odd()}>
          <div className="max-w-3xl mx-auto">
            {country.faqs.map((faq, i) => (
              <Reveal key={i} direction="up" delay={i * 0.04}>
                <details className="group border-b border-dashed border-outline-variant py-4">
                  <summary className="flex items-center justify-between cursor-pointer text-body-lg text-on-surface font-heading font-bold list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <svg className="w-5 h-5 text-crimson transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="mt-4 text-body-md text-on-surface-variant">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
