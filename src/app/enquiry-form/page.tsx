"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";
import DocsLayout from "@/components/global/DocsLayout";

export default function EnquiryFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    passport: "",
    qualification: "",
    college: "",
    gpa: "",
    passedYear: "",
    maritalStatus: "",
    address: "",
    phone: "",
    email: "",
    guardianPhone: "",
    reach: [] as string[],
    countryInterest: "",
    testRequired: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      reach: prev.reach.includes(value) ? prev.reach.filter((v) => v !== value) : [...prev.reach, value],
    }));
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
        setFormData({
          name: "", dob: "", passport: "", qualification: "", college: "", gpa: "",
          passedYear: "", maritalStatus: "", address: "", phone: "", email: "",
          guardianPhone: "", reach: [], countryInterest: "", testRequired: "", message: "",
        });
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

  const inputClass = "w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson";
  const labelClass = "block text-sm font-medium text-on-surface mb-1";

  return (
    <DocsLayout
      title="Enquiry Form"
      subtitle="Fill out the form below and our team will get back to you with personalized guidance"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="font-heading text-heading-sm text-navy mb-3">Your Basic Info</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className={labelClass}>Full Name <span className="text-crimson">*</span></label>
              <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="dob" className={labelClass}>Date of Birth <span className="text-crimson">*</span></label>
              <input id="dob" name="dob" type="text" required value={formData.dob} onChange={handleChange} placeholder="DD/MM/YYYY" className={inputClass} />
            </div>
            <div>
              <label htmlFor="passport" className={labelClass}>Passport No. <span className="text-crimson">*</span></label>
              <input id="passport" name="passport" type="text" required value={formData.passport} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-heading-sm text-navy mb-3">Academic Qualification</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="qualification" className={labelClass}>Highest Qualification <span className="text-crimson">*</span></label>
              <select id="qualification" name="qualification" required value={formData.qualification} onChange={handleChange} className={inputClass}>
                <option value="">Select</option>
                <option value="+2">+2</option>
                <option value="PCL">PCL</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="college" className={labelClass}>College Name <span className="text-crimson">*</span></label>
              <input id="college" name="college" type="text" required value={formData.college} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="gpa" className={labelClass}>Percentage/CGPA/Grade <span className="text-crimson">*</span></label>
              <input id="gpa" name="gpa" type="text" required value={formData.gpa} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="passedYear" className={labelClass}>Passed Year <span className="text-crimson">*</span></label>
              <input id="passedYear" name="passedYear" type="text" required value={formData.passedYear} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-heading-sm text-navy mb-3">Additional Info</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="maritalStatus" className={labelClass}>Marital Status <span className="text-crimson">*</span></label>
              <select id="maritalStatus" name="maritalStatus" required value={formData.maritalStatus} onChange={handleChange} className={inputClass}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor="address" className={labelClass}>Address <span className="text-crimson">*</span></label>
              <input id="address" name="address" type="text" required value={formData.address} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number <span className="text-crimson">*</span></label>
              <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email Address <span className="text-crimson">*</span></label>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="guardianPhone" className={labelClass}>Guardian&apos;s Phone No.</label>
              <input id="guardianPhone" name="guardianPhone" type="tel" value={formData.guardianPhone} onChange={handleChange} className={inputClass} />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="countryInterest" className={labelClass}>Country of Interest <span className="text-crimson">*</span></label>
            <select id="countryInterest" name="countryInterest" required value={formData.countryInterest} onChange={handleChange} className={inputClass}>
              <option value="">Select Country</option>
              {siteConfig.countries.map((c) => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="testRequired" className={labelClass}>Test Required</label>
            <select id="testRequired" name="testRequired" value={formData.testRequired} onChange={handleChange} className={inputClass}>
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
          <label className={labelClass}>How did you get to know about us? <span className="text-crimson">*</span></label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-1">
            {["Newspaper", "Facebook", "TV", "Street Board", "Hoarding Board", "FM Radio", "SMS", "Educational Fair", "Phone Calls", "Website", "Youtube"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm text-on-surface-variant cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.reach.includes(opt)}
                  onChange={() => handleCheckbox(opt)}
                  className="accent-crimson"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-crimson text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:brightness-110 transition-all disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Send Request"}
        </button>
      </form>
    </DocsLayout>
  );
}
