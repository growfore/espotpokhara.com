"use client";

import { motion } from "framer-motion";
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

type CardStyle = "paper" | "navy" | "crimson" | "paper-row";

const cardStyles: CardStyle[] = [
  "paper",
  "navy",
  "crimson",
  "paper-row",
  "navy",
  "paper",
];

const gridSpans = ["lg:col-span-2", "", "", "lg:col-span-2", "", ""];

export default function ServicesSection() {
  const services = siteConfig.services;

  return (
    <section className="px-4 xl:px-10">
      <Container>
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-4">
              Our Services
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Comprehensive study abroad services tailored to your needs
            </p>
          </div>
        </Reveal>

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
                      "rounded-[40px] bg-paper-white border border-outline-variant p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-center shadow-sm hover:shadow-xl transition-all duration-300 h-full",
                      gridSpans[i]
                    )}
                  >
                    <div className="flex-1">
                      <div className="w-14 h-14 flex items-center justify-center bg-crimson text-paper-white rounded-2xl mb-5">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-heading tracking-tighter text-heading-lg text-on-surface mb-3">
                        {service.title}
                      </h3>
                      <p className="text-body-md text-on-surface-variant mb-5">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-label-bold text-crimson">
                        Learn More <span className="text-lg leading-none">&rarr;</span>
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
                    style === "paper" && "bg-paper-white border border-outline-variant shadow-sm hover:shadow-xl",
                    style === "navy" && "bg-navy text-paper-white hover:brightness-110",
                    style === "crimson" && "bg-crimson text-paper-white hover:brightness-110",
                    gridSpans[i]
                  )}
                >
                  <div>
                    <div className={cn(
                      "w-14 h-14 flex items-center justify-center rounded-2xl mb-5",
                      isDark ? "bg-paper-white/15 text-paper-white" : "bg-crimson text-paper-white"
                    )}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className={cn("font-heading tracking-tighter text-heading-lg mb-3", isDark ? "text-paper-white" : "text-on-surface")}>
                      {service.title}
                    </h3>
                    <p className={cn(
                      "text-body-md",
                      isDark ? "text-paper-white/80" : "text-on-surface-variant"
                    )}>
                      {service.description}
                    </p>
                  </div>
                  {isDark && (
                    <div className="mt-6 flex gap-2">
                      <span className="bg-paper-white/15 text-paper-white px-3 py-1 rounded-full text-label-sm">
                        {style === "navy" ? "Expert Support" : "Easy Process"}
                      </span>
                    </div>
                  )}
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
