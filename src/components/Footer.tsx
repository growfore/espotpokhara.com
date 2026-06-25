import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-navy text-paper-white">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 py-12 md:py-16">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-block mb-4 bg-white rounded-md p-2"
            >
              <Image
                src="/logo.png"
                alt={siteConfig.shortName}
                width={1280}
                height={720}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-base text-paper-white/80 leading-relaxed mb-6 max-w-xs">
              {siteConfig.footerAbout}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="underline"
              >
                Facebook
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper-white/60 uppercase tracking-wider mb-4">
              Pages
            </p>
            <ul className="space-y-2.5">
              {siteConfig.footerPages.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-base text-paper-white/85 hover:text-paper-white transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blogs"
                  className="text-base text-paper-white/85 hover:text-paper-white transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-base text-paper-white/85 hover:text-paper-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper-white/60 uppercase tracking-wider mb-4">
              Countries
            </p>
            <ul className="space-y-2.5">
              {siteConfig.nav.mainMenu[0].children!.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-base text-paper-white/85 hover:text-paper-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper-white/60 uppercase tracking-wider mb-4">
              Schedule
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-paper-white/70 mb-2">
                  Language Classes
                </p>
                <div className="space-y-1.5">
                  <div className="flex justify-between gap-4 text-sm text-paper-white/75">
                    <span>Morning</span>
                    <span>{siteConfig.languageSchedule.morning}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-sm text-paper-white/75">
                    <span>Day</span>
                    <span>{siteConfig.languageSchedule.day}</span>
                  </div>
                  <div className="flex justify-between gap-4 text-sm text-paper-white/75">
                    <span>Evening</span>
                    <span>{siteConfig.languageSchedule.evening}</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-paper-white/70 mb-2">
                  Working Hours
                </p>
                <div className="space-y-1.5">
                  <div className="flex justify-between gap-4 text-sm text-paper-white/75">
                    <span>Sun - Fri</span>
                    <span>10AM - 6PM</span>
                  </div>
                  <div className="flex justify-between gap-4 text-sm text-paper-white/75">
                    <span>Saturday</span>
                    <span className="text-crimson">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-paper-white/60 uppercase tracking-wider mb-4">
              Support
            </p>
            <ul className="space-y-2.5">
              {siteConfig.footerSupport.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-base text-paper-white/85 hover:text-paper-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-paper-white/75">
                {siteConfig.contact.phone}
              </p>
              <p className="text-sm text-paper-white/75">
                {siteConfig.contact.email}
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-paper-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-paper-white/60">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
