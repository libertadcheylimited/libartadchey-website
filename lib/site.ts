export const siteConfig = {
  name: "Libertad Chey Ltd",
  shortName: "Libertad Chey",
  description:
    "Boutique risk and audit consultancy. Founder-led process audits, financial audits, and risk management advisory.",
  email: "uchemaduka98@gmail.com",
  phone: "+234 706 389 2787",
  phoneHref: "tel:+2347063892787",
  linkedin: "https://linkedin.com/in/uche-maduka-cia-a24867207",
  location: "Lagos, Nigeria",
} as const;

export const mainNav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const primaryCta = {
  href: "/contact",
  label: "Book a call",
} as const;
