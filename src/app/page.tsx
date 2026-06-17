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
import { MapPin, Phone, Mail, Clock, CheckCircle, Users, Star, Building2, Globe, PlusIcon, type LucideIcon } from "lucide-react";
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

        <div className="grid grid-cols-2 border-x md:grid-cols-4 border-outline-variant">
          {siteConfig.stats.map((stat, i) => {
            const Icon = statIconMap[stat.icon] || CheckCircle;
            const isFirstRow = i < 4;
            const bg =
              i === 0 || i === 3
                ? "bg-paper-white"
                : i === 4
                  ? "bg-linen-bg"
                  : "bg-linen-bg";

            return (
              <div
                key={stat.label}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-3 px-4 py-10 md:py-16",
                  i % 2 === 0 && "border-r border-outline-variant",
                  isFirstRow && "border-b border-outline-variant",
                  i < 3 && "md:border-r md:border-outline-variant",
                  i === 4 && "md:col-span-2 md:col-start-2",
                  bg,
                )}
              >
                <Icon className="w-8 h-8 text-crimson" strokeWidth={1.5} />
                <StatsCounter value={stat.value} suffix={stat.suffix} label={stat.label} />

                {(i === 0 || i === 1 || i === 2) && (
                  <PlusIcon
                    className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-crimson/40"
                    strokeWidth={1}
                  />
                )}
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
                <div className="relative z-10 border border-outline-variant rounded-3xl overflow-hidden shadow-lg">
                  <div
                    className="h-[420px] bg-cover bg-center grayscale-hover"
                    style={{ backgroundImage: "url('/images/who-we-are.webp')" }}
                  />
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-6">
                Expert Immigration Services
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                Espot Pokhara Education and Visa Services is an emerging consultancy
                based in Pokhara, Nepal. We are dedicated to helping students
                achieve their dream of studying abroad with comprehensive
                guidance and support.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert guidance for Japan, Australia, Canada, and USA",
                  "Personalized counseling tailored to your academic profile",
                  "High visa success rate with meticulous documentation",
                  "Comprehensive support from application to arrival",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body-md text-on-surface-variant">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-crimson/10 text-crimson text-xs font-bold flex-shrink-0 mt-0.5">&bull;</span>
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
                    <p className="font-heading text-label-bold text-on-surface mb-1">Working Hours</p>
                    <p className="text-body-md text-on-surface-variant">{siteConfig.contact.workingHours}</p>
                    <p className="text-body-md text-crimson mt-1">{siteConfig.contact.saturday}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="border border-outline-variant rounded-3xl p-10 bg-paper-white shadow-sm">
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
                    className="w-full bg-crimson text-paper-white rounded-full px-8 py-3.5 font-heading text-label-bold shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="px-4 xl:px-10 bg-linen-bg">
        <Container className="py-16 md:py-28">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-heading tracking-tighter text-heading-xl text-navy mb-4">Class Schedule & Working Hours</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Reveal direction="left">
              <div className="border border-outline-variant rounded-3xl bg-paper-white p-8 shadow-sm">
                <h3 className="font-heading tracking-tighter text-heading-lg text-navy mb-6">Language Classes</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-outline-variant pb-3">
                    <span className="font-heading text-label-bold text-on-surface">MORNING</span>
                    <span className="text-body-md text-on-surface-variant">7AM - 8AM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-outline-variant pb-3">
                    <span className="font-heading text-label-bold text-on-surface">DAY</span>
                    <span className="text-body-md text-on-surface-variant">10AM - 11AM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-outline-variant pb-3">
                    <span className="font-heading text-label-bold text-on-surface">EVENING</span>
                    <span className="text-body-md text-on-surface-variant">5PM - 6PM</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="border border-outline-variant rounded-3xl bg-paper-white p-8 shadow-sm">
                <h3 className="font-heading tracking-tighter text-heading-lg text-navy mb-6">Working Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-outline-variant pb-3">
                    <span className="font-heading text-label-bold text-on-surface">SUN - FRI</span>
                    <span className="text-body-md text-on-surface-variant">10AM - 6PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3">
                    <span className="font-heading text-label-bold text-on-surface">SATURDAY</span>
                    <span className="text-body-md text-crimson font-bold">CLOSED</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
