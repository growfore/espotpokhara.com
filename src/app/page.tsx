"use client";

import { siteConfig } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import Destinations from "@/components/Destinations";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ScrollReelTestimonials from "@/components/ScrollReelTestimonials";
import Container from "@/components/global/Container";
import StatsCounter from "@/components/StatsCounter";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, Users, Star, Building2, Globe, Check, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const statIconMap: Record<string, LucideIcon> = {
  check: CheckCircle,
  users: Users,
  star: Star,
  building: Building2,
  globe: Globe,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Destinations />

      <section className="relative mx-auto max-w-5xl py-12 md:border-x border-outline-variant">
        <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-outline-variant" />

        <div className="grid grid-cols-2 sm:grid-cols-4 border-outline-variant">
          {siteConfig.stats.map((stat, i) => {
            const Icon = statIconMap[stat.icon] || CheckCircle;

            return (
              <div
                key={stat.label}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-2 py-8 md:py-10 border-r border-outline-variant",
                  i === 1 && "border-r-0 sm:border-r",
                  i === 3 && "border-r-0",
                )}
              >
                <Icon className="w-6 h-6 md:w-7 md:h-7 text-crimson" strokeWidth={1.5} />
                <StatsCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            );
          })}
        </div>

        <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-outline-variant" />
      </section>

      <section className="px-4 xl:px-10 bg-linen-bg">
        <Container className="py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-outline-variant rounded-3xl -z-0" />
                <div className="relative z-10 border border-outline-variant rounded-3xl overflow-hidden">
                  <div
                    className="h-[420px] bg-cover bg-center grayscale-hover"
                    style={{ backgroundImage: "url('/images/who-we-are.webp')" }}
                  />
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <span className="inline-flex items-center rounded-full border border-crimson/15 bg-crimson/5 px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-crimson font-mono mb-3">
                About Us
              </span>
              <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-6">
                Expert Immigration &amp; Visa Services
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                At Espot Pokhara Education and Visa Services, we specialize in helping you with all your immigration needs. Our experienced team provides professional assistance and guides you through the entire process, making it easy and stress-free. We offer expert guidance on visa applications, documentation, and interview preparation.
              </p>
              <ul className="space-y-4">
                {[
                  "Transform dreams of studying abroad into reality",
                  "Comprehensive visa support and travel arrangements",
                  "Expert guidance on scholarship and financial aid",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body-md text-on-surface-variant">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-crimson/10 text-crimson flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <ServicesSection />

      <section className="px-4 xl:px-10 bg-linen-bg">
        <Container className="py-16 md:py-28">
          <Reveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full border border-crimson/15 bg-crimson/5 px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-crimson font-mono mb-3">
                Testimonials
              </span>
              <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-4">
                What Our Students Say
              </h2>
            </div>
          </Reveal>
          <ScrollReelTestimonials
            testimonials={siteConfig.testimonials.map((t) => ({
              quote: t.quote,
              author: `${t.name} — ${t.role}`,
              image: t.image,
            }))}
            className="mx-auto"
          />
        </Container>
      </section>

      <section className="px-4 xl:px-10">
        <Container className="py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-16">
            <Reveal direction="left">
              <span className="inline-flex items-center rounded-full border border-crimson/15 bg-crimson/5 px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-crimson font-mono mb-3">
                Contact
              </span>
              <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-8">
                Get In Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">Address</p>
                    <p className="text-body-md text-on-surface-variant">{siteConfig.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">Phone</p>
                    <p className="text-body-md text-on-surface-variant">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">Email</p>
                    <p className="text-body-md text-on-surface-variant">{siteConfig.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">Language Classes</p>
                    <p className="text-body-md text-on-surface-variant">Morning: {siteConfig.languageSchedule.morning}</p>
                    <p className="text-body-md text-on-surface-variant">Day: {siteConfig.languageSchedule.day}</p>
                    <p className="text-body-md text-on-surface-variant">Evening: {siteConfig.languageSchedule.evening}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">Working Hours</p>
                    <p className="text-body-md text-on-surface-variant">{siteConfig.contact.workingHours}</p>
                    <p className="text-body-md text-crimson mt-1">{siteConfig.contact.saturday}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="border border-outline-variant rounded-3xl p-6 md:p-10 bg-paper-white">
                <h3 className="font-heading tracking-tighter text-heading-lg text-on-surface mb-8">Send Us a Message</h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input type="text" placeholder="Your Name" className="input-modern rounded-lg" required />
                    <input type="email" placeholder="Your Email" className="input-modern rounded-lg" required />
                  </div>
                  <input type="tel" placeholder="Phone Number" className="input-modern rounded-lg" />
                  <select className="input-modern rounded-lg" defaultValue="">
                    <option value="" disabled>Interested Country</option>
                    <option value="USA">USA</option>
                    <option value="Japan">Japan</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Other">Other</option>
                  </select>
                  <textarea placeholder="Your Message" rows={4} className="input-modern rounded-lg resize-none" required />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-crimson text-paper-white rounded-full px-8 py-3.5 font-heading text-label-bold"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
