"use client";

import type { Country } from "@/lib/site-config";
import DocsLayout, { Section, CardGrid, Card } from "@/components/global/DocsLayout";

export default function CountryPage({ country }: { country: Country }) {
  return (
    <DocsLayout title={country.title} headerImage={country.hero}>
      <Section title={country.name}>
        <p className="text-base leading-relaxed text-on-surface-variant">{country.intro}</p>
      </Section>

      {country.languageClassIntro && (
        <Section title={country.heading}>
          <p className="text-base leading-relaxed text-on-surface-variant mb-6">{country.languageClassIntro}</p>
          {country.jlptLevels?.map((level) => (
            <p key={level.level} className="text-sm text-on-surface-variant mb-2">
              <strong className="text-on-surface">{level.level}</strong>: {level.description}
            </p>
          ))}
        </Section>
      )}

      <Section title={country.heading}>
        <p className="text-sm text-on-surface-variant mb-4">Why choose us for your study abroad journey</p>
        <CardGrid>
          {country.features.map((feature, i) => (
            <Card key={feature.title} title={feature.title} colorIndex={i}>
              {feature.desc}
            </Card>
          ))}
        </CardGrid>
      </Section>

      {country.academicRequirements && (
        <Section title={country.academicRequirements.heading}>
          {country.academicRequirements.intro && (
            <p className="text-sm text-on-surface-variant mb-4">{country.academicRequirements.intro}</p>
          )}
          <table className="w-full text-sm border-collapse mb-4">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">Requirement</th>
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">Detail</th>
              </tr>
            </thead>
            <tbody>
              {country.academicRequirements.rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 pr-4 text-on-surface">{row.requirement}</td>
                  <td className="py-2 pr-4 text-on-surface-variant">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      )}

      {country.educationalOpportunities && (
        <Section title="Educational Opportunities">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">Opportunity</th>
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">Description</th>
              </tr>
            </thead>
            <tbody>
              {country.educationalOpportunities.map((item, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 pr-4 text-on-surface">{item.title}</td>
                  <td className="py-2 pr-4 text-on-surface-variant">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      )}

      {country.gpaTable && (
        <Section title={country.gpaTable.heading}>
          <table className="w-full text-sm border-collapse mb-6">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">GPA Range</th>
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">Grade</th>
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">Description</th>
              </tr>
            </thead>
            <tbody>
              {country.gpaTable.rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 pr-4 text-on-surface">{row.range}</td>
                  <td className="py-2 pr-4 text-on-surface-variant">{row.grade}</td>
                  <td className="py-2 pr-4 text-on-surface-variant">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {country.gpaTable.levels.map((level) => (
            <div key={level.level} className="mb-4">
              <h3 className="font-semibold text-on-surface">{level.level}</h3>
              <p className="text-sm text-on-surface-variant">{level.desc}</p>
            </div>
          ))}
        </Section>
      )}

      {country.languageRequirements && (
        <Section title={country.languageRequirements.heading}>
          {country.languageRequirements.intro && (
            <p className="text-sm text-on-surface-variant mb-4">{country.languageRequirements.intro}</p>
          )}
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">Program</th>
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">IELTS</th>
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">PTE</th>
              </tr>
            </thead>
            <tbody>
              {country.languageRequirements.rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 pr-4 text-on-surface">{row.program}</td>
                  <td className="py-2 pr-4 text-on-surface-variant">{row.ielts}</td>
                  <td className="py-2 pr-4 text-on-surface-variant">{row.pte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      )}

      {country.topUniversities && (() => {
        const hasRank = !!country.topUniversities[0]?.rank;
        const hasQsRank = !!country.topUniversities[0]?.qsRank;
        const hasRanking = !!country.topUniversities[0]?.ranking;
        const hasDesc = !!country.topUniversities[0]?.desc;
        return (
          <Section title="Top Universities">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  {hasRank && <th className="text-left py-2 pr-4 font-semibold text-on-surface">Rank</th>}
                  <th className="text-left py-2 pr-4 font-semibold text-on-surface">University</th>
                  {hasQsRank && <th className="text-left py-2 pr-4 font-semibold text-on-surface">QS Rank</th>}
                  {hasRanking && <th className="text-left py-2 pr-4 font-semibold text-on-surface">Ranking</th>}
                  {hasDesc && <th className="text-left py-2 pr-4 font-semibold text-on-surface">Description</th>}
                </tr>
              </thead>
              <tbody>
                {country.topUniversities.map((uni, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    {hasRank && <td className="py-2 pr-4 text-on-surface">{uni.rank}</td>}
                    <td className="py-2 pr-4 text-on-surface">{uni.name}</td>
                    {hasQsRank && <td className="py-2 pr-4 text-on-surface-variant">{uni.qsRank}</td>}
                    {hasRanking && <td className="py-2 pr-4 text-on-surface-variant">{uni.ranking}</td>}
                    {hasDesc && <td className="py-2 pr-4 text-on-surface-variant">{uni.desc}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>
        );
      })()}

      {country.studyCost && (
        <Section title={country.studyCost.heading}>
          {country.studyCost.intro && (
            <p className="text-sm text-on-surface-variant mb-4">{country.studyCost.intro}</p>
          )}
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">Expense</th>
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">Cost</th>
              </tr>
            </thead>
            <tbody>
              {country.studyCost.rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 pr-4 text-on-surface-variant">{row.expense}</td>
                  <td className="py-2 pr-4 text-on-surface">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      )}

      {country.costOfLiving && (
        <Section title={country.costOfLiving.heading}>
          {country.costOfLiving.intro && (
            <p className="text-sm text-on-surface-variant mb-4">{country.costOfLiving.intro}</p>
          )}
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">Category</th>
                <th className="text-left py-2 pr-4 font-semibold text-on-surface">Cost</th>
              </tr>
            </thead>
            <tbody>
              {country.costOfLiving.rows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 pr-4 text-on-surface-variant">{row.category}</td>
                  <td className="py-2 pr-4 text-on-surface">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {country.costOfLiving.note && (
            <p className="text-sm text-on-surface-variant mt-4 italic">{country.costOfLiving.note}</p>
          )}
        </Section>
      )}

      {(country.documents || country.documentChecklist) && (
        <Section title="Required Documents">
          {country.documents && (
            <CardGrid>
              {country.documents.map((doc, i) => {
                const sep = doc.indexOf(" - ");
                const title = sep !== -1 ? doc.slice(0, sep) : "Document";
                const desc = sep !== -1 ? doc.slice(sep + 3) : doc;
                return <Card key={i} title={title} colorIndex={i}>{desc}</Card>;
              })}
            </CardGrid>
          )}
          {country.documentChecklist && (
            <CardGrid>
              {country.documentChecklist.map((item, i) => (
                <Card key={item.title} title={item.title} colorIndex={i}>{item.desc}</Card>
              ))}
            </CardGrid>
          )}
        </Section>
      )}

      {country.admissionProcess && (
        <Section title="Admission Process">
          <ol className="list-decimal pl-5 text-sm text-on-surface-variant space-y-4">
            {country.admissionProcess.map((step) => (
              <li key={step.step}>
                <strong className="text-on-surface">{step.title}</strong>: {step.desc}
              </li>
            ))}
          </ol>
        </Section>
      )}

      {country.supportSystems && (
        <Section title="Support Systems">
          <CardGrid>
            {country.supportSystems.map((item, i) => (
              <Card key={item.title} title={item.title} colorIndex={i}>
                {item.desc}
              </Card>
            ))}
          </CardGrid>
        </Section>
      )}

      {country.employmentOpportunities && (
        <Section title="Employment Opportunities">
          <p className="text-sm text-on-surface-variant leading-relaxed">{country.employmentOpportunities}</p>
        </Section>
      )}

      {country.ourServices && (
        <Section title="Our Services">
          <CardGrid>
            {country.ourServices.map((item, i) => (
              <Card key={item.title} title={item.title} colorIndex={i}>
                {item.desc}
              </Card>
            ))}
          </CardGrid>
        </Section>
      )}

      {country.livingInAustralia && (
        <Section title="Living in Australia">
          <CardGrid>
            {country.livingInAustralia.map((item, i) => (
              <Card key={item.title} title={item.title} colorIndex={i}>
                {item.desc}
              </Card>
            ))}
          </CardGrid>
        </Section>
      )}

      {country.employabilityServices && (
        <Section title="Employability Services">
          <p className="text-sm text-on-surface-variant leading-relaxed">{country.employabilityServices}</p>
        </Section>
      )}

      {country.languageSupport && (
        <Section title="Language Support">
          <p className="text-sm text-on-surface-variant leading-relaxed">{country.languageSupport}</p>
        </Section>
      )}

      {country.supportForStudents && (
        <Section title="Support for Students">
          <p className="text-sm text-on-surface-variant leading-relaxed">{country.supportForStudents}</p>
        </Section>
      )}

      {country.studentLife && (
        <Section title="Student Life">
          <p className="text-sm text-on-surface-variant leading-relaxed">{country.studentLife}</p>
        </Section>
      )}

      {country.budgetingTips && (
        <Section title="Budgeting Tips">
          <ol className="list-decimal pl-5 text-sm text-on-surface-variant space-y-2">
            {country.budgetingTips.map((tip) => (
              <li key={tip.step}>{tip.tip}</li>
            ))}
          </ol>
        </Section>
      )}

      {country.workOpportunities && (
        <Section title="Work Opportunities">
          {country.workOpportunities.duringStudies.length > 0 && (
            <>
              <h3 className="font-semibold text-on-surface mb-3">During Studies</h3>
              <CardGrid>
                {country.workOpportunities.duringStudies.map((item, i) => (
                  <Card key={item.title} title={item.title} colorIndex={i}>
                    {item.desc}
                  </Card>
                ))}
              </CardGrid>
            </>
          )}
          {country.workOpportunities.postGraduation.length > 0 && (
            <>
              <h3 className="font-semibold text-on-surface mb-3">Post-Graduation</h3>
              <CardGrid>
                {country.workOpportunities.postGraduation.map((item, i) => (
                  <Card key={item.title} title={item.title} colorIndex={i}>
                    {item.desc}
                  </Card>
                ))}
              </CardGrid>
            </>
          )}
        </Section>
      )}

       {country.extendedJlptLevels && (
         <Section title="Japanese Language Proficiency Levels">
           {country.extendedJlptLevels.map((level, i) => (
             <div key={`${level.level}-${i}`} className="mb-4">
               <h3 className="font-semibold text-on-surface">{level.level} — {level.title}</h3>
               <p className="text-sm text-on-surface-variant">{level.description}</p>
             </div>
           ))}
         </Section>
       )}

      {country.whyChooseUs && (
        <Section title="Why Choose Us">
          <div className="grid sm:grid-cols-2 gap-4">
            {country.whyChooseUs.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold text-on-surface">{item.title}</h3>
                <p className="text-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {country.documentationProcess && (
        <Section title="Documentation Process">
          <ol className="list-decimal pl-5 text-sm text-on-surface-variant space-y-2">
            {country.documentationProcess.map((step) => (
              <li key={step.step}>{step.desc}</li>
            ))}
          </ol>
        </Section>
      )}

      {country.jobOpportunities && (
        <Section title="Job Opportunities">
          <p className="text-sm text-on-surface-variant leading-relaxed">{country.jobOpportunities}</p>
        </Section>
      )}

      {country.faqs && (
        <Section title="Frequently Asked Questions">
          {country.faqs.map((faq) => (
            <details key={faq.q} className="mb-3 border-b border-gray-100 pb-3">
              <summary className="cursor-pointer font-semibold text-on-surface text-sm [&::-webkit-details-marker]:hover">{faq.q}</summary>
              <p className="mt-2 text-sm text-on-surface-variant">{faq.a}</p>
            </details>
          ))}
        </Section>
      )}
    </DocsLayout>
  );
}
