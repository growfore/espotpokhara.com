import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import CountryPage from "@/components/CountryPage";

export const metadata: Metadata = {
  title: "Study in Canada",
  description: "Study in Canada with Espot Pokhara Education and Visa Services. Expert guidance on university selection, visa processing, and scholarship opportunities for Nepalese students.",
  alternates: { canonical: "/study-in-canada" },
  openGraph: { title: "Study in Canada | Espot Pokhara", description: "Expert guidance for studying in Canada.", url: "/study-in-canada" },
};

export default function Page() {
  const country = siteConfig.countries.find((c) => c.slug === "study-in-canada")!;
  return <CountryPage country={country} />;
}
