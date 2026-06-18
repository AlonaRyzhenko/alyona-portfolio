"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, BarChart3, Network, CircleCheck, Lightbulb, Sparkles } from "lucide-react";

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
  { num: "1", title: "Design proposal", desc: "Based on research insights and user mental models" },
  { num: "2", title: "Usability session", desc: "Tested with 5–6 internal users, observed task completion" },
  { num: "3", title: "Design revision", desc: "Iterated on navigation, error states, and integrations" },
  { num: "4", title: "Engineering handoff", desc: "Final designs approved with product and engineering" },
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

const impacts = [
  { value: "40%", label: "Reduction in context switching" },
  { value: "2×", label: "Faster document approval cycles" },
  { value: "100%", label: "Regulatory audit trail coverage" },
  { value: "8.4/10", label: "System Usability Scale score" },
];

const responsibilities = [
  "Product Designer",
  "UX Research",
  "Product Analysis",
  "Interaction Design",
  "UI Design",
  "Design System",
  "Workflow Optimization",
  "Usability Testing",
  "Usability Improvements",
  "Prototyping",
];

export default function MessengerCaseStudy() {
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
        <span className="ml-auto text-[#8892a4] text-xs">Messenger · 2026</span>
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
              <motion.p variants={fadeUp} className="text-[#D1D5DB] text-base leading-[1.7]">
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
              <p className="text-[#D1D5DB] text-base leading-[1.6]">
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
              <motion.p variants={fadeUp} className="text-[#D1D5DB] text-base leading-[1.7]">
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
              className="flex flex-col gap-12"
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
                    <motion.div
                      key={f.label}
                      variants={fadeUp}
                      className="p-6 rounded-xl bg-card border border-white/[0.08]"
                    >
                      <h3 className="text-accent text-sm font-medium mb-2">
                        {f.label}
                      </h3>
                      <p className="text-[#D1D5DB] text-base leading-[1.6]">{f.text}</p>
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
              className="flex flex-col gap-12"
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
              className="w-full h-auto block rounded-xl"
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
              className="flex flex-col gap-8"
            >
              <motion.div variants={fadeUp} className="flex flex-col gap-5 mb-8">
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
                      <span className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-medium">
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

              <motion.h2 variants={fadeUp} className="text-3xl font-medium">
                Before &amp; After
              </motion.h2>
              {beforeAfter.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-xl border border-white/[0.08] overflow-hidden bg-bg"
                >
                  <div className="px-5 py-4 bg-[#1a1f2e] border-b border-white/[0.08]">
                    <h3 className="text-sm font-medium text-[#D1D5DB]">{item.title}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
                    <div className="p-6 flex flex-col gap-4">
                      <img src={item.beforeImg} alt={`${item.title} — before`} className="w-full h-auto rounded-lg border border-white/[0.06] block" />
                      <div>
                        <p className="text-[#8892a4] text-xs font-medium uppercase tracking-wider mb-2">Before</p>
                        <p className="text-white/70 text-base leading-[1.6]">{item.before}</p>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col gap-4">
                      <img src={item.afterImg} alt={`${item.title} — after`} className="w-full h-auto rounded-lg border border-white/[0.06] block" />
                      <div>
                        <p className="text-accent text-xs font-medium uppercase tracking-wider mb-2">After</p>
                        <p className="text-white text-base leading-[1.6]">{item.after}</p>
                      </div>
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
