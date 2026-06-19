"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, BarChart3, Network, CircleCheck, Lightbulb, Sparkles, ArrowRight, Zap, TrendingUp, ArrowDown, ArrowUp, Minus } from "lucide-react";

const COVER_IMG = "/messenger.png";

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
    title: "Discovery",
    desc: "Stakeholder interviews, audit of existing workflows, compliance requirements mapping.",
    tags: ["stakeholder interviews", "workflow audit", "compliance mapping"],
  },
  {
    icon: BarChart3,
    title: "Research",
    desc: "Competitive analysis of Slack, Teams, and Signal; usability benchmarking; user interviews.",
    tags: ["competitive analysis", "usability benchmarking", "user interviews"],
  },
  {
    icon: Network,
    title: "Information Architecture",
    desc: "Restructured the navigation model, channel taxonomy, and action hierarchy.",
    tags: ["navigation model", "channel taxonomy", "action hierarchy"],
  },
  {
    icon: CircleCheck,
    title: "Validation",
    desc: "Two rounds of usability testing with 5 participants; iterated on 3 key flows.",
    tags: ["usability testing", "5 participants", "3 key flows"],
  },
];

const researchFindings = [
  {
    label: "Context Switching",
    text: "Traders were switching between 4+ tools to send messages, share documents, and track approvals — leading to missed deadlines and compliance risks.",
  },
  {
    label: "Compliance Gaps",
    text: "Existing tools lacked audit trails and the ability to enforce message retention policies required by financial regulators.",
  },
  {
    label: "Action Friction",
    text: "Approvals and document requests buried in long chat threads — users couldn't quickly surface items that needed their attention.",
  },
];

const competitorRows = [
  { feature: "Audit trail", slack: false, teams: true, signal: false, messenger: true },
  { feature: "Document workflows", slack: false, teams: false, signal: false, messenger: true },
  { feature: "Compliance policies", slack: true, teams: true, signal: false, messenger: true },
  { feature: "Ecosystem integration", slack: false, teams: false, signal: false, messenger: true },
  { feature: "Action-driven UX", slack: false, teams: false, signal: false, messenger: true },
];

const opportunities = [
  {
    num: "01",
    title: "Unified action surface",
    text: "Merge message, document, and verification actions into a single composer — eliminating tool switching.",
  },
  {
    num: "02",
    title: "Compliance by design",
    text: "Embed audit trail visibility and retention policy controls directly into the message UI.",
  },
  {
    num: "03",
    title: "Attention prioritisation",
    text: "Surface actionable items — pending approvals, document requests — in a dedicated triage view.",
  },
];

const insights = [
  "Compliance workflows are separated from chat, requiring users to switch tools.",
  "Security status is not clearly visible. Users lack confidence in document and conversation security.",
  "Administrative control is limited. Enterprise teams need flexible permissions and monitoring tools.",
  "Navigation structure doesn't match user mental models — core actions are buried.",
];

const iterationSteps = [
  { num: "01", title: "Design proposal", desc: "Based on research insights and user mental models" },
  { num: "02", title: "Usability session", desc: "Tested with 5–6 internal users, observed task completion" },
  { num: "03", title: "Design revision", desc: "Iterated on navigation, error states, and integrations" },
  { num: "04", title: "Engineering handoff", desc: "Final designs approved with product and engineering" },
];

const beforeAfter = [
  {
    title: "Landing screen",
    beforeImg: "/landing-before.png",
    afterImg: "/landing-after.png",
    before: "Flat list of chats with no priority or action indicators.",
    after: "Action-first layout with triage inbox, pinned chats, and status indicators.",
  },
  {
    title: "Trading room",
    beforeImg: "/trading-before.png",
    afterImg: "/trading-after.png",
    before: "Generic chat interface — no market context, no linked assets.",
    after: "Contextual sidebar with linked instruments, latest prices, and quick actions.",
  },
  {
    title: "Document sharing",
    beforeImg: "/docsharing-before.png",
    afterImg: "/docsharing-after.png",
    before: "File attachments with no workflow — recipient had no clear next action.",
    after: "Structured document cards with review/sign CTA embedded in the message.",
  },
];

const tasks = [
  { task: "Find a contact and send a message", s1: "failed", s2: "passed" },
  { task: "Create a trading room with members", s1: "partial", s2: "passed" },
  { task: "Share a document from Drive within chat", s1: "failed", s2: "passed" },
  { task: "Upload a file to a conversation", s1: "failed", s2: "passed" },
  { task: "Check if a message was delivered", s1: "failed", s2: "passed" },
];

