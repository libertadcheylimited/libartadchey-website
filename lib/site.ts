export const siteConfig = {
  name: "Libertad Chey",
  shortName: "Libertad Chey",
  description:
    "Founder-led risk and audit consultancy. Process audits, financial audits, and risk management advisory.",
  email: "info@libertadchey.com",
  linkedin: "https://www.linkedin.com/in/uche-maduka-cia-aca-m-sc-a24867207/",
  location: "Mulliner Towers, Alfred Rewane, Ikoyi, Lagos, Nigeria",
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
