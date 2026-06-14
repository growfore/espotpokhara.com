import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Container from "@/components/global/Container";
import AnimatedUnderline from "@/components/shared/AnimatedUnderline";

export default function Footer() {
  return (
    <footer>
      <Container className="border-t border-dashed">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0  pattern-bg--2">
          <div className="py-10  bg-paper-white">
            <Link href="/" className="flex items-center group mb-4">
              <img
                src="/espot_logo.webp"
                alt={siteConfig.shortName}
                className="h-14 md:h-16 w-auto"
              />
            </Link>
            <p className="text-on-surface-variant text-body-md mb-6">
              {siteConfig.footerAbout}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-dashed border-outline-variant text-on-surface-variant hover:text-crimson hover:border-crimson transition-all duration-200"
                aria-label="Facebook"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-dashed border-outline-variant text-on-surface-variant hover:text-crimson hover:border-crimson transition-all duration-200"
                aria-label="Instagram"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="px-10 py-10  bg-paper-white">
            <h4 className="font-heading text-label-bold text-crimson mb-4">
              Pages
            </h4>
            <ul className="space-y-3">
              {siteConfig.footerPages.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="relative group text-on-surface-variant hover:text-navy text-body-md transition-colors duration-200"
                  >
                    {p.label}
                    <AnimatedUnderline className="bg-crimson" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=" py-10  bg-paper-white">
            <h4 className="font-heading text-label-bold text-crimson mb-4">
              Countries
            </h4>
            <ul className="space-y-3">
              {siteConfig.footerCountries.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="relative group text-on-surface-variant hover:text-navy text-body-md transition-colors duration-200"
                  >
                    {c.label}
                    <AnimatedUnderline className="bg-crimson" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-10 py-10 border-dashed bg-paper-white">
            <h4 className="font-heading text-label-bold text-crimson mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {siteConfig.footerSupport.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="relative group text-on-surface-variant hover:text-navy text-body-md transition-colors duration-200"
                  >
                    {s.label}
                    <AnimatedUnderline className="bg-crimson" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative py-6 flex flex-col md:flex-row items-center justify-between gap-1 md:gap-0 border-t border-dashed border-outline-variant pattern-bg--2">
          <p className="z-20 relative text-label-sm text-on-surface-variant">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
