import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import CountryPage from "@/components/CountryPage";

export const metadata: Metadata = {
  title: "Study in Australia",
  description: "Study in Australia with Espot Pokhara Education and Visa Services. Expert guidance on university selection, visa processing, and scholarship opportunities for Nepalese students.",
  alternates: { canonical: "/study-in-australia" },
  openGraph: { title: "Study in Australia | Espot Pokhara", description: "Expert guidance for studying in Australia.", url: "/study-in-australia" },
};

export default function Page() {
  const country = siteConfig.countries.find((c) => c.slug === "study-in-australia")!;
  return <CountryPage country={country} />;
}