const keyFindings = [
  { title: "Navigation confusion.", text: "IA restructured — Channels and Contacts surfaced at the first navigation level." },
  { title: "Trading room discoverability.", text: "Room creation surfaced as a primary action with clear naming and member roles." },
  { title: "Drive integration missing.", text: "Drive panel integrated directly into conversation — search, select, and attach inline." },
  { title: "Delivery confirmation.", text: "Read receipts and delivery indicators added to all messages." },
];

const impacts = [
  {
    icon: Zap,
    title: "Workflow Efficiency",
    text: "Integrated document and transaction actions directly into conversations — users no longer need to switch between Messenger, Drive, and Sign to complete a single workflow.",
    badge: "context switching",
    trend: "down",
  },
  {
    icon: Sparkles,
    title: "User Experience",
    text: "Restructured navigation and explicit error states resolved the most critical usability gaps — key actions are now findable without guidance, confirmed in usability sessions.",
    badge: "task clarity",
    trend: "up",
  },
  {
    icon: TrendingUp,
    title: "Product Value",
    text: "Permission-based trading rooms and embedded document workflows created a compliance-ready communication layer aligned with enterprise security and audit requirements.",
    badge: "enterprise readiness",
    trend: "up",
  },
  {
    icon: Lightbulb,
    title: "Key Learning",
    text: "Designing for regulated environments means every UX decision has a security consequence — requiring continuous alignment with product, compliance, and engineering throughout delivery.",
    badge: "cross-team alignment",
    trend: "equal",
  },
];

const responsibilities = [
  "Product Designer",
  "UX Research",
  "Interaction Design",
  "UI Design",
  "Design System",
  "Workflow Optimization",
  "Usability Testing",
];

