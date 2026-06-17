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
import Heading from "@/components/shared/Heading";
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

const bentoLayout = [
  { span: "2", row: 0 },
  { span: "1", row: 0 },
  { span: "1", row: 1 },
  { span: "2", row: 1 },
  { span: "1", row: 2 },
  { span: "1", row: 2 },
];

export default function ServicesSection() {
  const services = siteConfig.services;

  return (
    <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
      <Container className="py-16 md:py-28 border-x border-dashed">
        <Reveal>
          <div className="text-center mb-16">
            <div className="academic-rule mx-auto mb-4" />
            <span className="text-label-bold text-crimson tracking-wider block">
              What We Do
            </span>
            <Heading tag="h2" size="xxl" className="text-navy mb-4">
              Our Services
            </Heading>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Comprehensive study abroad services tailored to your needs
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Home;
            const isFeatured = bentoLayout[i]?.span === "2";
            const delay = i * 0.08;

            return (
              <Reveal key={service.title} direction="up" delay={delay}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className={cn(
                    "border border-dashed border-outline-variant rounded-3xl bg-paper-white p-8 h-full group cursor-default",
                    isFeatured && "lg:col-span-2"
                  )}
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-crimson text-paper-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <Heading tag="h3" size="lg" className="text-on-surface mb-4">
                    {service.title}
                  </Heading>
                  <p className="text-body-md text-on-surface-variant">
                    {service.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
