"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import DocsLayout from "@/components/global/DocsLayout";

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

  if (success) {
    return (
      <DocsLayout title="Thank You!" subtitle="Your enquiry has been submitted successfully.">
        <p className="text-sm text-on-surface-variant mb-6">Our team will get back to you within 24 hours.</p>
        <button
          onClick={() => setSuccess(false)}
          className="bg-crimson text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:brightness-110 transition-all"
        >
          Submit Another Enquiry
        </button>
      </DocsLayout>
    );
  }

  return (
    <DocsLayout
      title="Enquiry Form"
      subtitle="Fill out the form below and our team will get back to you with personalized guidance"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-on-surface mb-1">
              Full Name <span className="text-crimson">*</span>
            </label>
            <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-on-surface mb-1">
              Email Address <span className="text-crimson">*</span>
            </label>
            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson" />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-on-surface mb-1">
            Phone Number <span className="text-crimson">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="countryInterest" className="block text-sm font-medium text-on-surface mb-1">
              Country of Interest <span className="text-crimson">*</span>
            </label>
            <select id="countryInterest" name="countryInterest" required value={formData.countryInterest} onChange={handleChange} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson">
              <option value="">Select Country</option>
              {siteConfig.countries.map((c) => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="testRequired" className="block text-sm font-medium text-on-surface mb-1">Test Required</label>
            <select id="testRequired" name="testRequired" value={formData.testRequired} onChange={handleChange} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson">
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
          <label htmlFor="query" className="block text-sm font-medium text-on-surface mb-1">Your Query</label>
          <textarea id="query" name="query" rows={4} value={formData.query} onChange={handleChange} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson resize-none" />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-crimson text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:brightness-110 transition-all disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </DocsLayout>
  );
}
