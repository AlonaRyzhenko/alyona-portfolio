"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ScanSearch, Frame, CircleCheck } from "lucide-react";

const COVER_IMG = "/sign.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const processSteps = [
  {
    icon: Search,
    title: "Discover",
    desc: "Mapped the agreement ecosystem, workflows, and platform integrations.",
    tags: ["ecosystem mapping", "workflow audit", "stakeholders"],
  },
  {
    icon: ScanSearch,
    title: "Research & Insights",
    desc: "Analyzed trader workflows and benchmarked enterprise agreement tools.",
    tags: ["workflow analysis", "competitor review", "user needs"],
  },
  {
    icon: Frame,
    title: "Concept & Interaction Design",
    desc: "Designed structured agreement flows and role-aware interactions.",
    tags: ["interaction design", "IA refinement", "workflow design"],
  },
  {
    icon: CircleCheck,
    title: "Validation",
    desc: "Refined solutions through stakeholder reviews and iterative testing.",
    tags: ["usability testing", "design iteration", "engineering alignment"],
  },
];

const researchFindings = [
  {
    label: "Static documents, dynamic process",
    text: "Agreements were created as static PDFs traded over email — no version control, no workflow, no audit trail. Legal teams maintained spreadsheets to track status.",
  },
  {
    label: "Multi-party complexity",
    text: "Commodity agreements often involve 3+ parties with different permissions: initiator, reviewer, approver, and external counterparty — all with different views needed.",
  },
  {
    label: "Compliance & governance",
    text: "Financial regulators required immutable signing records and role-based access controls — features that off-the-shelf tools couldn't provide for the trading context.",
  },
];

const opportunities = [
  {
    num: "01",
    title: "Lifecycle-driven workflows",
    text: "Transform agreements from documents into structured, stateful objects that progress through a defined lifecycle with clear ownership at each stage.",
  },
  {
    num: "02",
    title: "Role-based permission model",
    text: "Design a granular permission system that gives each party the right view and actions at the right moment in the workflow.",
  },
  {
    num: "03",
    title: "Embedded governance",
    text: "Build compliance controls — version history, signing certificates, retention policies — directly into the product UX rather than as an afterthought.",
  },
];

const beforeAfter = [
  {
    title: "Agreement creation",
    before: "Free-form text editor with no template system — every agreement started from scratch.",
    after: "Structured template library with field-level permissions and pre-filled metadata from the ecosystem.",
  },
  {
    title: "Multi-party review",
    before: "Email threads with attached PDFs; no clear indication of who had reviewed or approved.",
    after: "Sequential and parallel review lanes with real-time status indicators and comment threads per clause.",
  },
  {
    title: "Signing & completion",
    before: "DocuSign integration via redirect — users left the platform and lost context.",
    after: "Native signing flow with biometric verification integrated via Verifier+ — end-to-end in-platform.",
  },
];

const impacts = [
  { value: "60%", label: "Faster agreement cycle time" },
  { value: "3×", label: "Increase in completed workflows" },
  { value: "0", label: "Compliance audit failures post-launch" },
  { value: "9.1/10", label: "Perceived ease of use (SUS)" },
];

const responsibilities = [
  "UX Research",
  "Workflow & System Analysis",
  "Information Architecture",
  "Interaction Design",
  "UI Design",
  "Enterprise Usability Optimization",
];

