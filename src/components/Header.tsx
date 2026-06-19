"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import AnimatedUnderline from "@/components/shared/AnimatedUnderline";

interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly {
    readonly label: string;
    readonly href: string;
  }[];
}

function MobileAccordion({ item, onMobileClose }: { item: NavItem; onMobileClose?: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-on-surface font-heading text-headline-sm py-4 border-b border-outline-variant"
      >
        {item.label}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 space-y-1 pb-2">
              {item.children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onMobileClose}
                  className="block text-on-surface-variant hover:text-crimson text-sm py-3 border-b border-outline-variant/50"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavLink({
  item,
  isMobile = false,
  onMobileClose,
}: {
  item: NavItem;
  isMobile?: boolean;
  onMobileClose?: () => void;
}) {
  if (!("children" in item) || !item.children) {
    return (
      <Link
        href={item.href}
        onClick={onMobileClose}
        className={`relative group ${
          isMobile
            ? "block text-on-surface font-heading text-headline-sm py-4 border-b border-outline-variant"
            : "text-on-surface-variant hover:text-navy font-body text-sm font-semibold transition-colors duration-200"
        }`}
      >
        {item.label}
        {!isMobile && <AnimatedUnderline />}
      </Link>
    );
  }

  if (isMobile) return <MobileAccordion item={item} onMobileClose={onMobileClose} />;

  return (
    <li className="relative group pb-3">
      <button className="flex items-center gap-1 text-on-surface-variant hover:text-navy font-body text-sm transition-colors duration-200 cursor-pointer">
        {item.label}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>
      <div className="invisible group-hover:visible group-focus-within:visible opacity-0 group-hover:opacity-100 transition-all duration-150 absolute top-full left-0 w-56 pt-3 -mt-3"><div className="bg-paper-white border border-outline-variant rounded-3xl shadow-lg">
        <div className="p-2">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-3 text-sm text-on-surface hover:bg-linen-bg hover:text-crimson transition-colors duration-200 rounded-2xl"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
      </div>
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const mainMenu = siteConfig.nav.mainMenu;

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-outline-variant bg-paper-white">
      <div className="max-w-8xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center group">
          <Image
            src="/espot_logo.webp"
            alt={siteConfig.shortName}
            width={180}
            height={64}
            className="h-14 md:h-16 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {mainMenu.map((item) => (
              <NavLink key={item.href + item.label} item={item} />
            ))}
          </ul>
          <Button href="/contact" variant="primary" size="sm">
            Book Consulting
          </Button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            className="p-2.5 border border-outline-variant rounded-full hover:bg-linen-bg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={18} className="text-on-surface" aria-hidden="true" />
            ) : (
              <Menu size={18} className="text-on-surface" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 top-16 bottom-0 bg-paper-white z-40 md:hidden"
          >
            <nav className="flex flex-col items-start justify-start h-full pt-4 px-6 overflow-y-auto">
              {mainMenu.map((item) => (
                <NavLink
                  key={item.href + item.label}
                  item={item}
                  isMobile
                  onMobileClose={() => setMobileOpen(false)}
                />
              ))}
              <div className="mt-6 w-full max-w-sm">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full text-xs md:text-sm font-medium transition-all bg-crimson text-white hover:bg-crimson-light h-9 md:h-10 px-4 md:px-4 w-full"
                >
                  Book Consulting
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
