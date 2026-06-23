"use client";

import { Globe } from "lucide-react";
import Container from "@/components/global/Container";
import { Button } from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="px-4 xl:px-10">
      <Container className="py-12 md:py-20">
        <div className="relative overflow-hidden rounded-[32px] md:rounded-[60px] bg-linen-bg px-6 md:px-8 py-12 md:py-20 lg:px-16 flex flex-col items-center text-center">
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-heading tracking-tighter text-heading-hero text-navy mb-6">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
              Take the first step towards your study abroad dream. Schedule a free
              consultation with our expert counselors today.
            </p>
            <Button href="/contact-us" variant="primary" size="lg">
              Get Free Consultation
            </Button>
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-[0.06] pointer-events-none">
            <Globe size={300} className="text-navy" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
