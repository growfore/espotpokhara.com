"use client";

import { motion } from "framer-motion";
import Container from "@/components/global/Container";
import { Button } from "@/components/ui/Button";
import Heading from "@/components/shared/Heading";

export default function CTASection() {
  return (
    <section className="px-4 xl:px-10 pattern-bg--2 border-t border-dashed border-outline-variant">
      <Container className="py-16 md:py-28 border-x border-dashed">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-16">
          <div>
            <Heading tag="h2" size="xxxl" className="max-w-[40rem] text-balance leading-tight text-navy">
              Ready to Start Your Educational Journey?
            </Heading>
            <p className="mt-6 md:mt-8 text-body-md text-balance text-on-surface-variant max-w-xl">
              Take the first step towards your study abroad dream. Schedule a free
              consultation with our expert counselors today.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <Button href="/contact" variant="primary" size="lg">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
