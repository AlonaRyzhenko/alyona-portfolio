"use client";

import { motion } from "framer-motion";

const skills = [
  "Product Design",
  "Enterprise UX",
  "Workflow Clarity",
  "Design Tokens",
  "System Thinking",
  "Fintech",
  "CRM Systems",
  "Secure Platforms",
];

const PORTRAIT = "/photo.png";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col overflow-hidden">
      {/* Subtle accent glow */}
      <div
        className="absolute top-0 right-0 w-[900px] h-[900px] pointer-events-none opacity-[0.05]"
        style={{ background: "radial-gradient(circle at 80% 20%, #496bf9 0%, transparent 60%)" }}
      />

      {/* "Portfolio" label — in normal flow, scrolls away with the page */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 lg:px-16 pt-6 flex-shrink-0">
        <span className="text-[#E5E7EB] text-sm font-medium tracking-wide">Portfolio</span>
      </div>

      {/* Main content — fills remaining height between label and ticker */}
      <div className="relative flex-1 min-h-0 overflow-hidden">

        {/* Text column — left side, vertically centered */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 left-0 right-0 lg:right-[45%] flex items-center px-6 lg:px-16"
        >
          <div className="flex flex-col gap-6 w-full">
            {/* Caption */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-3 text-[#8892a4] text-sm sm:text-base"
            >
              <span>Senior Product Designer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span>6+ years of experience</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-[52px] font-medium leading-[1.2] tracking-tight text-white"
            >
              Designing enterprise platforms that simplify complex workflows
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#D1D5DB] text-lg leading-[1.7] space-y-1"
            >
              <p>I&rsquo;m Alyona, Senior Product Designer in Kyiv.</p>
              <p>
                I design secure fintech and enterprise products, and the design
                systems behind them &mdash; turning complex workflows into clear
                experiences.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
              >
                Explore my projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:border-white/40 transition-all duration-200"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Photo — right 45%, fills the full content height */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-0 inset-y-0 w-[45%] overflow-hidden pointer-events-none"
        >
          <img
            src={PORTRAIT}
            alt="Alyona Ryzhenko"
            className="w-full h-full object-cover object-top grayscale opacity-90"
            style={{ maskImage: "linear-gradient(to top, transparent 0%, black 18%)" }}
          />
        </motion.div>
      </div>

      {/* Scrolling ticker — pinned to bottom */}
      <div className="relative flex-shrink-0 overflow-hidden border-t border-white/[0.06] py-4 bg-bg">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex items-center gap-10 whitespace-nowrap w-max"
        >
          {[...skills, ...skills, ...skills, ...skills].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-[#8892a4] text-xs font-medium uppercase tracking-[0.15em]">
                {s}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
