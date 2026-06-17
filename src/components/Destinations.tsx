"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/global/Container";
import Heading from "@/components/shared/Heading";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Destinations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
      <Container className="py-16 md:py-28 border-x border-dashed">
        <Reveal>
          <div className="text-center mb-16">
            <div className="academic-rule mx-auto mb-4" />
            <span className="text-label-bold text-crimson tracking-wider block">Destinations</span>
            <Heading tag="h2" size="xxl" className="text-navy mb-4">
              Top Study Destinations
            </Heading>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Explore world-class education opportunities in these top study destinations
            </p>
          </div>
        </Reveal>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-paper-white rounded-full shadow-md flex items-center justify-center hover:bg-crimson hover:text-paper-white transition-all duration-200 opacity-0 group-hover:opacity-100 border border-dashed border-outline-variant"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-paper-white rounded-full shadow-md flex items-center justify-center hover:bg-crimson hover:text-paper-white transition-all duration-200 opacity-0 group-hover:opacity-100 border border-dashed border-outline-variant"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="destination-scroll flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
          >
            {siteConfig.destinations.map((dest, i) => (
              <Reveal key={dest.country} direction="up" delay={i * 0.08}>
                <div className="snap-start flex-shrink-0 w-[320px] cursor-pointer">
                  <Link href={dest.href}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="border border-dashed border-outline-variant rounded-3xl overflow-hidden bg-paper-white"
                    >
                      <div className="relative h-56 overflow-hidden m-3 rounded-2xl">
                        <div
                          className="w-full h-full bg-cover bg-center grayscale-hover"
                          style={{ backgroundImage: `url(${dest.image})` }}
                        />
                        <div className="absolute inset-0 bg-navy/20 transition-all duration-500" />
                        <div className="absolute top-4 left-4 bg-crimson text-white px-4 py-1.5 font-heading text-label-bold rounded-full">
                          {dest.country}
                        </div>
                      </div>
                      <div className="px-6 pb-6">
                        <p className="text-body-md text-on-surface-variant mb-4 line-clamp-2">
                          {dest.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {dest.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-label-sm px-3 py-1.5 border border-dashed border-outline-variant text-on-surface-variant rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
