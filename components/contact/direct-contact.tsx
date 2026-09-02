import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

function ContactIcon({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-on-secondary-container/10 text-on-secondary-container"
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function DirectContact() {
  return (
    <aside className="rounded-xl bg-secondary-container p-8 text-on-secondary-container shadow-[0_8px_24px_rgb(25_28_29/0.06)]">
      <h2 className="font-display text-2xl font-semibold">Direct contact</h2>
      <ul className="mt-4 flex flex-col gap-3">
        <li>
          <a
            href={siteConfig.phoneHref}
            className="flex w-fit items-center gap-3 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-secondary-container/40 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-container"
          >
            <ContactIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" />
              </svg>
            </ContactIcon>
            <span className="font-sans text-base">{siteConfig.phone}</span>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex w-fit items-center gap-3 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-secondary-container/40 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-container"
          >
            <ContactIcon>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16v12H4z" />
                <path d="M4 7l8 6 8-6" />
              </svg>
            </ContactIcon>
            <span className="font-sans text-base">{siteConfig.email}</span>
          </a>
        </li>
        <li>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-3 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-secondary-container/40 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-container"
          >
            <ContactIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.6c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.48V23h-4V8.5z" />
              </svg>
            </ContactIcon>
            <span className="font-sans text-base">LinkedIn</span>
          </a>
        </li>
        <li className="flex items-start gap-3 pt-1">
          <ContactIcon>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </ContactIcon>
          <span className="font-sans text-base leading-relaxed">
            {siteConfig.location}
            <br />
            <span className="text-sm opacity-80">Global remote availability</span>
          </span>
        </li>
      </ul>
    </aside>
  );
}
