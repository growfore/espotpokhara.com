"use client";

import { motion } from "framer-motion";
import {
  Home,
  Compass,
  Award,
  Target,
  FileText,
  Book,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/global/Container";
import { Button } from "@/components/ui/Button";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

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

  const cardStyles = ["paper", "navy", "crimson", "paper-row", "navy", "paper"];
  const gridSpans = ["lg:col-span-2", "", "", "lg:col-span-2", "", ""];

  return (
    <section className="px-4 xl:px-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
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
            const style = cardStyles[i];
            const delay = i * 0.08;

            if (style === "paper-row") {
              return (
                <Reveal key={service.title} direction="up" delay={delay}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={cn(
                      "rounded-[40px] bg-paper-white border border-outline-variant p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-center shadow-sm hover:shadow-xl hover:border-crimson/50 transition-all duration-300 h-full",
                      gridSpans[i]
                    )}
                  >
                    <div className="flex-1">
                      <Icon className="w-12 h-12 text-crimson mb-5" />
                      <h3 className="font-heading tracking-tighter text-[28px] leading-tight text-on-surface mb-4">
                        {service.title}
                      </h3>
                      <p className="text-body-md text-on-surface-variant mb-6">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-label-sm text-crimson">
                        Learn More <ChevronRight size={16} />
                      </span>
                    </div>
                    <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden bg-linen-bg flex items-center justify-center">
                      <Icon className="w-16 h-16 text-crimson/30" />
                    </div>
                  </motion.div>
                </Reveal>
              );
            }

            const isDark = style === "navy" || style === "crimson";

            return (
              <Reveal key={service.title} direction="up" delay={delay}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className={cn(
                    "rounded-[40px] p-8 lg:p-10 flex flex-col justify-between h-full group transition-all duration-300",
                    style === "paper" && "bg-linen-bg border border-outline-variant shadow-sm hover:shadow-xl hover:border-crimson/50",
                    style === "navy" && "bg-navy text-paper-white hover:brightness-110",
                    style === "crimson" && "bg-crimson text-paper-white hover:brightness-110",
                    gridSpans[i]
                  )}
                >
                  <div>
                    <Icon className={cn("w-12 h-12 mb-6", isDark ? "text-crimson" : "text-crimson")} />
                    <h3 className={cn(
                      "font-heading tracking-tighter mb-4 leading-tight",
                      gridSpans[i] ? "text-[32px]" : "text-[28px]",
                      isDark ? "text-paper-white" : "text-on-surface"
                    )}>
                      {service.title}
                    </h3>
                    <p className={cn(
                      "text-body-md",
                      isDark ? "text-paper-white/80" : "text-on-surface-variant"
                    )}>
                      {service.description}
                    </p>
                  </div>
                  {style === "paper" && (
                    <div className="flex gap-3 mt-8">
                      <span className="bg-crimson/10 text-crimson px-4 py-1.5 rounded-full text-label-sm">
                        Expert Support
                      </span>
                    </div>
                  )}
                  {isDark && (
                    <div className="flex gap-3 mt-6">
                      <span className="bg-paper-white/15 text-paper-white px-4 py-1.5 rounded-full text-label-sm">
                        {style === "navy" ? "Safe & Reliable" : "Easy Process"}
                      </span>
                    </div>
                  )}
                </motion.div>
              </Reveal>
            );
          })}

          {/* Fill empty slot in last row */}
          <Reveal direction="up" delay={0.48}>
            <div className="rounded-[40px] p-8 lg:p-10 flex flex-col items-center justify-center text-center h-full bg-linen-bg border border-outline-variant">
              <p className="font-heading text-heading-lg text-on-surface-variant mb-4">
                More Services
              </p>
              <p className="text-body-md text-on-surface-variant mb-6">
                View our full range of student support services.
              </p>
              <Button href="/services" variant="outline" size="sm">
                Explore All
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
