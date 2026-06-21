"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MESSENGER_IMG = "/messenger.png";
const SIGN_IMG = "/sign.png";

const projects = [
  {
    id: "messenger",
    category: ["Fintech", "Enterprise"],
    title: "Messenger",
    tagline: "Secure communication platform for regulated trading.",
    description:
      "Integrated messaging, document workflows, and verification into a secure, action-driven communication platform.",
    tags: ["secure messaging", "workflow integration", "compliance UX", "design system", "enterprise platform"],
    href: "/work/messenger",
    img: MESSENGER_IMG,
  },
  {
    id: "sign",
    category: ["Fintech", "Enterprise"],
    title: "Sign",
    tagline: "Agreement workflow platform for commodities trading.",
    description:
      "Transformed static agreements into structured, lifecycle-driven workflows with embedded governance and automation.",
    tags: ["agreement workflows", "governance & permissions", "document systems", "design system", "enterprise UX"],
    href: "/work/sign",
    img: SIGN_IMG,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#080e17]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#e5e7eb] text-sm font-normal">Projects</span>
          <span className="flex-1 h-px bg-white/[0.06]" />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-[#d1d5db] text-lg max-w-[780px] mb-16 ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]"
        >
          Two fintech case studies for enterprise clients — research, system
          design, and end-to-end delivery.
        </motion.p>

        {/* Cards */}
        <div className="flex flex-col gap-6 max-w-[1068px] ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12 }}
            >
              <Link href={p.href} className="group block">
                <div className="relative rounded-2xl bg-[#111827] border border-[#1d2432] overflow-hidden h-[476px] transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">
                  {/* Text content */}
                  <div className="absolute left-0 top-0 bottom-0 w-[44%] flex flex-col justify-between p-10">
                    <div className="flex flex-col gap-6">
                      {/* Category */}
                      <div className="flex items-center gap-2">
                        {p.category.map((cat, ci) => (
                          <span key={cat} className="flex items-center gap-2">
                            {ci > 0 && (
                              <span className="w-1 h-1 rounded-full bg-accent" />
                            )}
                            <span className="text-accent text-sm font-medium">
                              {cat}
                            </span>
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl font-medium text-white leading-tight">
                          {p.title}
                        </h3>
                        <p className="text-white text-base leading-[1.5]">
                          {p.tagline}
                        </p>
                        <p className="text-[#d1d5db] text-base leading-[1.6]">
                          {p.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-white text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium self-start hover:border-white/40 transition-all duration-200">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="flex-shrink-0"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Explore {p.title}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="absolute right-0 top-0 bottom-0 w-[56%] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-transparent to-transparent w-[25%]" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
