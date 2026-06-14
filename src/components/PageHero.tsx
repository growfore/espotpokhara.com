"use client";

import { motion } from "framer-motion";
import Container from "@/components/global/Container";

export default function PageHero({
  title,
  subtitle,
  bgImage,
}: {
  title: string;
  subtitle?: string;
  bgImage?: string;
}) {
  return (
    <section className="relative pt-24 md:pt-28 pb-28 md:pb-36 overflow-hidden">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-navy/60" />
      <div className="relative z-10 w-full">
        <Container>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-heading text-display-lg text-paper-white mb-4"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-body-lg text-paper-white/80 max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}
