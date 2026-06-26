"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ScanSearch, Frame, CircleCheck, ArrowRight, Lightbulb, Sparkles, UserCheck, Zap, TrendingUp, ShieldCheck, ArrowDown, ArrowUp } from "lucide-react";

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
    title: "Concept & Design",
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

const researchMethods = [
  "Workflow Analysis",
  "Stakeholder Collaboration",
  "System Documentation Review",
];


const researchFocus = [
  { num: "01", title: "Agreement Lifecycle Mapping", text: "How agreements move from draft to renewal." },
  { num: "02", title: "Governance & Permission Analysis", text: "Roles, approval ownership, and access risks." },
  { num: "03", title: "Document Structure Audit", text: "How static templates limit automation." },
  { num: "04", title: "Platform Dependency Mapping", text: "How external tools fragment workflows." },
  { num: "05", title: "Competitive Benchmarking", text: "Gaps in enterprise contract tools." },
];

const insights = [
  "Lack of lifecycle visibility slowed agreement execution and increased coordination effort.",
  "Governance was unclear — access and approval ownership lacked visibility.",
  "Static formats limited automation, tracking, and execution across systems.",
];

const iterationSteps = [
  { num: "01", title: "Design proposal", text: "Based on research and governance requirements" },
  { num: "02", title: "Team review", text: "Reviewed with product, compliance, and engineering" },
  { num: "03", title: "Design revision", text: "Iterated on ownership, signing flows, and field logic" },
  { num: "04", title: "Engineering handoff", text: "Final designs approved and handed off" },
];

const beforeAfter = [
  {
    title: "Template creation",
    beforeImg: "/sign-template-before.png",
    afterImg: "/sign-template-after.png",
    before: "Static template — no conditional clauses, dynamic roles, or automated date logic.",
    after: "Reusable templates with conditional clauses, dynamic roles, and automated date logic.",
  },
  {
    title: "Agreement creation",
    beforeImg: "/sign-agreement-before.png",
    afterImg: "/sign-agreement-after.png",
    before: "No ownership indicators or signing order — responsibilities unclear to all parties.",
    after: "Ownership, roles, and signing order visible — responsibilities clear at every step.",
  },
  {
    title: "All Documents table",
    beforeImg: "/sign-documents-before.png",
    afterImg: "/sign-documents-after.png",
    before: "Only Template and Agreement tables — no lifecycle states, activity indicators, or ownership tracking.",
    after: "Full lifecycle states (Draft → In review → Signed) and activity indicators visible.",
  },
];

const tasks = [
  { task: "Create a new agreement", s1: "partial", s2: "passed" },
  { task: "Create a Digital Title template", s1: "failed", s2: "passed" },
  { task: "Add fields and adjust view agreement", s1: "partial", s2: "passed" },
  { task: "Find agreement by status in All Documents", s1: "failed", s2: "passed" },
  { task: "Sign an agreement", s1: "partial", s2: "passed" },
];

const keyFindings = [
  { title: "Ownership and signing order unclear.", text: "Surfaced in the agreement panel during testing." },
  { title: "Template creation too static.", text: "Rebuilt with conditional, role-aware configuration." },
  { title: "Document table lacked lifecycle visibility.", text: "States and activity indicators added to All Documents." },
  { title: "Concurrent signing conflicts.", text: "Fields and parties redesigned as independent records." },
];

const productImpact = [
  "Enabled lifecycle tracking across agreements",
  "Standardized document configuration patterns",
  "Reduced reliance on external coordination tools",
  "Improved confidence in secure agreement execution",
];

