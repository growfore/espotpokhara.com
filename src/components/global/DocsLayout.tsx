"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import TableOfContents from "@/components/global/TableOfContents";

export function Callout({
  type = "info",
  children,
}: {
  type?: "info" | "tip" | "warning";
  children: React.ReactNode;
}) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    tip: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
  };
  const icons = {
    info: "info",
    tip: "lightbulb",
    warning: "warning",
  };
  return (
    <div className={`flex gap-3 p-4 rounded-lg border ${styles[type]} my-6`}>
      <span className="material-symbols-outlined text-lg flex-shrink-0 mt-0.5">
        {icons[type]}
      </span>
      <div className="text-sm leading-relaxed [&>p]:mb-0">{children}</div>
    </div>
  );
}

export function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12">
      <h2 className="font-heading tracking-tighter text-heading-lg text-navy mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

const cardColors = [
  "bg-blue-50 border-blue-200",
  "bg-green-50 border-green-200",
  "bg-amber-50 border-amber-200",
  "bg-purple-50 border-purple-200",
  "bg-rose-50 border-rose-200",
  "bg-teal-50 border-teal-200",
  "bg-indigo-50 border-indigo-200",
  "bg-orange-50 border-orange-200",
];

export function CardGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid sm:grid-cols-2 gap-4 my-4">{children}</div>;
}

export function Card({
  number,
  title,
  children,
  colorIndex = 0,
}: {
  number?: string;
  title: string;
  children?: React.ReactNode;
  colorIndex?: number;
}) {
  const color = cardColors[colorIndex % cardColors.length];
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      {number && (
        <span className="text-xs font-bold text-outline uppercase tracking-wider">
          {number}
        </span>
      )}
      <h3 className="font-semibold text-on-surface mt-2">{title}</h3>
      {children && (
        <div className="text-sm text-on-surface-variant mt-2 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

const navItems = [
  {
    label: "Study Destinations",
    items: [
      { href: "/study-in-usa", label: "USA" },
      { href: "/study-in-uk", label: "UK" },
      { href: "/study-in-canada", label: "Canada" },
      { href: "/study-in-australia", label: "Australia" },
      { href: "/study-in-new-zealand", label: "New Zealand" },
      { href: "/study-in-dubai", label: "Dubai" },
      { href: "/study-in-germany", label: "Germany" },
      { href: "/study-in-malta", label: "Malta" },
      { href: "/study-in-cyprus", label: "Cyprus" },
      { href: "/study-in-france", label: "France" },
    ],
  },
  {
    label: "Resources",
    items: [
      { href: "/services", label: "Services" },
      { href: "/test-preparation", label: "Test Preparation" },
      { href: "/enquiry-form", label: "Enquiry Form" },
    ],
  },
  {
    label: "Site",
    items: [
      { href: "/about-us", label: "About Us" },
      { href: "/contact-us", label: "Contact Us" },
      { href: "/blogs", label: "Blogs" },
    ],
  },
];

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-30 h-full w-64 bg-paper-white border-r border-outline-variant pt-16 lg:pt-4 pb-8 overflow-y-auto transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]`}
      >
        <nav className="px-4 pt-4 space-y-8">
          {navItems.map((group) => (
            <div key={group.label}>
              <p className="px-3 text-xs font-bold text-outline uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span
                  className="material-symbols-outlined text-xs"
                  aria-hidden="true"
                >
                  {group.label === "Study Destinations"
                    ? "public"
                    : group.label === "Site"
                      ? "language"
                      : "description"}
                </span>
                {group.label}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${active ? "bg-crimson/10 text-crimson font-medium" : "text-on-surface-variant hover:bg-linen-bg hover:text-on-surface"}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-20 bg-black/20"
          onClick={onClose}
        />
      )}
    </>
  );
}

function Breadcrumbs({ onMenuToggle }: { onMenuToggle: () => void }) {
  const pathname = usePathname();
  for (const group of navItems) {
    const item = group.items.find((i) => i.href === pathname);
    if (item) {
      return (
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={onMenuToggle}
            className="lg:hidden w-8 h-8 flex items-center justify-center bg-paper-white border border-outline-variant rounded-lg flex-shrink-0"
            aria-label="Toggle sidebar"
          >
            <span
              className="material-symbols-outlined text-base text-on-surface-variant"
              aria-hidden="true"
            >
              menu
            </span>
          </button>
          <nav className="text-sm text-outline font-heading">
            {group.label} /{" "}
            <span className="text-on-surface font-medium">{item.label}</span>
          </nav>
        </div>
      );
    }
  }
  return null;
}

export default function DocsLayout({
  title,
  subtitle,
  headerImage,
  children,
}: {
  title: string;
  subtitle?: string;
  headerImage?: string;
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-paper-white">
      <div className="max-w-8xl mx-auto flex">
        <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="flex-1 min-w-0 px-6 pt-4 pb-16 md:pb-20 lg:pl-12">
          <Breadcrumbs onMenuToggle={() => setMenuOpen(!menuOpen)} />
          <div className="flex gap-12">
            <div className="max-w-3xl flex-1 min-w-0">
              {headerImage ? (
                <div className="relative -mx-6 lg:-ml-12 mb-10 overflow-hidden rounded-xl">
                  <div className="relative h-48 sm:h-64 lg:h-72">
                    <Image
                      src={headerImage}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-paper-white via-paper-white/80 to-transparent" />
                    <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-12 max-w-lg">
                      <h1 className="font-heading tracking-tighter text-heading-xl text-navy mb-2">
                        {title}
                      </h1>
                      {subtitle && (
                        <p className="font-heading text-body-lg text-on-surface-variant">
                          {subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h1 className="font-heading tracking-tighter text-heading-xl text-navy mb-2">
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="font-heading text-body-lg text-on-surface-variant mb-8">
                      {subtitle}
                    </p>
                  )}
                </>
              )}
              <div className="docs-content">{children}</div>
            </div>
            <TableOfContents />
          </div>
        </main>
      </div>
    </div>
  );
}
