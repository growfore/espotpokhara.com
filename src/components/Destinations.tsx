"use client";

import Link from "next/link";
import Container from "@/components/global/Container";
import Heading from "@/components/shared/Heading";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Destinations() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.destinations.map((dest, i) => (
            <Reveal key={dest.country} direction="up" delay={i * 0.08}>
              <Link href={dest.href} className="group block perspective-[1000px]">
                <div className="relative [transform-style:preserve-3d] transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)] h-[380px]">
                  {/* Front */}
                  <div className="absolute inset-0 [backface-visibility:hidden] border border-dashed border-outline-variant rounded-3xl overflow-hidden bg-paper-white">
                    <div
                      className="w-full h-full bg-cover bg-center grayscale-hover"
                      style={{ backgroundImage: `url(${dest.image})` }}
                    />
                    <div className="absolute inset-0 bg-navy/30" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block bg-crimson text-paper-white px-5 py-2 font-heading text-label-bold rounded-full">
                        {dest.country}
                      </span>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-dashed border-outline-variant rounded-3xl bg-paper-white p-8 flex flex-col justify-center">
                    <span className="text-label-bold text-crimson tracking-wider block mb-2">Study in</span>
                    <Heading tag="h3" size="lg" className="text-navy mb-4">
                      {dest.country}
                    </Heading>
                    <p className="text-body-md text-on-surface-variant mb-6">
                      {dest.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {dest.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-label-sm px-3 py-1.5 border border-dashed border-outline-variant text-on-surface-variant rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-label-bold text-crimson hover:underline">
                      Explore Programs &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