export default function SignCaseStudy() {
  return (
    <div className="bg-bg text-white min-h-screen">
      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 lg:px-16 py-5 bg-bg/80 backdrop-blur-md border-b border-white/[0.06]">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#8892a4] text-sm hover:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13 8H3M7 4l-4 4 4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Portfolio
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="ml-auto text-[#8892a4] text-sm font-medium hover:text-white transition-colors cursor-pointer"
        >
          Sign · 2026
        </button>
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src={COVER_IMG}
            alt="Sign"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/20" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-16 pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[880px]"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-accent text-sm font-medium">Fintech</span>
              <span className="w-1 h-1 rounded-full bg-accent" />
              <span className="text-accent text-sm font-medium">Enterprise</span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-medium mb-6 leading-[1.1]">
              Sign
            </h1>
            <p className="text-[#d1d5db] text-xl leading-[1.6] max-w-[640px]">
              Transforming static agreements into structured, lifecycle-driven
              workflows for commodities trading — with embedded governance,
              multi-party permissions, and native signing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionLabel label="Overview" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-[1068px] flex flex-col gap-10 ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]"
          >
            {/* About the project */}
            <motion.div variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-medium mb-4">
                About the project
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#D1D5DB] text-base leading-[1.7] max-w-[780px]">
                Sign is an enterprise agreement management platform for regulated trading environments. Teams create, negotiate, approve, and execute agreements — including digital titles — in a secure, auditable workflow, with identity verification, permission governance, and document storage built into the trading ecosystem.
              </motion.p>
            </motion.div>

            {/* My role */}
            <motion.div variants={stagger}>
              <motion.h3
                variants={fadeUp}
                className="text-[#9CA3AF] text-sm font-medium mb-4"
              >
                My role
              </motion.h3>
              <motion.div variants={stagger} className="flex flex-wrap gap-2 max-w-[720px]">
                {responsibilities.map((r) => (
                  <motion.span
                    key={r}
                    variants={fadeUp}
                    className="px-3 py-1.5 rounded-lg bg-card border border-white/[0.08] text-white text-sm"
                  >
                    {r}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Problem statement */}
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-xl bg-card border border-white/[0.08] max-w-[780px]"
            >
              <h3 className="text-accent text-sm font-medium mb-2">Problem statement</h3>
              <p className="text-[#D1D5DB] text-base leading-[1.6]">
                Commodity trading relies on high-risk agreements and complex approval structures, but existing e-signature tools aren't built for trading workflows or compliance-driven execution. Users juggle fragmented systems to manage documents, verify identities, and control access — increasing operational friction and compliance exposure.
              </p>
            </motion.div>

            {/* Design goal */}
            <motion.div variants={stagger}>
              <motion.h3
                variants={fadeUp}
                className="text-[#9CA3AF] text-sm font-medium mb-3"
              >
                Design goal
              </motion.h3>
              <motion.p variants={fadeUp} className="text-[#D1D5DB] text-base leading-[1.7] max-w-[780px]">
                Design a unified agreement workflow that reduces system switching, clarifies permission ownership, and supports secure, scalable document execution in enterprise trading environments.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionLabel label="Process" />
          <div className="max-w-[1068px] ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    className="p-6 rounded-xl bg-bg border border-white/[0.08] flex flex-col gap-4"
                  >
                    <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-white mb-2">{step.title}</h3>
                      <p className="text-[#D1D5DB] text-sm leading-[1.6] mb-3">{step.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-white text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="section-padding border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionLabel label="Research" />
          <div className="max-w-[1068px] ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-medium">
                Key findings
              </motion.h2>
              {researchFindings.map((f) => (
                <motion.div
                  key={f.label}
                  variants={fadeUp}
                  className="p-6 rounded-xl bg-card border border-white/[0.08]"
                >
                  <h3 className="text-accent text-sm font-medium mb-2">{f.label}</h3>
                  <p className="text-white/70 text-base leading-[1.6]">{f.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insights & Opportunities */}
      <section className="section-padding bg-card border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionLabel label="Insights & Opportunities" />
          <div className="max-w-[1068px] ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid sm:grid-cols-3 gap-6"
            >
              {opportunities.map((o) => (
                <motion.div
                  key={o.num}
                  variants={fadeUp}
                  className="p-6 rounded-xl bg-bg border border-white/[0.08] flex flex-col gap-4"
                >
                  <span className="text-accent/60 text-3xl font-bold leading-none">
                    {o.num}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-white mb-2">
                      {o.title}
                    </h3>
                    <p className="text-[#8892a4] text-sm leading-[1.6]">{o.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Validation — Before & After */}
      <section className="section-padding border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionLabel label="Validation" />
          <div className="max-w-[1068px] ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-8"
            >
              <motion.h2 variants={fadeUp} className="text-3xl font-medium">
                Before &amp; After
              </motion.h2>
              {beforeAfter.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-xl border border-white/[0.08] overflow-hidden"
                >
                  <div className="px-5 py-4 bg-card border-b border-white/[0.08]">
                    <h3 className="text-sm font-medium text-white/60">{item.title}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
                    <div className="p-6">
                      <p className="text-[#8892a4] text-xs font-medium uppercase tracking-wider mb-3">
                        Before
                      </p>
                      <p className="text-white/70 text-base leading-[1.6]">{item.before}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-accent text-xs font-medium uppercase tracking-wider mb-3">
                        After
                      </p>
                      <p className="text-white text-base leading-[1.6]">{item.after}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-card border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionLabel label="Impact & Outcomes" />
          <div className="max-w-[1068px] ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {impacts.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="p-6 rounded-xl bg-bg border border-white/[0.08] text-center"
                >
                  <div className="text-4xl font-bold text-accent mb-2">
                    {item.value}
                  </div>
                  <div className="text-[#8892a4] text-sm leading-[1.4]">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/work/messenger"
            className="flex items-center gap-2 text-[#8892a4] text-sm hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13 8H3M7 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Previous: Messenger
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-[#8892a4] text-sm hover:text-white transition-colors"
          >
            Back to Portfolio
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-[#8892a4] text-sm font-normal whitespace-nowrap">
        {label}
      </span>
      <span className="flex-1 h-px bg-white/[0.06]" />
    </div>
  );
}
