"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import Container from "@/components/global/Container";
import { Button } from "@/components/ui/Button";
import InfiniteGrid from "@/components/InfiniteGrid";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-paper-white">
      <InfiniteGrid />
      <img
        src="https://www.idp.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2F8bbwomjfix8m%2F2KGayO7y8ZmUB3CUSvwg9U%2Fc2a6ff713890862c88c04f9a8fe1c2a9%2FEnquiry_form_banner_nepal.png%3Ffit%3Dfill%26w%3D500%26h%3D1024%26q%3D80%26fm%3Dwebp&w=640&q=75"
        alt=""
        className="absolute right-24 top-0  w-auto object-contain pointer-events-none z-[5]"
      />
      <div className="relative z-10 w-full py-8 md:py-12">
        <Container>
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-label-sm text-label-sm text-crimson uppercase tracking-widest mb-4 block"
            >
              {siteConfig.shortName}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-heading tracking-tighter text-4xl md:text-6xl font-bold text-navy mb-6"
            >
              Turn Your{" "}
              <span className="text-crimson paint-stroke-underline">
                Educational Dreams
              </span>{" "}
              Into Reality
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl"
            >
              Expert guidance for studying abroad in USA, Japan, Australia, and
              Canada. From university selection to visa approval, we are with
              you every step of the way.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/contact" variant="primary" size="lg">
                Book Consulting
              </Button>
              <Button
                href="/about"
                variant="outline"
                size="lg"
                className="text-navy border-navy hover:bg-navy hover:text-paper-white"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </Container>
      </div>
      <div className="absolute -top-10 right-[20%] w-40 h-40 bg-crimson/20 rounded-full blur-3xl z-[4]" />
      <div className="absolute -bottom-10 right-[10%] w-60 h-60 bg-navy/10 rounded-full blur-3xl z-[4]" />
      <div className="absolute top-1/2 -translate-y-1/2 right-4 p-4 bg-paper-white/80 backdrop-blur shadow-xl rounded-2xl border border-outline-variant hidden md:block z-[6]">
        <div className="flex items-center gap-3">
          <span
            className="material-symbols-outlined text-crimson"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            stars
          </span>
          <div>
            <p className="font-headline-lg text-[14px]">100% Success Rate</p>
            <p className="font-label-sm text-[10px] text-on-surface-variant">
              Japan Student Visas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
