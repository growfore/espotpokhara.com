"use client";

import * as React from "react";
import Image from "next/image";

export interface ScrollReelTestimonial {
  quote: string;
  author: string;
  image: string;
  alt?: string;
}

export interface ScrollReelTestimonialsProps {
  testimonials: ScrollReelTestimonial[];
  charStaggerMs?: number;
  className?: string;
}

const EXIT_MS = 80;
const SLIDE_MS = 800;

const QUOTE_CLASSES =
  "m-0 text-lg font-medium leading-[1.3] tracking-[-0.02em] text-on-surface sm:text-[22px]";
const AUTHOR_CLASSES =
  "m-0 text-sm font-medium leading-[1.3] text-on-surface-variant";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

<style>{`
  @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
  @keyframes charIn { 0% { opacity: 0; transform: translateY(4px); } 100% { opacity: 1; transform: translateY(0); } }
  @keyframes slideUpOut { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-10px); } }
  .scroll-reel-char { display: inline-block; animation: charIn 60ms ease-out both; }
  .scroll-reel-exit { animation: slideUpOut 240ms ease-in both; }
  .image-fade-in { animation: fadeIn 400ms ease-out; }
`}</style>

function Featured({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-linen-bg image-fade-in">
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        className="object-cover"
        sizes="380px"
      />
    </div>
  );
}

function Chars({
  text,
  startIndex,
  staggerMs,
}: {
  text: string;
  startIndex: number;
  staggerMs: number;
}) {
  let idx = startIndex;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => {
        const wordSpan = (
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, ci) => {
              const delay = idx * staggerMs;
              idx++;
              return (
                <span
                  key={ci}
                  className="scroll-reel-char"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
        );
        if (wi < words.length - 1) idx++;
        return (
          <React.Fragment key={wi}>
            {wordSpan}
            {wi < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

export function ScrollReelTestimonials({
  testimonials,
  charStaggerMs = 6,
  className,
}: ScrollReelTestimonialsProps) {
  const [index, setIndex] = React.useState(0);
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [exiting, setExiting] = React.useState(false);
  const animating = React.useRef(false);
  const timeouts = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  const count = testimonials.length;

  const paginate = React.useCallback(
    (dir: 1 | -1) => {
      if (animating.current) return;
      const next = (index + dir + count) % count;
      animating.current = true;

      setIndex(next);
      setExiting(true);

      timeouts.current.push(
        setTimeout(() => {
          setDisplayIndex(next);
          setExiting(false);
        }, EXIT_MS),
      );
      timeouts.current.push(
        setTimeout(() => {
          animating.current = false;
        }, SLIDE_MS),
      );
    },
    [index, count],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      paginate(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      paginate(-1);
    }
  };

  const current = testimonials[displayIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={cn(
        "relative flex w-full max-w-[1060px] flex-col items-stretch gap-2.5 overflow-hidden rounded-xl  bg-linen-bg outline-none focus-visible:ring-2 focus-visible:ring-crimson md:min-h-[320px] md:flex-row",
        className,
      )}
    >
      <div className="relative h-56 w-full shrink-0 self-stretch overflow-hidden md:h-auto md:w-[380px]">
        <Featured key={displayIndex} src={current.image} alt={current.alt} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch px-5 py-7 md:py-10">
        <div className="flex flex-col gap-[9px]">
          <svg
            className="block h-12 w-12 text-on-surface-variant/40"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.58 17.32C3.55 16.23 3 15 3 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18zm10 0C13.55 16.23 13 15 13 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18z" />
          </svg>

          <div
            className="relative w-full max-w-[390px] overflow-hidden"
            aria-live="polite"
          >
            <div
              aria-hidden="true"
              className="invisible flex min-h-[140px] flex-col gap-[19px]"
            >
              <p className={QUOTE_CLASSES}>{current.quote}</p>
              <p className={AUTHOR_CLASSES}>{current.author}</p>
            </div>
            <div
              key={displayIndex}
              className={cn(
                "absolute inset-x-0 top-0 flex flex-col gap-[19px] will-change-[transform,opacity]",
                exiting && "scroll-reel-exit",
              )}
            >
              <p className={QUOTE_CLASSES}>
                <Chars
                  text={current.quote}
                  startIndex={0}
                  staggerMs={charStaggerMs}
                />
              </p>
              <p className={AUTHOR_CLASSES}>
                <Chars
                  text={current.author}
                  startIndex={current.quote.length + 6}
                  staggerMs={charStaggerMs}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-on-surface/15 bg-transparent p-0 text-on-surface transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:enabled:scale-[1.08] active:enabled:scale-[0.94] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
          >
            <svg
              className="h-5 w-5 opacity-70"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7.5 2.5 3.5 6l4 3.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-on-surface/15 bg-transparent p-0 text-on-surface transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:enabled:scale-[1.08] active:enabled:scale-[0.94] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
          >
            <svg
              className="h-5 w-5 opacity-70"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m4.5 2.5 4 3.5-4 3.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScrollReelTestimonials;
