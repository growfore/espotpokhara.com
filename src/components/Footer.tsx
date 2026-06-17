import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-navy text-paper-white">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 py-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/espot_logo.webp"
                alt={siteConfig.shortName}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-paper-white/60 leading-relaxed mb-6 max-w-xs">
              {siteConfig.footerAbout}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-paper-white/20 flex items-center justify-center hover:bg-crimson transition-colors"
                aria-label="Facebook"
              >
                <span className="material-symbols-outlined text-xs">face_nod</span>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-paper-white/20 flex items-center justify-center hover:bg-crimson transition-colors"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined text-xs">photo_camera</span>
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-paper-white/40 uppercase tracking-wider mb-4">Pages</p>
            <ul className="space-y-2.5">
              {siteConfig.footerPages.map((p) => (
                <li key={p.label}>
                  <Link href={p.href} className="text-sm text-paper-white/70 hover:text-paper-white transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blogs" className="text-sm text-paper-white/70 hover:text-paper-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-paper-white/70 hover:text-paper-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-paper-white/40 uppercase tracking-wider mb-4">Countries</p>
            <ul className="space-y-2.5">
              {siteConfig.footerCountries.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-sm text-paper-white/70 hover:text-paper-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-paper-white/40 uppercase tracking-wider mb-4">Support</p>
            <ul className="space-y-2.5">
              {siteConfig.footerSupport.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-paper-white/70 hover:text-paper-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <p className="text-xs text-paper-white/40">{siteConfig.contact.phone}</p>
              <p className="text-xs text-paper-white/40">{siteConfig.contact.email}</p>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-paper-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-paper-white/40">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
