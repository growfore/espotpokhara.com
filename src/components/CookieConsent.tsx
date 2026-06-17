"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const COOKIE_CONSENT_KEY = "cookie-consent";

function getConsent() {
  return localStorage.getItem(COOKIE_CONSENT_KEY);
}

function getServerConsent() {
  return null;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export default function CookieConsent() {
  const storedConsent = useSyncExternalStore(subscribeToConsent, getConsent, getServerConsent);
  const [dismissed, setDismissed] = useState(false);
  const visible = !dismissed && storedConsent !== "accepted";
  const router = useRouter();

  function handleAccept() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setDismissed(true);
  }

  function handleLearnMore() {
    router.push("/cookie-policy");
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-navy text-paper-white px-6 py-4"
        >
          <div className="max-w-8xl mx-auto px-4 xl:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body-md text-body-md text-paper-white/80 text-center sm:text-left">
              We use cookies to improve your experience. By continuing, you agree to our use of cookies.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={handleAccept}
                className="bg-crimson text-paper-white px-5 py-2 font-body-lg text-body-lg font-medium hover:brightness-110 transition-all duration-200 rounded-full"
              >
                Accept
              </button>
              <button
                onClick={handleLearnMore}
                className="border border-paper-white/30 text-paper-white/80 px-5 py-2 font-body-lg text-body-lg font-medium hover:bg-paper-white/10 transition-all duration-200 rounded-full"
              >
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
