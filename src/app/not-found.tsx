import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "404: Page Not Found",
  description: "The page you are looking for does not exist or has been moved. Let Espot Pokhara help you find your way.",
  robots: { index: false },
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper-white px-6">
      <div className="text-center max-w-lg">
        <Reveal direction="scale" duration={0.6}>
          <h1 className="text-[120px] md:text-[160px] font-headline-xl font-extrabold leading-none mb-4">
            <span className="text-crimson">404</span>
          </h1>
        </Reveal>
        <Reveal direction="up" delay={0.15}>
          <h2 className="font-headline-xl text-headline-lg text-on-surface mb-3">
            Page Not Found
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.25}>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
            The page you are looking for does not exist or has been moved.
            Let us help you find your way.
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.35}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-crimson text-paper-white px-8 py-3.5 font-body-lg text-body-lg font-medium hover:brightness-110 transition-all duration-200 rounded-full"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="border-2 border-navy text-navy px-8 py-3.5 font-body-lg text-body-lg font-medium hover:bg-navy hover:text-paper-white transition-all duration-200 rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
