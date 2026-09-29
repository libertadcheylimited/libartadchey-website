import type { Metadata } from "next";
import { AboutCta } from "@/components/about/about-cta";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStyles } from "@/components/about/about-styles";
import { Credentials } from "@/components/about/credentials";
import { FounderStory } from "@/components/about/founder-story";
import { Philosophy } from "@/components/about/philosophy";
import { WhyWorkWithMe } from "@/components/about/why-work-with-me";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Uchechukwu (Uche) Maduka, Founder of Libertad Chey. Big 4 experience, CIA, ACA, ISO 31000, and a founder-led approach to upstream risk and process work.",
};

export default function AboutPage() {
  return (
    <>
      <AboutStyles />
      <AboutHero />
      <FounderStory />
      <Credentials />
      <WhyWorkWithMe />
      <Philosophy />
      <AboutCta />
    </>
  );
}
