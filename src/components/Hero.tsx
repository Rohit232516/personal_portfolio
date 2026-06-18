"use client";

import { motion } from "framer-motion";
import { ArrowDown, Award } from "lucide-react";
import { btn, type as t } from "@/lib/tokens";

const stats = [
  { value: "5,000+",     label: "Companies" },
  { value: "10,000+",    label: "Placements" },
  { value: "₹1.25 Cr",  label: "Highest Package" },
  { value: "20+",        label: "Years Experience" },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">

      {/* Soft ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="glow-orb -top-[10%] -left-[5%] !w-[520px] !h-[520px] !bg-blue-400/[0.12] !blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          className="glow-orb -bottom-[15%] -right-[5%] !w-[560px] !h-[560px] !bg-sky-400/[0.09] !blur-[130px]"
        />
      </div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle, #2563eb 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-[13px] font-medium mb-8"
        >
          <Award size={13} className="text-blue-600 flex-shrink-0" />
          Pan-India Campus Placement Leader
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="text-[3.5rem] sm:text-7xl md:text-8xl font-bold text-slate-900 leading-[1.04] tracking-tight mb-6"
        >
          Naushad{" "}
          <span className="gradient-text">K H</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="text-lg md:text-xl text-slate-700 font-medium max-w-lg mx-auto mb-2 leading-relaxed"
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
          className="inline-flex flex-wrap items-center justify-center gap-x-0 gap-y-4 mb-12 bg-white/80 border border-slate-200 rounded-2xl px-6 py-4 shadow-sm divide-x divide-slate-200"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-6 first:pl-0 last:pr-0">
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400"
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
