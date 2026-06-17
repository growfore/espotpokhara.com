import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import Container from "@/components/global/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Espot Pokhara Education and Visa Services in Pokhara, Nepal. Call us at 061-591175 or visit us at Samsung Galli, Newroad, Pokhara-09.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Espot Pokhara Education and Visa Services",
    description: "Contact Espot Pokhara Education and Visa Services in Pokhara, Nepal.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We are here to help you take the first step toward your study abroad journey"
        bgImage="/images/counter-banner.webp"
      />

      <section className="px-4 xl:px-10">
        <Container className="py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal direction="left">
              <h2 className="font-heading tracking-tighter text-2xl md:text-4xl text-navy mb-4">Get In Touch</h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                Have questions about studying abroad? We are here to provide you
                with the guidance and support you need. Reach out to us through
                any of the channels below.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">Office Address</p>
                    <p className="text-body-md text-on-surface-variant">{siteConfig.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">Phone</p>
                    <p className="text-body-md text-on-surface-variant">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">Email</p>
                    <p className="text-body-md text-on-surface-variant">{siteConfig.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">Working Hours</p>
                    <p className="text-body-md text-on-surface-variant">{siteConfig.contact.workingHours}</p>
                    <p className="text-body-md text-crimson">{siteConfig.contact.saturday}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="border border-outline-variant rounded-3xl bg-paper-white p-8">
                <h3 className="font-heading tracking-tighter text-xl text-on-surface mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
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
                  <button type="submit" className="w-full bg-crimson text-paper-white rounded-full px-8 py-3.5 font-heading text-label-bold hover:brightness-110 transition-all duration-200">
                    Send Message
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="h-[400px] border-t border-outline-variant">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.449687168874!2d83.9787!3d28.2099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDEyJzM1LjYiTiA4M0KwNTgnNDMuMyJF!5e0!3m2!1sen!2snp!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Espot Pokhara Education and Visa Services Location"
        />
      </section>
    </>
  );
}
