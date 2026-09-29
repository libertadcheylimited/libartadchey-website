"use server";

import { siteConfig } from "@/lib/site";

/**
 * Contact enquiry (Resend).
 *
 * Env (contact only):
 * - RESEND_API_KEY — required to send email; without it the action logs and returns success (dev-friendly)
 * - RESEND_FROM_EMAIL — verified Resend sender (e.g. "Libertad Chey <onboarding@resend.dev>")
 * - CONTACT_TO_EMAIL — inbox for enquiries (defaults to siteConfig.email)
 * - NEXT_PUBLIC_CALENDLY_URL — used by the booking UI (not this action)
 */

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "organisation" | "message" | "form", string>
>;

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: ContactFieldErrors;
};

const initialIdle: ContactActionState = { status: "idle" };

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitEnquiry(
  _prev: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const name = readString(formData, "name");
  const email = readString(formData, "email");
  const organisation = readString(formData, "organisation");
  const message = readString(formData, "message");

  // Honeypot: bots fill this; humans leave it empty
  const companyWebsite = readString(formData, "companyWebsite");
  if (companyWebsite) {
    return {
      status: "success",
      message: "Thank you. We will reply shortly.",
    };
  }

  const fieldErrors: ContactFieldErrors = {};

  if (!name) {
    fieldErrors.name = "Please enter your full name.";
  }
  if (!email) {
    fieldErrors.email = "Please enter your work email.";
  } else if (!isValidEmail(email)) {
    fieldErrors.email =
      "Email needs to include an @ and a domain. Example: name@company.com";
  }
  if (!organisation) {
    fieldErrors.organisation = "Please enter your organisation.";
  }
  if (!message) {
    fieldErrors.message = "Please share a short note about what you need.";
  } else if (message.length < 10) {
    fieldErrors.message =
      "Please add a bit more detail (at least a sentence) so we can prepare.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const payload = {
    name,
    email,
    organisation,
    message,
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "Libertad Chey <onboarding@resend.dev>";

  if (!apiKey) {
    console.info(
      "[contact] Enquiry received (RESEND_API_KEY not set; not emailed):",
      payload,
    );
    return {
      status: "success",
      message:
        "Thank you. Your enquiry was received. We will get back to you shortly.",
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry from ${name} (${organisation})`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Organisation: ${organisation}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[contact] Resend error:", response.status, detail);
      return {
        status: "error",
        message:
          "We could not send your message just now. Email us directly or try again in a moment.",
        fieldErrors: { form: "Delivery failed." },
      };
    }

    return {
      status: "success",
      message:
        "Thank you. Your enquiry was sent. We will get back to you shortly.",
    };
  } catch (error) {
    console.error("[contact] Unexpected send failure:", error);
    return {
      status: "error",
      message:
        "Something went wrong on our end. Please email us directly or try again.",
      fieldErrors: { form: "Network or server error." },
    };
  }
}

export { initialIdle };
