"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/global/Container";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Destinations() {
  return (
    <section className="px-4 xl:px-10 bg-linen-bg">
      <Container>
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-4">
              Top Study Destinations
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Explore world-class education opportunities in these top study destinations
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.destinations.map((dest, i) => (
            <Reveal key={dest.country} direction="up" delay={i * 0.08}>
              <Link
                href={dest.href}
                className="group block bg-paper-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-outline-variant"
              >
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${dest.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-heading tracking-tighter text-heading-lg text-paper-white m-0">
                      {dest.country}
                    </h3>
                  </div>
                </div>
                <p className="text-body-md text-on-surface-variant mb-6 line-clamp-2">
                  {dest.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {dest.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-2 text-label-sm text-on-surface-variant">
                      <CheckCircle2 size={16} className="text-on-surface-variant" />
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 font-heading text-[16px] text-crimson group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={18} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
