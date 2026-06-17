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
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "./FeatureCard";
import Reveal from "./Reveal";
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-crimson/15 bg-crimson/5 px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-crimson mb-3">
              Services
            </span>
            <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-4">
              Our Inclusive Student Support
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Beyond admissions, we ensure your journey is comfortable, safe,
              and successful with end-to-end relocation services.
            </p>
          </div>
          <Button href="/services" variant="primary" size="lg">
            All Services
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Home;

            return (
              <Reveal key={service.title} direction="up" delay={i * 0.08}>
                <FeatureCard
                  feature={{
                    title: service.title,
                    icon: Icon,
                    description: service.description,
                  }}
                />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
