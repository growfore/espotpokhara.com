import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import Container from "@/components/global/Container";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Espot Pokhara Education and Visa Services",
  description:
    "Get in touch with Espot Pokhara Education and Visa Services in Pokhara, Nepal. Call us at 9802859346 | 9802859342 or visit us at Samsung Galli, Newroad, Pokhara-09.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Us - Espot Pokhara Education and Visa Services",
    description:
      "Contact Espot Pokhara Education and Visa Services in Pokhara, Nepal.",
    url: "/contact-us",
    images: [{ url: "/images/counter-banner.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Espot Pokhara Education and Visa Services",
    description:
      "Contact Espot Pokhara Education and Visa Services in Pokhara, Nepal.",
    images: ["/images/counter-banner.webp"],
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
              <h2 className="font-heading tracking-tighter text-2xl md:text-4xl text-navy mb-4">
                Get In Touch
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-8">
                Being the best consultancy in Pokhara, Espot Pokhara Education
                and Visa Services is dedicated to broadening the perspectives
                and unlocking the potential of students through international
                education. Grab an opportunity to explore different cultures and
                research programs in renowned universities around the world.
              </p>
              <p className="text-body-lg text-on-surface-variant mb-8">
                Decide to go ahead and contact us to see how we may help you
                study abroad more quickly, easily, and affordably. Fill up the
                form below &amp; join us now to explore the wide range of
                facilities that we provide.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">
                      Office Address
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">
                      Phone
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">
                      Email
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-crimson text-paper-white rounded-2xl flex-shrink-0">
                    <Clock size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading text-label-bold text-on-surface mb-1">
                      Working Hours
                    </p>
                    <p className="text-body-md text-on-surface-variant">
                      {siteConfig.contact.workingHours}
                    </p>
                    <p className="text-body-md text-crimson">
                      {siteConfig.contact.saturday}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="border border-outline-variant rounded-3xl bg-paper-white p-6 md:p-8">
                <h3 className="font-heading tracking-tighter text-xl text-on-surface mb-6">
                  Send Us a Message
                </h3>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="h-[300px] md:h-[400px] border-t border-outline-variant">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1757.768439045327!2d83.98712747030804!3d28.221379982121224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995958bb6c8960b%3A0x512edd007af0eafc!2sEspot%20Pokhara%20Education%20and%20Visa%20Services!5e0!3m2!1sen!2snp!4v1782969202871!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Espot Pokhara Education and Visa Services, Pokhara, Nepal"
        />
      </section>
    </>
  );
}
