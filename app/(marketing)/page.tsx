import type { Metadata } from "next";
import { HomeFounder } from "@/components/home/founder";
import { HomeHero } from "@/components/home/hero";
import { HomeInsightsInvite } from "@/components/home/insights-invite";
import { HomeSectors } from "@/components/home/sectors";
import { HomeServicesPreview } from "@/components/home/services-preview";
import "@/components/home/home.css";

export const metadata: Metadata = {
  title: "Boutique risk & audit consultancy",
  description:
    "Libertad Chey Ltd is a founder-led risk and audit consultancy. Process audits, financial audits, and risk advisory. Book a consultation.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFounder />
      <HomeServicesPreview />
      <HomeSectors />
      <HomeInsightsInvite />
    </>
  );
}
