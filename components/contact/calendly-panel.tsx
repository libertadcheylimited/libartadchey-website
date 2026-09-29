type CalendlyPanelProps = {
  calendlyUrl?: string;
};

export function CalendlyPanel({ calendlyUrl }: CalendlyPanelProps) {
  const url = calendlyUrl?.trim();

  if (url) {
    const embedSrc = url.includes("?")
      ? `${url}&embed_type=Inline`
      : `${url}?embed_type=Inline`;

    return (
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-low">
          <iframe
            title="Book a consultation on Calendly"
            src={embedSrc}
            className="h-[min(600px,70vh)] w-full border-0"
            loading="lazy"
          />
        </div>
        <p className="font-sans text-sm text-on-surface-variant">
          Prefer a new tab?{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          >
            Open the scheduling page
          </a>
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex h-[min(420px,60vh)] flex-col items-center justify-center gap-4 rounded-lg border border-outline-variant/30 bg-surface-container-low px-6 text-center"
      role="status"
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary"
        aria-hidden="true"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
        </svg>
      </div>
      <div className="max-w-sm">
        <p className="font-display text-xl font-semibold text-on-surface">
          Scheduling link coming soon
        </p>
        <p className="mt-2 font-sans text-base leading-relaxed text-on-surface-variant">
          Online booking will appear here once Calendly is connected. In the
          meantime, send an enquiry or reach out by email.
        </p>
      </div>
    </div>
  );
}
