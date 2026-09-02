"use client";

import { useEffect, useState } from "react";
import type { Service } from "@/components/services/content";

type ServicesStickyNavProps = {
  services: Service[];
};

export function ServicesStickyNav({ services }: ServicesStickyNavProps) {
  const [activeId, setActiveId] = useState<string>(services[0]?.slug ?? "");

  useEffect(() => {
    const sections = services
      .map((service) => document.getElementById(service.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop,
          );

        const id = visible[0]?.target.id;
        if (id) setActiveId(id);
      },
      {
        root: null,
        rootMargin: "-140px 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [services]);

  return (
    <div className="sticky top-[var(--header-height)] z-40 border-b border-outline-variant/30 bg-background/95 backdrop-blur-sm">
      <nav
        aria-label="Services on this page"
        className="mx-auto max-w-[var(--container-max)] overflow-x-auto px-[var(--margin-mobile)] md:px-[var(--gutter)]"
      >
        <ul className="flex min-w-max gap-8 py-4">
          {services.map((service) => {
            const active = activeId === service.slug;
            return (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className={`inline-block border-b-2 pb-2 font-sans text-sm font-semibold tracking-[0.05em] transition-colors ${
                    active
                      ? "border-secondary-fixed text-primary"
                      : "border-transparent text-on-surface-variant hover:text-secondary"
                  }`}
                >
                  {service.navLabel}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
