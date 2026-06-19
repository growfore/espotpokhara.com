"use client";

import {
  Home,
  Compass,
  Award,
  Target,
  FileText,
  Book,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/global/Container";
import { siteConfig } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  compass: Compass,
  award: Award,
  target: Target,
  "file-text": FileText,
  book: Book,
};

export default function ServicesSection() {
  const services = siteConfig.services;

  return (
    <section className="px-4 xl:px-10 bg-linen-bg">
      <Container>
        <div className="mx-auto max-w-5xl space-y-8 md:space-y-16">
          <div className="mx-auto max-w-xl space-y-6 text-center">
            <span className="inline-flex items-center rounded-full border border-crimson/15 bg-crimson/5 px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-crimson font-mono">
              Services
            </span>
            <h2 className="font-heading tracking-tighter text-heading-xl text-navy">
              Our Inclusive Student Support
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Beyond admissions, we ensure your journey is comfortable, safe,
              and successful with end-to-end relocation services.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Home;
              const span = [
                "lg:col-span-2", // Visa Guidance
                "lg:col-span-1", // Pre-Departure
                "lg:col-span-1", // Accommodation
                "lg:col-span-2", // University Matching
                "lg:col-span-2", // Scholarships
                "lg:col-span-1", // Language Classes
              ][i];
              return (
                <div
                  key={service.title}
                  className={`${span} space-y-4 rounded-xl border border-outline-variant bg-white p-8 shadow-sm`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="size-6 text-crimson" aria-hidden="true" />
                    <h3 className="font-heading text-lg font-semibold text-navy">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
