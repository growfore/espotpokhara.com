"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export function MotionDiv({ children }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
