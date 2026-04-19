"use client";

import { motion } from "framer-motion";
import { Mail, Link2, ArrowUp } from "lucide-react";
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

const scroll = (href: string) =>
  document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  return (
    <footer className="relative bg-[#020204] border-t border-white/[0.07] pt-16 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Main grid ─────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-500/25">
                <span className="text-white font-bold text-[13px]">NK</span>
              </div>
              <div>
                <p className="text-white font-semibold text-[15px] leading-tight">Naushad K H</p>
                <p className="text-zinc-600 text-xs">Placement Leader</p>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-[260px]">
              Building end-to-end placement ecosystems that transform university talent into industry leaders across Pan-India.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scroll(link.href)}
                  className="text-left text-zinc-500 hover:text-zinc-200 text-sm transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-zinc-500 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:naushad.kh@bennett.edu.in"
                className="flex items-center gap-2.5 text-zinc-500 hover:text-zinc-200 text-sm transition-colors duration-200"
              >
                <Mail size={15} className="flex-shrink-0" />
                naushad.kh@bennett.edu.in
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-zinc-500 hover:text-zinc-200 text-sm transition-colors duration-200"
              >
                <Link2 size={15} className="flex-shrink-0" />
                linkedin.com/in/naushadkh
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────── */}
        <div className="pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-[13px]">
            © {new Date().getFullYear()} Naushad K H. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs text-center">
            Maverick in Campus Placements · Pan-India Industry Connects
          </p>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={btn.icon}
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
