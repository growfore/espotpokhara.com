"use client";

import { useState, useEffect, useCallback } from "react";

function getInitial(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("theme");
  if (stored === "dark") return true;
  if (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches) return true;
  return false;
}

export function useTheme() {
  const [dark, _setDark] = useState(getInitial);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const toggle = useCallback(() => {
    _setDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  return { dark, toggle, mounted: true };
}
