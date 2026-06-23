"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import { sendForm } from "@/actions/send-email";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await sendForm("Contact", data);
      setDone(true);
    } catch {
      setError("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="text-center py-10">
        <p className="text-body-lg text-on-surface font-medium">Thank you! We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="font-body-md text-body-md font-medium text-on-surface block mb-1">Your Name</label>
          <input
            id="contact-name" name="name" type="text" placeholder="e.g. John Doe"
            className="input-modern rounded-lg" required autoComplete="name"
            value={data.name} onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="font-body-md text-body-md font-medium text-on-surface block mb-1">Your Email</label>
          <input
            id="contact-email" name="email" type="email" placeholder="e.g. john@example.com"
            className="input-modern rounded-lg" required autoComplete="email"
            value={data.email} onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-phone" className="font-body-md text-body-md font-medium text-on-surface block mb-1">Phone Number</label>
        <input
          id="contact-phone" name="phone" type="tel" placeholder="e.g. 98XXXXXXXX"
          className="input-modern rounded-lg" autoComplete="tel"
          value={data.phone} onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contact-country" className="font-body-md text-body-md font-medium text-on-surface block mb-1">Interested Country</label>
        <select
          id="contact-country" name="country"
          className="input-modern rounded-lg" defaultValue=""
          value={data.country} onChange={handleChange}
        >
          <option value="" disabled>Select a country…</option>
          {siteConfig.destinations.map((d) => (
            <option key={d.country} value={d.country}>{d.country}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="font-body-md text-body-md font-medium text-on-surface block mb-1">Your Message</label>
        <textarea
          id="contact-message" name="message" placeholder="How can we help you?…"
          rows={4} className="input-modern rounded-lg resize-none" required
          value={data.message} onChange={handleChange}
        />
      </div>
      <button
        type="submit" disabled={loading}
        className="w-full bg-crimson text-paper-white rounded-full px-8 py-3.5 font-heading text-label-bold hover:brightness-110 transition-all duration-200 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
      {error && <p className="text-sm text-red-600 text-center">{error}</p>}
    </form>
  );
}
