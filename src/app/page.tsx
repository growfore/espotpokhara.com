"use client";

import { siteConfig } from "@/lib/site-config";
import Reveal from "@/components/Reveal";
import StaggerContainer from "@/components/StaggerContainer";
import StatsCounter from "@/components/StatsCounter";
import Destinations from "@/components/Destinations";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import Container from "@/components/global/Container";
import Heading from "@/components/shared/Heading";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Plus } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.stats.map((stat) => (
              <StatsCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="px-4 xl:px-10">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-dashed border-outline-variant rounded-3xl -z-0" />
                <div className="relative z-10 border border-dashed border-outline-variant rounded-3xl overflow-hidden">
                  <div
                    className="h-[420px] bg-cover bg-center grayscale-hover"
                    style={{ backgroundImage: "url('/images/who-we-are.webp')" }}
                  />
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="academic-rule mb-4" />
              <span className="text-label-bold text-crimson tracking-wider block">About Us</span>
              <Heading tag="h2" size="xxl" className="text-navy mb-6">
                Expert Immigration Services
              </Heading>
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

      <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <Reveal>
            <div className="text-center mb-16">
              <div className="academic-rule mx-auto mb-4" />
              <span className="text-label-bold text-crimson tracking-wider block">What We Do</span>
              <Heading tag="h2" size="xxl" className="text-navy mb-4">
                Our Services
              </Heading>
              <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Comprehensive study abroad services tailored to your needs
              </p>
            </div>
          </Reveal>

          <StaggerContainer staggerDelay={0.06}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.services.map((service, i) => (
                <Reveal key={service.title} direction="up" delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="border border-dashed border-outline-variant rounded-3xl bg-paper-white p-8 h-full group cursor-default"
                  >
                    <div className="w-14 h-14 flex items-center justify-center bg-crimson text-paper-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Plus className="w-7 h-7" />
                    </div>
                    <Heading tag="h3" size="lg" className="text-on-surface mb-4">
                      {service.title}
                    </Heading>
                    <p className="text-body-md text-on-surface-variant">
                      {service.description}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </StaggerContainer>
        </Container>
      </section>

      <Destinations />

      <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-dashed border-outline-variant rounded-3xl -z-0" />
                <div className="relative z-10 border border-dashed border-outline-variant rounded-3xl overflow-hidden">
                  <div
                    className="h-[380px] bg-cover bg-center grayscale-hover"
                    style={{ backgroundImage: "url('/images/testimonials/review-img.webp')" }}
                  />
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="academic-rule mb-4" />
              <span className="text-label-bold text-crimson tracking-wider block">Testimonials</span>
              <Heading tag="h2" size="xxl" className="text-navy mb-6">
                What Our Students Say
              </Heading>
              <blockquote className="text-body-lg text-on-surface-variant italic mb-8 border-l-4 border-crimson pl-6">
                &ldquo;{siteConfig.testimonials[0].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-full bg-cover bg-center border-2 border-crimson/30" style={{ backgroundImage: "url('/images/testimonials/review-img.webp')" }} />
                <div>
                  <p className="font-heading text-headline-sm text-on-surface">
                    {siteConfig.testimonials[0].name}
                  </p>
                  <p className="text-label-sm text-on-surface-variant">
                    {siteConfig.testimonials[0].role}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-dashed border-outline-variant">
                <div>
                  <p className="text-headline-md font-heading font-bold text-crimson">100+</p>
                  <p className="text-body-md text-on-surface-variant mt-1">Satisfied Students</p>
                </div>
                <div>
                  <p className="text-headline-md font-heading font-bold text-crimson">98%</p>
                  <p className="text-body-md text-on-surface-variant mt-1">Visa Success Rate</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="px-4 xl:px-10">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <div className="grid md:grid-cols-2 gap-16">
            <Reveal direction="left">
              <div className="academic-rule mb-4" />
              <span className="text-label-bold text-crimson tracking-wider block">Contact</span>
              <Heading tag="h2" size="xxl" className="text-navy mb-8">
                Get In Touch
              </Heading>
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
              <div className="border border-dashed border-outline-variant rounded-3xl p-10 bg-paper-white">
                <Heading tag="h3" size="lg" className="text-on-surface mb-8">Send Us a Message</Heading>
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

      <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container className="py-16 md:py-28 border-x border-dashed">
          <Reveal>
            <div className="text-center mb-12">
              <div className="academic-rule mx-auto mb-4" />
              <span className="text-label-bold text-crimson tracking-wider block">Schedule</span>
              <Heading tag="h2" size="xxl" className="text-navy mb-4">Class Schedule & Working Hours</Heading>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Reveal direction="left">
              <div className="border border-dashed border-outline-variant rounded-3xl bg-paper-white p-8">
                <Heading tag="h3" size="lg" className="text-navy mb-6">Language Classes</Heading>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-dashed border-outline-variant pb-3">
                    <span className="font-heading text-label-bold text-on-surface">MORNING</span>
                    <span className="text-body-md text-on-surface-variant">7AM - 8AM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-dashed border-outline-variant pb-3">
                    <span className="font-heading text-label-bold text-on-surface">DAY</span>
                    <span className="text-body-md text-on-surface-variant">10AM - 11AM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-dashed border-outline-variant pb-3">
                    <span className="font-heading text-label-bold text-on-surface">EVENING</span>
                    <span className="text-body-md text-on-surface-variant">5PM - 6PM</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="border border-dashed border-outline-variant rounded-3xl bg-paper-white p-8">
                <Heading tag="h3" size="lg" className="text-navy mb-6">Working Hours</Heading>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-dashed border-outline-variant pb-3">
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
