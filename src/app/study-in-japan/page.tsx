import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import CountryPage from "@/components/CountryPage";

export const metadata: Metadata = {
  title: "Study in Japan",
  description: "Study in Japan with Espot Pokhara Education and Visa Services. Expert guidance on university selection, visa processing, JLPT preparation, and scholarship opportunities for Nepalese students.",
  alternates: { canonical: "/study-in-japan" },
  openGraph: { title: "Study in Japan | Espot Pokhara", description: "Expert guidance for studying in Japan.", url: "/study-in-japan" },
};

export default function Page() {
  const country = siteConfig.countries.find((c) => c.slug === "study-in-japan")!;
  return <CountryPage country={country} />;
}
