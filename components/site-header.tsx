"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Container } from "@/components/container";
import { mainNav, primaryCta, siteConfig } from "@/lib/site";

function linkIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);
  const panelId = useId();

  // Close the mobile menu on navigation without an effect (avoids cascading render).
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full bg-primary text-on-primary shadow-[0_4px_24px_rgba(25,28,29,0.12)]">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 text-on-primary no-underline"
        >
          <Image
            src="/brand/logo.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="font-display truncate text-lg font-semibold tracking-tight sm:text-xl">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active = linkIsActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-sm font-semibold tracking-[0.05em] transition-colors hover:text-secondary-fixed ${
                  active
                    ? "border-b-2 border-secondary-fixed text-secondary-fixed"
                    : "text-on-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={primaryCta.href}
            className="hidden rounded-lg bg-secondary-container px-5 py-2.5 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter] hover:brightness-110 sm:inline-flex"
          >
            {primaryCta.label}
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-on-primary/30 text-on-primary lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id={panelId}
          className="border-t border-on-primary/15 bg-primary lg:hidden"
        >
          <Container className="flex flex-col gap-1.5 py-4">
            {mainNav.map((item) => {
              const active = linkIsActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-[44px] items-center rounded-lg px-4 font-sans text-sm font-semibold tracking-[0.05em] transition-colors ${
                    active
                      ? "bg-primary-container text-secondary-fixed shadow-inner"
                      : "text-on-primary hover:bg-primary-container/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={primaryCta.href}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-secondary-container px-5 font-sans text-sm font-semibold tracking-[0.05em] text-on-secondary-container transition-[filter] hover:brightness-105"
            >
              {primaryCta.label}
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