export default function MessengerCaseStudy() {
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
          Messenger · 2026
        </button>
      </div>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img
            src={COVER_IMG}
            alt="Messenger"
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
              Messenger
            </h1>
            <p className="text-[#d1d5db] text-xl leading-[1.6] max-w-[640px]">
              Designing a secure, action-driven communication platform for
              regulated trading — integrating messaging, document workflows, and
              verification into one coherent experience.
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
              <motion.p variants={fadeUp} className="text-[#D1D5DB] text-base leading-[1.7] max-w-[68ch]">
                Messenger is a secure communication platform for regulated trading environments. It connects messaging directly to document management, verification workflows, and transaction records — so conversations stay tied to trading documentation and compliance, instead of living in a separate chat tool.
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
              <motion.div variants={stagger} className="flex flex-wrap gap-2">
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

            {/* Problem statement — card matching research findings style */}
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-xl bg-card border border-white/[0.08]"
            >
              <h3 className="text-accent text-sm font-medium mb-2">
                Problem statement
              </h3>
              <p className="text-[#D1D5DB] text-base leading-[1.6] max-w-[68ch]">
                Trading teams rely on messaging to coordinate deals and exchange sensitive documents — but existing tools lack compliance workflows, audit visibility, and integration with trading systems. This forces users to switch between multiple tools to complete a single workflow.
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
              <motion.p variants={fadeUp} className="text-[#D1D5DB] text-base leading-[1.7] max-w-[68ch]">
                Redesign Messenger to support secure, compliant communication workflows — with document sharing, action discoverability, and security visibility built directly into the conversation layer.
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
                      <h3 className="text-base font-medium text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#D1D5DB] text-sm leading-[1.6]">{step.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {step.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[#9CA3AF] text-xs">
                          {tag}
                        </span>
                      ))}
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
              className="flex flex-col gap-16"
            >
              <motion.div variants={stagger} className="flex flex-col gap-5">
                <motion.h2 variants={fadeUp} className="text-3xl font-medium text-white">
                  Research Approach
                </motion.h2>
                <motion.p variants={fadeUp} className="text-[#D1D5DB] text-base leading-[1.7] max-w-[880px]">
                  To understand where Messenger was failing users in regulated trading environments, I audited the existing product, reviewed compliance requirements, and benchmarked competitor tools.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col gap-3">
                  <h3 className="text-[#9CA3AF] text-sm font-medium">Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Compliance review", "Competitor analysis", "Workflow audit"].map((m) => (
                      <span key={m} className="px-3 py-1.5 rounded-lg bg-card border border-white/[0.08] text-white text-sm">
                        {m}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={stagger} className="flex flex-col gap-6">
                <motion.h2 variants={fadeUp} className="text-3xl font-medium">
                  Key findings
                </motion.h2>
                <div className="flex flex-col gap-4">
                  {researchFindings.map((f) => (
                    <motion.div key={f.label} variants={fadeUp} className="p-6 rounded-xl bg-card border border-white/[0.08] flex items-start gap-4">
                      <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-accent text-sm font-medium mb-2">{f.label}</h3>
                        <p className="text-[#D1D5DB] text-base leading-[1.6] max-w-[68ch]">{f.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Competitive analysis */}
              <motion.div variants={stagger}>
                <motion.h2 variants={fadeUp} className="text-3xl font-medium mb-6">
                  Competitive analysis
                </motion.h2>
                <motion.p variants={fadeUp} className="text-[#D1D5DB] text-base leading-[1.7] max-w-[880px] mb-10">
                  Existing tools optimize for speed or compliance — but none combine both with integrated document workflows.
                </motion.p>
                <motion.div variants={fadeUp} className="rounded-xl p-[1px] bg-gradient-to-r from-accent to-accent/20 mb-10 w-fit max-w-full">
                  <div className="rounded-[11px] bg-card px-5 py-4 flex items-center gap-3">
                    <Lightbulb className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-white text-base">Combine secure messaging + document workflows.</span>
                  </div>
                </motion.div>
                <h3 className="text-[#9CA3AF] text-sm font-medium mb-4">Competitor Comparison</h3>
                <motion.div
                  variants={fadeUp}
                  className="rounded-xl border border-white/[0.08] overflow-hidden"
                >
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.08] bg-card">
                        <th className="text-left px-5 py-4 text-[#8892a4] font-medium">
                          Feature
                        </th>
                        {["Slack", "Teams", "Signal", "Messenger"].map((h) => (
                          <th
                            key={h}
                            className={`text-center px-5 py-4 font-medium ${
                              h === "Messenger" ? "text-accent" : "text-[#8892a4]"
                            }`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {competitorRows.map((row, i) => (
                        <tr
                          key={row.feature}
                          className={`border-b border-white/[0.06] last:border-0 ${
                            i % 2 === 0 ? "" : "bg-card/40"
                          }`}
                        >
                          <td className="px-5 py-3.5 text-[#D1D5DB]">{row.feature}</td>
                          {[row.slack, row.teams, row.signal, row.messenger].map(
                            (val, ci) => (
                              <td key={ci} className="text-center px-5 py-3.5">
                                {val ? (
                                  <span
                                    className={`text-base ${
                                      ci === 3 ? "text-accent" : "text-green-400/70"
                                    }`}
                                  >
                                    ✓
                                  </span>
                                ) : (
                                  <span className="text-white/20">✕</span>
                                )}
                              </td>
                            )
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </motion.div>
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
              className="flex flex-col gap-16"
            >
              {/* Insights */}
              <div className="flex flex-col gap-4 max-w-[880px]">
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
                        <div className="rounded-[11px] bg-bg px-4 py-4 flex items-center gap-4">
                          <Lightbulb className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={1.5} />
                          <p className="text-[#D1D5DB] text-base leading-[1.6]">{text}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Opportunities */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#9CA3AF] text-sm font-medium">Opportunities</h3>
                <div className="flex flex-col gap-6">
                  {opportunities.map((o) => (
                    <motion.div key={o.num} variants={fadeUp} className="flex items-start gap-4">
                      <span className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-medium flex-shrink-0">
                        {o.num}
                      </span>
                      <div>
                        <h4 className="text-white text-lg font-medium mb-1">{o.title}</h4>
                        <p className="text-[#D1D5DB] text-base leading-[1.6]">{o.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <motion.div variants={fadeUp} className="rounded-xl p-[1px] bg-gradient-to-r from-accent/60 to-transparent">
                <div className="rounded-[11px] bg-[#111827]/95 px-6 py-5 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-white text-base leading-[1.6]">
                    Research revealed that improving security visibility and embedding compliance workflows into messaging were the most critical opportunities to support enterprise adoption.
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="section-padding bg-bg border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <SectionLabel label="Information Architecture" />
          <div className="max-w-[1068px] ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-[#D1D5DB] text-base leading-[1.7] max-w-[880px]"
            >
              To support complex trading workflows, I structured Messenger into clear communication, document, and transaction modules.
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
              src="/messenger-ia.png"
              alt="Messenger information architecture — site map of communication, document, and transaction modules"
              className="w-full h-auto block rounded-xl max-w-[920px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Validation — Before & After */}
      <section className="section-padding bg-card border-t border-white/[0.06]">
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
                <p className="text-[#D1D5DB] text-base leading-[1.7] max-w-[880px]">
                  To validate design decisions, I conducted iterative usability sessions with 5–6 internal users throughout the process. Sessions focused on core workflows — navigation, document sharing, and trading room access.
                </p>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#9CA3AF] text-sm font-medium">Methods</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Usability sessions", "Iterative testing", "Design review"].map((m) => (
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
                  <p className="text-[#D1D5DB] text-base leading-[1.7] max-w-[880px]">
                    Each design proposal was tested, revised, and retested before engineering handoff.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {iterationSteps.map((step) => (
                    <div key={step.num} className="p-6 rounded-xl bg-bg border border-white/[0.08] flex flex-col gap-4">
                      <span className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-medium">
                        {step.num}
                      </span>
                      <div>
                        <h3 className="text-white text-lg font-medium mb-1">{step.title}</h3>
                        <p className="text-[#D1D5DB] text-sm leading-[1.6]">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <h2 className="text-3xl font-medium text-white">Before &amp; After</h2>
                  <p className="text-[#D1D5DB] text-base leading-[1.7] max-w-[880px]">
                    Three key changes — navigation structure, trading room design, and Drive integration.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
              {beforeAfter.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg"
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
                        className="w-full h-auto rounded-lg border border-white/[0.06] block cursor-zoom-in transition-opacity hover:opacity-90"
                      />
                      <p className="text-white/70 text-base leading-[1.6]">{item.before}</p>
                    </div>
                    <div className="p-6 flex flex-col gap-5">
                      <p className="text-accent text-sm font-medium uppercase tracking-wider">After</p>
                      <img
                        src={item.afterImg}
                        alt={`${item.title} — after`}
                        onClick={() => setLightboxImg(item.afterImg)}
                        className="w-full h-auto rounded-lg border border-white/[0.06] block cursor-zoom-in transition-opacity hover:opacity-90"
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
                    <p className="text-[#D1D5DB] text-base leading-[1.7] max-w-[880px]">
                      5 tasks tested across 2 sessions with 5–6 internal users.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] overflow-hidden">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/[0.08] bg-bg">
                        <th className="px-5 py-4 text-[#8892a4] font-medium">Task</th>
                        <th className="px-5 py-4 text-[#8892a4] font-medium text-center">Session 1</th>
                        <th className="px-5 py-4 text-[#8892a4] font-medium text-center">Session 2</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map((row, i) => (
                        <tr key={row.task} className={`border-b border-white/[0.06] last:border-0 ${i % 2 === 0 ? "" : "bg-bg/40"}`}>
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
                  <div className="flex flex-col gap-3">
                    {keyFindings.map((f) => (
                      <div key={f.title} className="p-5 rounded-xl bg-bg border border-white/[0.08] flex items-start gap-4">
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

              <motion.div variants={fadeUp} className="rounded-xl p-[1px] bg-gradient-to-r from-accent/60 to-transparent">
                <div className="rounded-[11px] bg-[#111827]/95 px-6 py-5 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-white text-base leading-[1.6]">
                    Sessions confirmed that all 5 critical usability gaps were resolved between session 1 and session 2 — navigation, trading room access, document sharing, file upload, and delivery confirmation. All tested users completed core tasks without guidance in the final iteration.
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
          src="/messenger-showcase.png"
          alt="Messenger product showcase"
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
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {impacts.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="p-6 rounded-xl bg-bg border border-white/[0.08] flex items-start gap-5"
                  >
                    <span className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </span>
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-white text-base font-medium">{item.title}</h3>
                        <span className="px-2 py-0.5 rounded text-xs bg-accent/10 text-accent font-medium">{item.badge}</span>
                      </div>
                      <p className="text-[#D1D5DB] text-sm leading-[1.6]">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
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
          <Link
            href="/work/sign"
            className="flex items-center gap-2 text-[#8892a4] text-sm hover:text-white transition-colors"
          >
            Next: Sign
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

      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <img
            src={lightboxImg}
            alt="Enlarged screenshot"
            className="max-w-[95vw] max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
          />
        </div>
      )}
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
