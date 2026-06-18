"use client";

import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { createContext, useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];

type CarouselContextType = {
  api: CarouselApi;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
};

const CarouselContext = createContext<CarouselContextType | null>(null);

function Carousel({ children, className, setApi, opts }: {
  children: ReactNode;
  className?: string;
  setApi?: (api: CarouselApi) => void;
  opts?: Parameters<typeof useEmblaCarousel>[0];
}) {
  const [emblaRef, api] = useEmblaCarousel(opts);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((a: CarouselApi) => {
    if (!a) return;
    setCanScrollPrev(a.canScrollPrev());
    setCanScrollNext(a.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    setApi?.(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect(api);
  }, [api, onSelect, setApi]);

  return (
    <CarouselContext.Provider value={{ api, canScrollPrev, canScrollNext, scrollPrev: () => api?.scrollPrev(), scrollNext: () => api?.scrollNext() }}>
      <div ref={emblaRef} className={cn("overflow-hidden", className)}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex", className)}>{children}</div>;
}

function CarouselItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}>{children}</div>;
}

export { Carousel, CarouselContent, CarouselItem, type CarouselApi };
