import type { Metadata } from "next";
import { Container } from "@/components/container";
import {
  getServiceBySlug,
  services,
} from "@/components/services/content";
import { ComplianceSection } from "@/components/services/compliance-section";
import { FeaturedProcessAudit } from "@/components/services/featured-process-audit";
import { PolicyStripSection } from "@/components/services/policy-strip-section";
import { RiskStepsSection } from "@/components/services/risk-steps-section";
import { ServiceEditorialBlock } from "@/components/services/service-editorial-block";
import { ServicesCta } from "@/components/services/services-cta";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesStickyNav } from "@/components/services/services-sticky-nav";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Process audits, financial audits, risk management, compliance advisory, and policy & SOP development from Libertad Chey.",
};

export default function ServicesPage() {
  const processAudits = getServiceBySlug("process-audits")!;
  const financialAudits = getServiceBySlug("financial-audits")!;
  const riskAdvisory = getServiceBySlug("risk-management-advisory")!;
  const compliance = getServiceBySlug("compliance-advisory")!;
  const policySop = getServiceBySlug("policy-sop-development")!;

  return (
    <>
      <ServicesHero />
      <ServicesStickyNav services={services} />
      <Container className="flex flex-col gap-[clamp(4rem,10vw,7.5rem)] py-[clamp(3.5rem,8vw,5rem)]">
        <FeaturedProcessAudit service={processAudits} />
        <ServiceEditorialBlock
          service={financialAudits}
          reverse
          tone="muted"
        />
        <RiskStepsSection service={riskAdvisory} />
        <ComplianceSection service={compliance} />
        <PolicyStripSection service={policySop} />
      </Container>
      <ServicesCta />
    </>
  );
}
