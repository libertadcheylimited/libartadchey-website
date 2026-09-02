export type ServiceSlug =
  | "process-audits"
  | "financial-audits"
  | "risk-management-advisory"
  | "compliance-advisory"
  | "policy-sop-development";

export type Service = {
  slug: ServiceSlug;
  number: string;
  title: string;
  shortTitle: string;
  navLabel: string;
  summary: string;
  problem: string;
  included: string[];
  deliverable: string;
  deliverableTag: string;
  detailLead: string;
  methodology: string[];
  suitedFor: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "process-audits",
    number: "01",
    title: "Process Audits",
    shortTitle: "Process Audits",
    navLabel: "Process Audits",
    summary:
      "Systematic evaluation of operational workflows to find inefficiencies, control gaps, and opportunities to strengthen how work actually gets done.",
    problem:
      "Hidden bottlenecks and redundant steps quietly erode margins and burn team capacity long before they show up in the financials.",
    included: [
      "End-to-end workflow mapping",
      "Root-cause analysis of bottlenecks",
      "Control-gap and handoff review",
      "Practical recommendations for people, process, and tools",
    ],
    deliverable: "Process optimization report with an actionable roadmap",
    deliverableTag: "Actionable roadmap",
    detailLead:
      "We examine how work moves through your organisation so weaknesses are fixed upstream of the financial statements.",
    methodology: [
      "Walk through critical processes with the people who run them",
      "Map controls, handoffs, and decision points where risk concentrates",
      "Trace issues to root causes in people, process, and systems",
      "Prioritise fixes that improve both control and day-to-day efficiency",
    ],
    suitedFor: [
      "Growing SMEs whose processes have outpaced documentation",
      "NGOs and churches needing clearer operational accountability",
      "Corporates preparing for scale, investment, or regulatory scrutiny",
    ],
    outcome:
      "A clear picture of where processes break, why they break, and what to change first.",
  },
  {
    slug: "financial-audits",
    number: "02",
    title: "Financial Audits",
    shortTitle: "Financial Audits",
    navLabel: "Financial Audits",
    summary:
      "IFRS-aligned examination of financial reporting and internal controls so stakeholders can trust the numbers and the story behind them.",
    problem:
      "Mismanagement, leakage, and weak controls leave leadership without a reliable view of fiscal health.",
    included: [
      "Financial statement examination",
      "Internal control evaluation",
      "Ledger and supporting schedule review",
      "Findings with remediation priorities",
    ],
    deliverable: "Audit findings with a focused remediation plan",
    deliverableTag: "Executive summary",
    detailLead:
      "Credible reporting starts with controls that hold. We examine the numbers and the systems that produce them.",
    methodology: [
      "Assess reporting integrity against applicable standards",
      "Test key controls that protect assets and revenue recognition",
      "Investigate variances that signal process or control failure",
      "Translate findings into remediation leadership can act on",
    ],
    suitedFor: [
      "Boards and founders who need independent assurance",
      "Organisations preparing for lenders, investors, or partners",
      "Finance teams strengthening year-end readiness",
    ],
    outcome:
      "Confidence in reporting integrity, plus a practical plan to close control gaps.",
  },
  {
    slug: "risk-management-advisory",
    number: "03",
    title: "Risk Management Advisory",
    shortTitle: "Risk Advisory",
    navLabel: "Risk Advisory",
    summary:
      "Design of internal control frameworks, risk assessments, and mitigation strategies grounded in ISO 31000 thinking.",
    problem:
      "Risk registers that sit on shelves leave organisations exposed when threats become operational or reputational damage.",
    included: [
      "Enterprise and process-level risk assessment",
      "Internal control framework design",
      "Mitigation and monitoring recommendations",
      "Board and management reporting structure",
    ],
    deliverable: "Risk framework and prioritised mitigation plan",
    deliverableTag: "Risk framework",
    detailLead:
      "Risk should enable growth, not just constrain it. We build frameworks leadership can actually use.",
    methodology: [
      "Identify material risks across operations, finance, and compliance",
      "Assess likelihood and impact with the people closest to the work",
      "Design proportionate controls, not theatre",
      "Set monitoring rhythms so risks stay visible between reviews",
    ],
    suitedFor: [
      "Leadership teams professionalising governance",
      "Organisations entering new markets or regulated sectors",
      "Founders who want risk language the board can trust",
    ],
    outcome:
      "A living risk and control approach matched to how your organisation actually operates.",
  },
  {
    slug: "compliance-advisory",
    number: "04",
    title: "Compliance Advisory",
    shortTitle: "Compliance",
    navLabel: "Compliance",
    summary:
      "Guidance so clients meet applicable regulatory requirements, including CAMA and sector-specific rules, without drowning in checklists.",
    problem:
      "Regulatory requirements pile up while teams lack a clear map of what applies, what is missing, and what to fix first.",
    included: [
      "Applicability and gap assessment",
      "Remediation sequencing",
      "Policy alignment to statutory obligations",
      "Practical compliance operating rhythm",
    ],
    deliverable: "Compliance gap assessment with remediation roadmap",
    deliverableTag: "Gap assessment",
    detailLead:
      "Compliance should protect the organisation, not paralyse it. We clarify what matters and how to stay ahead.",
    methodology: [
      "Map obligations that actually apply to your entity and sector",
      "Compare current practice against those requirements",
      "Prioritise gaps by exposure and effort",
      "Embed ownership so compliance does not depend on one person",
    ],
    suitedFor: [
      "Nigerian entities navigating CAMA and related obligations",
      "NGOs and faith organisations tightening governance",
      "Businesses expanding into more regulated activity",
    ],
    outcome:
      "Clarity on obligations, ownership, and the sequence of fixes that reduce exposure.",
  },
  {
    slug: "policy-sop-development",
    number: "05",
    title: "Policy & SOP Development",
    shortTitle: "Policy & SOPs",
    navLabel: "Policy & SOPs",
    summary:
      "Governance structures and standard operating procedures that embed risk management into daily operations.",
    problem:
      "When knowledge lives only in people’s heads, quality and control collapse as the organisation grows or key staff leave.",
    included: [
      "Policy architecture and prioritisation",
      "SOP drafting for critical processes",
      "Roles, approvals, and escalation paths",
      "Handover materials for teams to own the documents",
    ],
    deliverable: "Policy suite and SOPs ready for adoption",
    deliverableTag: "Living playbooks",
    detailLead:
      "Good policy is usable. We write structures people can follow on a busy Tuesday, not binders that gather dust.",
    methodology: [
      "Identify the few policies and SOPs that carry the most risk",
      "Draft in plain language with clear owners and triggers",
      "Align documents to the controls uncovered in audits and advisory work",
      "Support rollout so teams know when and how to use them",
    ],
    suitedFor: [
      "Teams scaling beyond informal habits",
      "Organisations rebuilding after control failures",
      "Leaders who want governance that matches boutique operations",
    ],
    outcome:
      "Documents that encode how work should run, with ownership clear enough to stick.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((service) => service.slug);
