"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type Props = ComponentProps<"div">;

export function MotionHoverImage({ children, className, style }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
