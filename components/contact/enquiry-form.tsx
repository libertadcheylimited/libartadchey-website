"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import {
  initialIdle,
  submitEnquiry,
  type ContactActionState,
} from "@/app/actions/contact";

const inputClass =
  "w-full rounded-md border border-outline-variant bg-surface-container-low px-4 py-3 font-sans text-base text-on-surface transition-[border-color,box-shadow] placeholder:text-outline focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest aria-[invalid=true]:border-error aria-[invalid=true]:focus-visible:ring-error/40";

const labelClass =
  "font-sans text-sm font-semibold tracking-wide text-on-surface-variant";

export function EnquiryForm() {
  const formId = useId();
  const successRef = useRef<HTMLDivElement>(null);
  const [state, formAction, isPending] = useActionState<
    ContactActionState,
    FormData
  >(submitEnquiry, initialIdle);

  useEffect(() => {
    if (state.status === "success") {
      successRef.current?.focus();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="rounded-lg border border-outline-variant/40 bg-surface-container-low p-6 outline-none"
      >
        <p className="font-display text-xl font-semibold text-on-surface">
          Enquiry received
        </p>
        <p className="mt-2 max-w-prose font-sans text-base leading-relaxed text-on-surface-variant">
          {state.message}
        </p>
        <p className="mt-4 font-sans text-sm text-on-surface-variant">
          Prefer to talk sooner? Use the scheduling panel or email us directly.
        </p>
      </div>
    );
  }

  const errors = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      {/* Honeypot — visually hidden */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-companyWebsite`}>Company website</label>
        <input
          id={`${formId}-companyWebsite`}
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelClass} htmlFor={`${formId}-name`}>
          Full name
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          className={inputClass}
          placeholder="Jane Doe"
        />
        {errors.name ? (
          <p
            id={`${formId}-name-error`}
            className="font-sans text-sm text-error"
            role="alert"
          >
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelClass} htmlFor={`${formId}-email`}>
          Work email
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          className={inputClass}
          placeholder="jane@company.com"
        />
        {errors.email ? (
          <p
            id={`${formId}-email-error`}
            className="font-sans text-sm text-error"
            role="alert"
          >
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelClass} htmlFor={`${formId}-organisation`}>
          Organisation
        </label>
        <input
          id={`${formId}-organisation`}
          name="organisation"
          type="text"
          autoComplete="organization"
          required
          aria-invalid={errors.organisation ? true : undefined}
          aria-describedby={
            errors.organisation ? `${formId}-organisation-error` : undefined
          }
          className={inputClass}
          placeholder="Company or organisation name"
        />
        {errors.organisation ? (
          <p
            id={`${formId}-organisation-error`}
            className="font-sans text-sm text-error"
            role="alert"
          >
            {errors.organisation}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        <label className={labelClass} htmlFor={`${formId}-message`}>
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={
            errors.message ? `${formId}-message-error` : undefined
          }
          className={`${inputClass} resize-y min-h-[7rem]`}
          placeholder="Briefly describe your objectives or the challenge you are facing…"
        />
        {errors.message ? (
          <p
            id={`${formId}-message-error`}
            className="font-sans text-sm text-error"
            role="alert"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      {state.status === "error" && state.message ? (
        <p
          className="rounded-md bg-error-container px-3 py-2 font-sans text-sm text-on-error-container"
          role="alert"
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-sans text-sm font-semibold tracking-wide text-on-primary shadow-[0_8px_24px_rgb(25_28_29/0.08)] transition-[background-color,box-shadow,opacity] hover:bg-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container-lowest disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Sending…" : "Send enquiry"}
        {!isPending ? (
          <span aria-hidden="true" className="text-lg leading-none">
            →
          </span>
        ) : null}
      </button>
    </form>
  );
}
