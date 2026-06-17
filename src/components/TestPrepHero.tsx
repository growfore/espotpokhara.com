"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function TestPrepHero() {
  const tp = siteConfig.testPreparation;
  return (
    <section className="relative pt-24 md:pt-28 pb-28 md:pb-36 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${tp.hero})` }} />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="relative z-10 max-w-8xl mx-auto px-4 xl:px-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-headline-xl text-headline-xl text-paper-white mb-4"
        >
          {tp.title}
        </motion.h1>
      </div>
    </section>
  );
}
