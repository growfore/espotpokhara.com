"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { Check, Loader2 } from "lucide-react";
import Container from "@/components/global/Container";
import Heading from "@/components/shared/Heading";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

export default function EnquiryFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryInterest: "",
    testRequired: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", countryInterest: "", testRequired: "", query: "" });
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch {
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        title="Enquiry Form"
        subtitle="Fill out the form below and our team will get back to you with personalized guidance"
        bgImage="/images/counter-banner.webp"
      />

      <section className="px-4 xl:px-10 pattern-bg border-y border-dashed">
        <Container className="py-16 md:py-28 border-x border-dashed">
          {success ? (
            <div className="max-w-lg mx-auto text-center py-16">
              <div className="w-20 h-20 flex items-center justify-center bg-green-500 text-paper-white rounded-full mx-auto mb-6">
                <Check size={36} />
              </div>
              <Heading tag="h2" size="xl" className="text-navy mb-4">Thank You!</Heading>
              <p className="text-body-lg text-on-surface-variant mb-8">
                Your enquiry has been submitted successfully. Our team will get back to you shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="bg-crimson text-paper-white rounded-full px-8 py-3.5 font-heading text-label-bold hover:brightness-110 transition-all duration-200"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <Reveal>
                <div className="text-center mb-12">
                  <div className="academic-rule mx-auto mb-4" />
                  <Heading tag="h2" size="xl" className="text-navy mb-4">Send Us Your Enquiry</Heading>
                  <p className="text-body-lg text-on-surface-variant">
                    Fill out the form and we will get back to you within 24 hours
                  </p>
                </div>
              </Reveal>

              <Reveal direction="up">
                <form onSubmit={handleSubmit} className="border border-dashed border-outline-variant rounded-3xl bg-paper-white p-8 md:p-10 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-label-bold text-on-surface mb-1.5">Full Name <span className="text-crimson">*</span></label>
                      <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="input-modern rounded-lg w-full" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-label-bold text-on-surface mb-1.5">Email Address <span className="text-crimson">*</span></label>
                      <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="input-modern rounded-lg w-full" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-label-bold text-on-surface mb-1.5">Phone Number <span className="text-crimson">*</span></label>
                    <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="input-modern rounded-lg w-full" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="countryInterest" className="block text-label-bold text-on-surface mb-1.5">Country of Interest <span className="text-crimson">*</span></label>
                      <select id="countryInterest" name="countryInterest" required value={formData.countryInterest} onChange={handleChange} className="input-modern rounded-lg w-full">
                        <option value="">Select Country</option>
                        {siteConfig.countries.map((c) => (
                          <option key={c.name} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="testRequired" className="block text-label-bold text-on-surface mb-1.5">Test Required</label>
                      <select id="testRequired" name="testRequired" value={formData.testRequired} onChange={handleChange} className="input-modern rounded-lg w-full">
                        <option value="">Select Test</option>
                        <option value="IELTS">IELTS</option>
                        <option value="PTE">PTE</option>
                        <option value="TOEFL">TOEFL</option>
                        <option value="SAT">SAT</option>
                        <option value="GRE">GRE</option>
                        <option value="Japanese Language">Japanese Language</option>
                        <option value="Not Required">Not Required</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="query" className="block text-label-bold text-on-surface mb-1.5">Your Query</label>
                    <textarea id="query" name="query" rows={4} value={formData.query} onChange={handleChange} className="input-modern rounded-lg w-full resize-none" />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-crimson text-paper-white rounded-full px-8 py-3.5 font-heading text-label-bold hover:brightness-110 transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </button>
                </form>
              </Reveal>
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
