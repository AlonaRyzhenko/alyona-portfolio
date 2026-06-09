"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home",     href: "/",         section: "home"     },
  { label: "About",    href: "/#about",   section: "about"    },
  { label: "Projects", href: "/#projects", section: "projects" },
  { label: "Contact",  href: "/#contact", section: "contact"  },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll-spy: find which section's top is at or above the viewport midpoint
  useEffect(() => {
    if (pathname !== "/") return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const sectionIds = ["home", "about", "projects", "contact"];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop - 120 <= scrollY) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const isActive = (section: string) =>
    pathname === "/" && activeSection === section;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex justify-end items-center py-5">
        {/* Desktop nav pill — always glass */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 rounded-full px-3 py-2 bg-bg/30 backdrop-blur-[20px] border border-white/10">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive(link.section)
                  ? "bg-accent text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="pointer-events-auto md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-white origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto md:hidden overflow-hidden bg-[#0d0f1a]/95 backdrop-blur-md border-b border-white/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 text-base font-medium hover:text-white transition-colors py-2.5 border-b border-white/[0.05] last:border-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
