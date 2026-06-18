"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { btn } from "@/lib/tokens";

const navLinks = [
  { href: "#about",        label: "About" },
  { href: "#impact",       label: "Impact" },
  { href: "#network",      label: "Network" },
  { href: "#ecosystem",    label: "Ecosystem" },
  { href: "#gallery",      label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact",      label: "Contact" },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/35 transition-shadow duration-300">
              <span className="text-white font-bold text-[13px] tracking-wide">NK</span>
            </div>
            <span className="text-slate-800 font-semibold text-sm tracking-wide hidden sm:block group-hover:text-blue-700 transition-colors duration-200">
              Naushad K H
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-2 text-[13px] font-medium rounded-xl transition-colors duration-200 ${
                    isActive ? "text-blue-700" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-blue-50 rounded-xl"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#contact")}
              className={`hidden md:flex ${btn.primary} !px-4 !py-2 !text-[13px]`}
            >
              Connect
            </motion.button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden ${btn.icon}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[68px] inset-x-4 z-40 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-3">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => scrollTo("#contact")}
                  className={`w-full ${btn.primary}`}
                >
                  Connect With Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
