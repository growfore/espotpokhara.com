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

          <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-y sm:divide-x sm:divide-y-0 border border-outline-variant *:p-6 md:*:p-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Home;
              return (
                <div key={service.title} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon className="size-4 text-crimson" />
                    <h3 className="font-heading text-sm font-semibold text-navy">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
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
