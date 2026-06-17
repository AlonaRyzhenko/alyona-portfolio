"use client";

import { motion } from "framer-motion";

const focusPills = ["Ownership Visibility", "Workflow Clarity", "System Thinking"];

const experience = [
  "7-product fintech ecosystem — Exchange, Sign, Messenger, Vault, Drive, Verifier+, Issuer",
  "Cybersecurity SaaS platform — UX redesign and design system from scratch",
  "Statistical portals redesigned across 3 visual themes",
  "CRM and API platform interfaces for enterprise clients",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-[#E5E7EB] text-sm font-normal">About</span>
          <span className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-16 max-w-[1068px] ml-auto mr-0 lg:ml-[calc((100%-1068px)/2)]"
        >
          {/* Intro */}
          <motion.div variants={stagger} className="flex flex-col gap-4 max-w-[880px]">
            <motion.p variants={fadeUp} className="text-[#8892a4] text-lg leading-[1.8]">
              I design secure, scalable systems for fintech and enterprise —
              turning fragmented workflows into clear, actionable experiences.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#8892a4] text-lg leading-[1.8]">
              I focus on complex systems and enterprise workflows — designing
              solutions that bring clarity to processes where usability,
              governance, and business logic intersect.
            </motion.p>
          </motion.div>

          {/* Approach */}
          <motion.div variants={stagger} className="flex flex-col gap-6">
            <motion.div variants={stagger} className="flex flex-col gap-4">
              <motion.h2 variants={fadeUp} className="text-4xl font-medium text-white">
                Approach
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#8892a4] text-lg leading-[1.7] max-w-[880px]">
                I design products that help users understand what is happening,
                who is responsible, and what needs to be done next.
              </motion.p>
            </motion.div>

            <motion.div variants={stagger} className="flex flex-col gap-3">
              <motion.p variants={fadeUp} className="text-[#8892a4] text-sm font-medium">
                My work focus on
              </motion.p>
              <motion.div variants={stagger} className="flex flex-wrap gap-3">
                {focusPills.map((pill) => (
                  <motion.span
                    key={pill}
                    variants={fadeUp}
                    className="px-4 py-2.5 rounded-lg bg-[#1D2432] border border-white/[0.15] text-white text-sm font-normal"
                  >
                    {pill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={stagger} className="flex flex-col gap-6">
            <motion.div variants={stagger} className="flex flex-col gap-3">
              <motion.h2 variants={fadeUp} className="text-4xl font-medium text-white">
                Experience
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#8892a4] text-lg leading-[1.7]">
                6+ years designing enterprise and SaaS products — fintech, CRM
                systems, and internal platforms.
              </motion.p>
            </motion.div>

            <motion.ul variants={stagger} className="flex flex-col gap-3">
              {experience.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-4 text-[#8892a4] text-base leading-[1.6]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp}>
              <a
                href="https://www.notion.so/CV-3535404bee1c80c6a397daf923e2ad25?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:border-white/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                Find my CV here
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
