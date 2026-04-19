"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Building2, Users, TrendingUp } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { card, type as t } from "@/lib/tokens";

const highlights = [
  { icon: Building2,   text: "C-suite & HR Engagement",     color: "text-indigo-400",  bg: "bg-indigo-500/10" },
  { icon: Users,       text: "All Courses & Backgrounds",   color: "text-violet-400",  bg: "bg-violet-500/10" },
  { icon: TrendingUp,  text: "Scale-driven Outcomes",        color: "text-indigo-400",  bg: "bg-indigo-500/10" },
  { icon: CheckCircle, text: "End-to-End Ecosystem Builder", color: "text-violet-400",  bg: "bg-violet-500/10" },
];

const paragraphs = [
  "I believe the true measure of success in higher education is the ability to place students across all verticals, roles, and academic backgrounds — ensuring that every student, regardless of course or specialization, finds meaningful industry opportunities.",
  "My work sits at the front line between industry and academia. Through continuous engagement with C-suite leaders, HR heads, and Talent Acquisition leaders, I stay deeply aligned with real-time hiring needs, role expectations, and evolving job requirements.",
  "Over the years I've built strong, trust-driven relationships with organizations such as LinkedIn, Microsoft, Flipkart, Uber, Amazon, Morgan Stanley, and Zomato — enabling placements from early-stage startups to top-tier global organisations.",
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay },
  });

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-[#050509] overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      {/* Ambient */}
      <div className="glow-orb top-16 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="About"
          heading={<>Bridging Industry <span className="gradient-text">&amp; Academia</span></>}
          description="Building the infrastructure that connects university talent with the right opportunities — at scale."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ─────────────────────────────────────────── */}
          <div>
            <div className="space-y-6 mb-8">
              {paragraphs.map((p, i) => (
                <motion.p key={i} {...fadeUp(0.12 + i * 0.1)} className={t.body}>
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Pull quote */}
            <motion.blockquote
              {...fadeUp(0.44)}
              className={`${t.body} !text-zinc-300 font-medium border-l-2 border-indigo-500 pl-4 mb-8`}
            >
              What I do goes far beyond facilitating interviews. I build end-to-end placement ecosystems — from employer engagement and role discovery to student readiness, positioning, and final conversion.
            </motion.blockquote>

            {/* Highlights grid */}
            <motion.div {...fadeUp(0.54)} className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.text}
                  className={`flex items-center gap-3 ${card.paddingSm} rounded-2xl ${h.bg} border border-white/[0.07]`}
                >
                  <h.icon size={16} className={`flex-shrink-0 ${h.color}`} />
                  <span className="text-sm text-zinc-300 font-medium leading-tight">{h.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: image ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="relative"
          >
            {/* Main image */}
            <div className={`relative ${card.base} overflow-hidden aspect-[4/5] shadow-2xl shadow-black/50`}>
              <Image
                src="/images/profile.jpg"
                alt="Naushad K H — professional portrait"
                fill
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=640&q=85";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              {/* Name badge */}
              <div className="absolute bottom-6 inset-x-6">
                <div className="glass rounded-2xl px-4 py-3">
                  <p className="text-white font-semibold text-[15px]">Naushad K H</p>
                  <p className={t.cardBody}>Placement &amp; Corporate Relations Leader</p>
                </div>
              </div>
            </div>

            {/* Floating stat — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.62 }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl px-6 py-4 border border-white/[0.10] shadow-xl"
            >
              <p className="text-2xl font-bold gradient-text">200+</p>
              <p className="text-[13px] text-zinc-400 mt-0.5">Corporate Partners</p>
            </motion.div>

            {/* Floating stat — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.72 }}
              className="absolute -top-6 -left-6 glass rounded-2xl px-6 py-4 border border-white/[0.10] shadow-xl"
            >
              <p className="text-2xl font-bold gradient-text">10K+</p>
              <p className="text-[13px] text-zinc-400 mt-0.5">Students Placed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
