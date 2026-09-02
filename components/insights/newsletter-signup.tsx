"use client";

import { useState, type FormEvent } from "react";

type NewsletterSignupProps = {
  className?: string;
  variant?: "sidebar" | "inline";
};

/**
 * Front-end stub only. Wire Resend / Mailchimp (or similar) here:
 * - POST email to your newsletter API route
 * - Or embed provider form / double opt-in flow
 * Do not store addresses in client state beyond UX feedback.
 */
export function NewsletterSignup({
  className = "",
  variant = "sidebar",
}: NewsletterSignupProps) {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO(CMS/email): replace with Resend / Mailchimp subscribe endpoint.
    setStatus("done");
  }

  const isSidebar = variant === "sidebar";

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${
        isSidebar
          ? "bg-inverse-surface p-6 text-inverse-on-surface shadow-[0_12px_40px_rgba(25,28,29,0.18)] md:p-8"
          : "border border-outline-variant bg-surface-container-lowest p-6 md:p-8"
      } ${className}`}
    >
      {isSidebar ? (
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-secondary opacity-20 blur-xl"
        />
      ) : null}

      <p
        className={`font-sans text-xs font-semibold uppercase tracking-[0.05em] ${
          isSidebar ? "text-secondary-fixed" : "text-primary"
        }`}
      >
        Newsletter
      </p>
      <h3
        className={`relative z-10 mt-2 font-display text-xl font-semibold md:text-2xl ${
          isSidebar ? "text-inverse-on-surface" : "text-on-surface"
        }`}
      >
        The Executive Briefing
      </h3>
      <p
        className={`relative z-10 mt-3 font-sans text-base leading-relaxed ${
          isSidebar ? "text-surface-variant" : "text-on-surface-variant"
        }`}
      >
        Occasional notes on governance, process, and risk. Sample signup for
        now; real delivery comes when email is connected.
      </p>

      {status === "done" ? (
        <p
          className={`relative z-10 mt-6 font-sans text-sm font-semibold ${
            isSidebar ? "text-secondary-fixed" : "text-primary"
          }`}
          role="status"
        >
          Thanks. Your interest is recorded on this page only until the list
          provider is connected.
        </p>
      ) : (
        <form
          className="relative z-10 mt-6 flex flex-col gap-3"
          onSubmit={onSubmit}
          noValidate={false}
        >
          <label className="sr-only" htmlFor="insights-newsletter-email">
            Work email
          </label>
          <input
            id="insights-newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Work email"
            className={`w-full rounded-md px-4 py-3 font-sans text-base text-on-surface outline-none ring-0 placeholder:text-outline focus:border-primary focus:shadow-[0_0_0_3px_rgba(184,150,12,0.25)] ${
              isSidebar
                ? "border border-transparent bg-surface"
                : "border border-outline-variant bg-surface-container-lowest"
            }`}
          />
          <button
            type="submit"
            className={`w-full rounded-md px-6 py-3 font-sans text-sm font-semibold tracking-[0.05em] transition-colors ${
              isSidebar
                ? "bg-secondary text-on-secondary-fixed-variant hover:bg-secondary-fixed"
                : "bg-primary-container text-on-primary hover:brightness-110"
            }`}
          >
            Subscribe
          </button>
        </form>
      )}

      <p
        className={`relative z-10 mt-4 text-center font-sans text-xs ${
          isSidebar ? "text-surface-variant/70" : "text-on-surface-variant"
        }`}
      >
        No spam. Unsubscribe anytime once mailing is live.
      </p>
    </div>
  );
}