const outcomes = [
  { icon: UserCheck, title: "Stronger governance visibility", text: "Multi-party agreements became easier to coordinate as roles and status stayed visible throughout the workflow.", badge: "coordination effort", trend: "down" },
  { icon: Zap, title: "Faster agreement execution", text: "Setup and approval moved quicker once templates and actions were built into the flow.", badge: "workflow speed", trend: "up" },
  { icon: TrendingUp, title: "Improved operational oversight", text: "Teams could track active agreements and spot pending actions without manual chasing.", badge: "execution visibility", trend: "up" },
  { icon: ShieldCheck, title: "Reduced execution risk", text: "Fewer approvals slipped through as responsibility and confirmation became explicit.", badge: "approval failures", trend: "down" },
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
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
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
      <section className="section-padding bg-bg border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionLabel label="Research" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-[1068px] flex flex-col gap-16 ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]"
          >
            {/* Research Approach */}
            <div className="flex flex-col gap-5">
              <motion.h2 variants={fadeUp} className="text-3xl font-medium">
                Research Approach
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#D1D5DB] text-base leading-[1.7] max-w-[780px]">
                To understand where agreement workflows were failing enterprise trading teams, I analyzed document lifecycle complexity, governance structures, and system dependencies across the trading platform.
              </motion.p>
              <motion.div variants={stagger} className="max-w-[720px]">
                <motion.h3 variants={fadeUp} className="text-[#9CA3AF] text-sm font-medium mb-3">
                  Methods
                </motion.h3>
                <motion.div variants={stagger} className="flex flex-wrap gap-2">
                  {researchMethods.map((m) => (
                    <motion.span
                      key={m}
                      variants={fadeUp}
                      className="px-3 py-1.5 rounded-lg bg-card border border-white/[0.08] text-white text-sm"
                    >
                      {m}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="rounded-xl p-[1px] bg-gradient-to-r from-accent to-accent/20 max-w-[780px]">
              <div className="rounded-[11px] bg-card px-5 py-4 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
                <span className="text-white text-base">Due to regulatory sensitivity and the product's early stage, direct user access was limited — research relied primarily on workflow analysis, stakeholder collaboration, and system documentation review.</span>
              </div>
            </motion.div>

            {/* Research Focus */}
            <div>
              <motion.h2 variants={fadeUp} className="text-3xl font-medium mb-8">
                Research Focus
              </motion.h2>
              <div className="flex flex-col gap-6 max-w-[780px]">
                {researchFocus.map((f) => (
                  <motion.div key={f.num} variants={fadeUp} className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-medium flex-shrink-0">
                      {f.num}
                    </span>
                    <div>
                      <h4 className="text-white text-lg font-medium mb-1">{f.title}</h4>
                      <p className="text-[#D1D5DB] text-base leading-[1.6]">{f.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Insights */}
            <div className="flex flex-col gap-5">
              <motion.h2 variants={fadeUp} className="text-3xl font-medium">
                Key Insights
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#D1D5DB] text-base leading-[1.7] max-w-[780px]">
                These insights shaped the core design principles and solution direction.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col gap-4 max-w-[780px]">
                <h3 className="text-[#9CA3AF] text-sm font-medium">Insights</h3>
                <div className="flex flex-col gap-4">
                  {insights.map((text, i) => {
                    const isFirst = i === 0;
                    const isLast = i === insights.length - 1;
                    const grad = isFirst
                      ? "bg-gradient-to-b from-accent/40 to-white/[0.08]"
                      : isLast
                      ? "bg-gradient-to-t from-accent/40 to-white/[0.08]"
                      : "bg-white/[0.08]";
                    return (
                      <motion.div key={text} variants={fadeUp} className={`rounded-xl p-[1px] ${grad}`}>
                        <div className="rounded-[11px] bg-card px-5 py-4 flex items-center gap-4">
                          <Lightbulb className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
                          <p className="text-white text-base leading-[1.6]">{text}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="section-padding bg-card border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionLabel label="Information Architecture" />
          <div className="max-w-[1068px] ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-[#D1D5DB] text-base leading-[1.7] max-w-[780px]"
            >
              Structured Sign around 6 core modules — agreements, templates, documents, digital titles, notifications, and contacts — with clear lifecycle entry points.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mt-24 ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]"
          >
            <img
              src="/sign-information-architecture.png"
              alt="Sign information architecture — site map of agreements, templates, documents, digital titles, notifications, and contacts modules"
              className="w-full h-auto block rounded-xl max-w-[920px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Validation — Before & After */}
      <section className="section-padding bg-bg border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionLabel label="Validation" />
          <div className="max-w-[1068px] ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-16"
            >
              <motion.div variants={fadeUp} className="flex flex-col gap-5">
                <h2 className="text-3xl font-medium text-white">Validation Approach</h2>
                <p className="text-[#D1D5DB] text-base leading-[1.7] max-w-[780px]">
                  Design decisions for Sign were validated collaboratively — each solution reviewed with product and engineering before development. Key flows were tested with 5–6 internal users across 2 sessions.
                </p>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#9CA3AF] text-sm font-medium">Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Usability Sessions", "Design Review", "Engineering Collaboration"].map((m) => (
                      <span key={m} className="px-3 py-1.5 rounded-lg bg-[#1a1f2e] border border-white/[0.08] text-white text-sm">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <h2 className="text-3xl font-medium text-white">Iteration Process</h2>
                  <p className="text-[#D1D5DB] text-base leading-[1.7] max-w-[780px]">
                    Each proposal was reviewed, revised, and approved before engineering handoff.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {iterationSteps.map((step) => (
                    <div key={step.num} className="p-6 rounded-xl bg-card border border-white/[0.08] flex flex-col gap-4">
                      <span className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-medium">
                        {step.num}
                      </span>
                      <div>
                        <h3 className="text-white text-lg font-medium mb-1">{step.title}</h3>
                        <p className="text-[#D1D5DB] text-sm leading-[1.6]">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <h2 className="text-3xl font-medium text-white">Before &amp; After</h2>
                  <p className="text-[#D1D5DB] text-base leading-[1.7] max-w-[780px]">
                    Three key changes — agreement structure, template logic, and document lifecycle.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {beforeAfter.map((item) => (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      className="rounded-xl border border-white/[0.08] overflow-hidden bg-card"
                    >
                      <div className="px-5 py-4 border-b border-white/[0.08]">
                        <h3 className="text-base font-medium text-white">{item.title}</h3>
                      </div>
                      <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
                        <div className="p-6 flex flex-col gap-5">
                          <p className="text-[#8892a4] text-sm font-medium uppercase tracking-wider">Before</p>
                          <img
                            src={item.beforeImg}
                            alt={`${item.title} — before`}
                            onClick={() => setLightboxImg(item.beforeImg)}
                            className="w-full h-auto rounded-lg border border-white/[0.06] block cursor-zoom-in transition-all duration-500 ease-out hover:opacity-90 hover:scale-[1.01] hover:border-white/15"
                          />
                          <p className="text-white/70 text-base leading-[1.6]">{item.before}</p>
                        </div>
                        <div className="p-6 flex flex-col gap-5">
                          <p className="text-accent text-sm font-medium uppercase tracking-wider">After</p>
                          <img
                            src={item.afterImg}
                            alt={`${item.title} — after`}
                            onClick={() => setLightboxImg(item.afterImg)}
                            className="w-full h-auto rounded-lg border border-white/[0.06] block cursor-zoom-in transition-all duration-500 ease-out hover:opacity-90 hover:scale-[1.01] hover:border-white/15"
                          />
                          <p className="text-white text-base leading-[1.6]">{item.after}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-medium text-white">Tasks &amp; Findings</h2>
                    <p className="text-[#D1D5DB] text-base leading-[1.7] max-w-[780px]">
                      5 tasks tested across 2 sessions with 5–6 internal users.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] overflow-hidden">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/[0.08] bg-card">
                        <th className="px-5 py-4 text-[#8892a4] font-medium">Task</th>
                        <th className="px-5 py-4 text-[#8892a4] font-medium text-center">Session 1</th>
                        <th className="px-5 py-4 text-[#8892a4] font-medium text-center">Session 2</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map((row, i) => (
                        <tr key={row.task} className={`border-b border-white/[0.06] last:border-0 ${i % 2 === 0 ? "" : "bg-card/40"}`}>
                          <td className="px-5 py-4 text-[#D1D5DB]">{row.task}</td>
                          {[row.s1, row.s2].map((status, ci) => (
                            <td key={ci} className="px-5 py-4 text-center">
                              <span className={`inline-block px-2.5 py-1 rounded text-xs font-medium uppercase tracking-wider ${
                                status === "passed"
                                  ? "bg-accent/15 text-accent"
                                  : status === "partial"
                                  ? "bg-yellow-500/15 text-yellow-400"
                                  : "bg-red-500/15 text-red-400"
                              }`}>
                                {status}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[#9CA3AF] text-sm font-medium">Key Findings &amp; Resolutions</h3>
                  <div className="flex flex-col gap-3 max-w-[520px]">
                    {keyFindings.map((f) => (
                      <div key={f.title} className="p-5 rounded-xl bg-card border border-white/[0.08] flex items-start gap-4">
                        <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                        <div>
                          <p className="text-accent text-sm font-medium mb-1">{f.title}</p>
                          <p className="text-[#D1D5DB] text-base leading-[1.6]">{f.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-xl p-[1px] bg-gradient-to-r from-accent/60 to-transparent max-w-[780px]">
                <div className="rounded-[11px] bg-[#111827]/95 px-6 py-5 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-white text-base leading-[1.6]">
                    All critical findings were addressed between session 1 and session 2 — ownership visibility, template flexibility, and lifecycle tracking confirmed as resolved. All tested users completed core tasks without guidance in the final iteration.
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="border-t border-white/[0.06]">
        <motion.img
          src="/sign-showcase.png"
          alt="Sign product showcase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="w-full h-auto block"
        />
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
              className="flex flex-col gap-16"
            >
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-medium text-white">Impact</h2>
                <p className="text-[#D1D5DB] text-base leading-[1.7] max-w-[780px]">
                  The redesign addressed core governance and execution gaps identified during research — tested collaboratively with product and engineering throughout delivery.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[#9CA3AF] text-sm font-medium">Key Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {outcomes.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        variants={fadeUp}
                        className="p-6 rounded-xl bg-bg border border-white/[0.08] flex flex-col gap-4"
                      >
                        <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                        </span>
                        <div className="flex flex-col gap-2">
                          <h3 className="text-white text-base font-medium">{item.title}</h3>
                          <p className="text-[#D1D5DB] text-sm leading-[1.6]">{item.text}</p>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-accent/10 text-accent font-medium w-fit mt-1">
                            {item.trend === "down" ? <ArrowDown className="w-3 h-3" /> : <ArrowUp className="w-3 h-3" />}
                            {item.badge}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[#9CA3AF] text-sm font-medium">Product &amp; Design Impact</h3>
                <div className="flex flex-col gap-3 max-w-[526px]">
                  {productImpact.map((item) => (
                    <div key={item} className="p-5 rounded-xl bg-bg border border-white/[0.08] flex items-start gap-4">
                      <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-[#D1D5DB] text-base leading-[1.6]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div variants={fadeUp} className="rounded-xl p-[1px] bg-gradient-to-r from-accent/60 to-transparent max-w-[780px]">
                <div className="rounded-[11px] bg-[#111827]/95 px-6 py-5 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-white text-base leading-[1.6]">This project demonstrated how structured workflows and governance-aware design can transform static document processes into scalable enterprise agreement systems.</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-row items-center justify-between gap-4">
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

      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            onClick={() => setLightboxImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.img
              src={lightboxImg}
              alt="Enlarged screenshot"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[95vw] max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-[#E5E7EB] text-sm font-normal whitespace-nowrap">
        {label}
      </span>
      <span className="flex-1 h-px bg-white/[0.06]" />
    </div>
  );
}
