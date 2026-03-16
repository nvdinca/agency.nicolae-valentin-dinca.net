"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const STORAGE_KEY = "cookie_consent";

type Consent = "accepted" | "rejected" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    }
    setMounted(true);
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  }

  function handleReject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setConsent("rejected");
  }

  if (!mounted || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white shadow-lg p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-slate-700">
          We use essential cookies only to remember your preferences. We do not use advertising or
          analytics cookies. By continuing you accept our use of cookies, or you can choose essential
          only.{" "}
          <Link href="/cookies" className="text-primary-700 underline hover:text-primary-800">
            Cookie policy
          </Link>
        </p>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            type="button"
            onClick={handleReject}
            className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-primary-700 hover:bg-primary-800 rounded-md transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
