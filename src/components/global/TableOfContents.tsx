"use client";

import { useEffect, useState, useCallback } from "react";

interface Heading {
  id: string;
  text: string;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const container = document.querySelector(".docs-content");
    if (!container) return;

    const els = container.querySelectorAll("h2");
    const items: Heading[] = [];
    els.forEach((el) => {
      const id = el.id || (el.textContent
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") ?? "");
      el.id = id;
      items.push({ id, text: el.textContent || "" });
    });
    setHeadings(items);

    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    items.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  if (headings.length < 2) return null;

  return (
    <nav className="hidden xl:block w-56 flex-shrink-0">
      <div className="sticky top-20 overflow-y-auto max-h-[calc(100vh-6rem)]">
        <p className="text-xs font-bold text-outline uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-xs">toc</span>
          On this page
        </p>
        <ul className="space-y-1">
          {headings.map((h) => (
            <li key={h.id}>
              <button
                onClick={() => handleClick(h.id)}
                className={`block text-left text-sm w-full py-1 transition-colors ${
                  activeId === h.id
                    ? "text-crimson font-medium"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {h.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
