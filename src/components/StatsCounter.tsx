"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatsCounter({
  value,
  suffix = "",
  label,
  duration = 2,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const totalMs = duration * 1000;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / totalMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center relative"
    >
      <div className="relative inline-block">
        <div className="counter-value text-[2rem] md:text-[2.5rem] text-crimson font-black leading-none">
          {count}{suffix}
        </div>
      </div>
      <div className="text-[0.65rem] md:text-[0.7rem] text-on-surface-variant uppercase tracking-[0.15em] font-semibold">
        {label}
      </div>
    </motion.div>
  );
}
