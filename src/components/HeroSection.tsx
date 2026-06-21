"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import Container from "@/components/global/Container";
import { Button } from "@/components/ui/Button";
import InfiniteGrid from "@/components/InfiniteGrid";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-paper-white">
      <div className="block md:hidden absolute inset-0">
        <InfiniteGrid />
      </div>
      <Image
        src="/hero-image.png"
        alt=""
        fill
        className="hidden md:block object-cover justify-center-safe"
        sizes="100vw"
        priority
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r  from-paper-white via-paper-white/10 to-transparent" />
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
              {siteConfig.shortName}: Your key to global success
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
    </section>
  );
}
