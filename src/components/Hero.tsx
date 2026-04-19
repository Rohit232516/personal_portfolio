"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { btn, type as t } from "@/lib/tokens";

const stats = [
  { value: "200+",      label: "Companies" },
  { value: "10,000+",   label: "Placements" },
  { value: "50+",       label: "Verticals" },
  { value: "Pan-India", label: "Reach" },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">

      {/* ── Ambient orbs ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="glow-orb -top-[15%] -left-[5%] !w-[520px] !h-[520px] !bg-indigo-600/[0.18] !blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="glow-orb -bottom-[20%] -right-[5%] !w-[600px] !h-[600px] !bg-violet-600/[0.12] !blur-[120px]"
        />
      </div>

      {/* ── Grid overlay ─────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/[0.08] text-indigo-300 text-[13px] font-medium mb-8 backdrop-blur-sm"
        >
          <Sparkles size={13} className="text-indigo-400 flex-shrink-0" />
          Pan-India Campus Placement Leader
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="text-[3.75rem] sm:text-7xl md:text-8xl font-bold text-white leading-[1.04] tracking-tight mb-6"
        >
          Naushad{" "}
          <span className="gradient-text">K H</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="text-lg md:text-xl text-zinc-300 font-light max-w-lg mx-auto mb-2 leading-relaxed"
        >
          Maverick in Campus Placements
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className={`${t.body} mb-12`}
        >
          Strategic Corporate Relations · Pan-India Industry Connects
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.64 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mb-12"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              {i > 0 && (
                <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-5 bg-white/10" />
              )}
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className={t.capsLabel + " mt-1"}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.78 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            className={btn.primary}
          >
            Let&apos;s Connect
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("impact")}
            className={btn.secondary}
          >
            View Impact
          </motion.button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600"
      >
        <span className="text-[10px] uppercase tracking-[0.18em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
