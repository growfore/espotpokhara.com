"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface InfiniteSliderProps {
  children: ReactNode[];
  gap?: number;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 42,
  speed = 80,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const controls = useAnimationControls();
  const isHovered = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const firstItem = container.querySelector("[data-slider-item]");
    if (!firstItem) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    ro.observe(container);

    const measure = () => {
      setItemWidth(firstItem.getBoundingClientRect().width + gap);
    };
    measure();

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [gap]);

  useEffect(() => {
    if (!containerWidth || !itemWidth || itemWidth <= 0) return;

    const totalWidth = children.length * itemWidth;
    const duration = totalWidth / speed;

    controls.start({
      x: reverse ? [0, -totalWidth] : [-totalWidth, 0],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [containerWidth, itemWidth, children.length, speed, reverse, controls]);

  const handleHoverStart = () => {
    isHovered.current = true;
    controls.stop();
  };

  const handleHoverEnd = () => {
    isHovered.current = false;
    if (!containerRef.current) return;
    const totalWidth = children.length * itemWidth;
    const currentX = parseFloat(
      (containerRef.current.querySelector("[data-slider-track]") as HTMLElement)?.style?.transform?.replace("translateX(", "").replace("px)", "") || "0"
    );
    const duration = totalWidth / speed;

    controls.start({
      x: reverse ? [currentX, currentX - totalWidth] : [currentX, currentX + totalWidth],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <div ref={containerRef} className={`overflow-hidden ${className || ""}`}>
      <motion.div
        data-slider-track
        className="flex"
        style={{ gap }}
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {[...children, ...children].map((child, i) => (
          <div key={i} data-slider-item className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
