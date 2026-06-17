"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Container from "@/components/global/Container";
import { siteConfig } from "@/lib/site-config";

export default function Destinations() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    update();
    carouselApi.on("select", update);
    return () => { carouselApi.off("select", update); };
  }, [carouselApi]);

  return (
    <section className="py-20 px-4 xl:px-10 bg-linen-bg">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="font-heading tracking-tighter text-heading-xl text-navy">
              Top Study Destinations
            </h2>
            <p className="max-w-lg text-body-lg text-on-surface-variant">
              Explore world-class education opportunities in these top study destinations
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="flex items-center justify-center size-10 rounded-full border border-outline-variant text-on-surface hover:bg-crimson hover:text-paper-white hover:border-crimson transition-all disabled:opacity-30 disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="flex items-center justify-center size-10 rounded-full border border-outline-variant text-on-surface hover:bg-crimson hover:text-paper-white hover:border-crimson transition-all disabled:opacity-30 disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </Container>

      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
        >
          <CarouselContent className="ml-0 xl:ml-[max(2rem,calc(50vw-640px))] xl:mr-[max(0rem,calc(50vw-640px))]">
            {siteConfig.destinations.map((dest) => (
              <CarouselItem
                key={dest.country}
                className="max-w-[320px] pl-5 lg:max-w-[360px]"
              >
                <a href={dest.href} className="group block rounded-xl">
                  <div className="relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <div
                      className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${dest.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8">
                      <h3 className="mb-2 text-xl font-semibold text-paper-white md:mb-3">
                        {dest.country}
                      </h3>
                      <p className="mb-8 line-clamp-2 text-body-md text-paper-white/80 md:mb-12 lg:mb-9">
                        {dest.description}
                      </p>
                      <span className="flex items-center text-sm text-paper-white/90">
                        Read more{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {siteConfig.destinations.map((dest, i) => (
            <button
              key={dest.country}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === i ? "bg-crimson" : "bg-crimson/20"
              }`}
              onClick={() => carouselApi?.scrollTo(i)}
              aria-label={`Go to ${dest.country}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
