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
    <section className="relative pt-20 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-linen-bg">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 w-full">
        <Container>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-headline-xl font-bold text-[24px] md:text-[48px] text-paper-white mb-4"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="font-body-lg text-body-lg text-paper-white/80 max-w-2xl mx-auto"
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
