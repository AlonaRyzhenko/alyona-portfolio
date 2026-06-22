"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex justify-between items-center py-5">
        <Link href="/" className="pointer-events-auto md:hidden text-white text-base font-medium">
          Portfolio
        </Link>
        <span className="hidden md:block text-white text-base font-medium">
          Portfolio
        </span>

        {/* Desktop nav pill — always glass */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 rounded-full px-3 py-2 bg-bg/30 backdrop-blur-[20px] border border-white/10">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive(link.section)
                  ? "bg-accent text-white"
                  : "text-[#E5E7EB] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile nav */}
        <nav className="pointer-events-auto md:hidden flex items-center gap-4">
          {links.filter((link) => link.section !== "home").map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.section) ? "text-white" : "text-[#E5E7EB] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
    </motion.header>
  );
}
