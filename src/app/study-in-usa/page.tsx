import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import CountryPage from "@/components/CountryPage";

export const metadata: Metadata = {
  title: "Study in USA",
  description: "Study in the USA with Espot Pokhara Education and Visa Services. Expert guidance on university selection, visa processing, and scholarship opportunities for Nepalese students.",
  alternates: { canonical: "/study-in-usa" },
  openGraph: { title: "Study in USA | Espot Pokhara", description: "Expert guidance for studying in the USA.", url: "/study-in-usa" },
};

export default function Page() {
  const country = siteConfig.countries.find((c) => c.slug === "study-in-usa")!;
  return <CountryPage country={country} />;
}
