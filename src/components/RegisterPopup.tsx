"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function RegisterPopup() {
  const [open, setOpen] = useState(false);

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

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-body-md text-body-md font-medium text-on-surface block mb-1">Your Name</label>
                  <input type="text" className="input-modern" required />
                </div>
                <div>
                  <label className="font-body-md text-body-md font-medium text-on-surface block mb-1">Your Email</label>
                  <input type="email" className="input-modern" required />
                </div>
                <div>
                  <label className="font-body-md text-body-md font-medium text-on-surface block mb-1">Phone</label>
                  <input type="tel" className="input-modern" required />
                </div>
                <div>
                  <label className="font-body-md text-body-md font-medium text-on-surface block mb-1">Address</label>
                  <input type="text" className="input-modern" required />
                </div>
                <div>
                  <label className="font-body-md text-body-md font-medium text-on-surface block mb-1">Purpose (optional)</label>
                  <textarea rows={3} className="input-modern resize-none" />
                </div>
                <Button variant="primary" width="fullWidth" type="submit">
                  Submit
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
