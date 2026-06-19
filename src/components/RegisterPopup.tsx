"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { sendForm } from "@/actions/send-email";

export default function RegisterPopup() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ name: "", email: "", phone: "", address: "", purpose: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendForm("Register", data);
      setDone(true);
    } catch {
      alert("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="primary"
        size="sm"
        className="fixed bottom-6 right-6 z-40"
      >
        Register Now
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-paper-white w-full max-w-md mx-4 p-8 border border-outline-variant/30 rounded-3xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-on-surface-variant hover:text-crimson transition-colors"
                aria-label="Close"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <h3 className="font-headline-xl text-headline-xl text-on-surface mb-6">Register Now</h3>

              {done ? (
                <p className="text-body-lg text-on-surface font-medium text-center py-6">Thank you! We&apos;ll get in touch.</p>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="register-name" className="font-body-md text-body-md font-medium text-on-surface block mb-1">Your Name</label>
                    <input id="register-name" name="name" type="text" className="input-modern" required autoComplete="name" value={data.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="register-email" className="font-body-md text-body-md font-medium text-on-surface block mb-1">Your Email</label>
                    <input id="register-email" name="email" type="email" className="input-modern" required autoComplete="email" value={data.email} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="register-phone" className="font-body-md text-body-md font-medium text-on-surface block mb-1">Phone</label>
                    <input id="register-phone" name="phone" type="tel" className="input-modern" required autoComplete="tel" value={data.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="register-address" className="font-body-md text-body-md font-medium text-on-surface block mb-1">Address</label>
                    <input id="register-address" name="address" type="text" className="input-modern" required autoComplete="street-address" value={data.address} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="register-purpose" className="font-body-md text-body-md font-medium text-on-surface block mb-1">Purpose (optional)</label>
                    <textarea id="register-purpose" name="purpose" rows={3} className="input-modern resize-none" value={data.purpose} onChange={handleChange} />
                  </div>
                  <button
                    type="submit" disabled={loading}
                    className="w-full bg-crimson text-paper-white rounded-full px-8 py-3.5 font-heading text-label-bold hover:brightness-110 transition-all duration-200 disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Submit"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
