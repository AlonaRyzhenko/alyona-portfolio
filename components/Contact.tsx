"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#080e17]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#e5e7eb] text-sm font-normal">Contact</span>
          <span className="flex-1 h-px bg-white/[0.06]" />
        </div>

        <div className="max-w-[1068px] ml-0 lg:ml-[max(0px,calc((100%-1068px)/2))]">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl font-medium text-white mb-6 leading-[1.1]"
          >
            Let&rsquo;s work together!
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#d1d5db] text-lg leading-[1.6] max-w-[700px] mb-12"
          >
            Open to Senior Product Designer roles in B2B fintech and enterprise
            SaaS. Feel free to reach out.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://www.linkedin.com/in/alyona-ryzhenko"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-lg border border-[#374151] text-white text-sm font-medium hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ruzhenko.a@gmail.com"
              className="inline-flex items-center px-6 py-2.5 rounded-lg border border-[#374151] text-white text-sm font-medium hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              ruzhenko.a@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Divider + Footer */}
        <div className="mt-20 pt-6 border-t border-white/[0.06] flex justify-end">
          <p className="text-[#6b7280] text-sm">
            © 2026 Alyona Ryzhenko — Portfolio
          </p>
        </div>
      </div>
    </section>
  );
}
