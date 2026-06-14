"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import Container from "@/components/global/Container";
import { Button } from "@/components/ui/Button";

const HeroBackground = dynamic(() => import("@/components/HeroBackground"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 w-full">
        <Container>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="font-heading text-display-lg text-navy mb-6 leading-tight">
                {siteConfig.tagline}
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-body-lg text-navy/70 mb-12 max-w-xl"
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
    </section>
  );
}
