"use client";

import { useEffect, useState } from "react";

export default function EmailVerified() {
  const [redirectFailed, setRedirectFailed] = useState(false);

  useEffect(() => {
    // Supabase puts tokens in the URL fragment (#access_token=...&refresh_token=...)
    const hash = window.location.hash;
    const qs = window.location.search;
    const deepLink = "flock://auth/callback" + (hash || qs || "");

    // Try auto-redirect after a short delay so the user sees the page
    const timer = setTimeout(() => {
      window.location.href = deepLink;
      // If we're still here after 1.5s, the deep link didn't work
      setTimeout(() => setRedirectFailed(true), 1500);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenApp = () => {
    const hash = window.location.hash;
    const qs = window.location.search;
    window.location.href = "flock://auth/callback" + (hash || qs || "");
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-cream py-24">
      <div className="mx-auto max-w-md px-4 text-center">
        {/* Checkmark */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-flock-light">
          <svg
            className="h-10 w-10 text-flock-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Email <span className="text-flock">Verified!</span>
        </h1>
        <p className="mt-4 text-lg text-muted-dark">
          Your account is confirmed. Redirecting you to Flock...
        </p>

        {redirectFailed && (
          <div className="mt-8">
            <button
              onClick={handleOpenApp}
              className="inline-block rounded-full bg-flock px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-flock-dark"
            >
              Open Flock
            </button>
            <p className="mt-4 text-sm text-muted">
              If the app doesn&apos;t open, make sure Flock is installed on your
              device.
            </p>
          </div>
        )}

        {!redirectFailed && (
          <div className="mt-8">
            <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-flock border-t-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}
