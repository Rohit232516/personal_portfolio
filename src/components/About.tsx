"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Building2, Users, TrendingUp } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { card, type as t } from "@/lib/tokens";

const highlights = [
  { icon: Building2,   text: "C-suite & HR Engagement",     color: "text-blue-600",  bg: "bg-blue-50" },
  { icon: Users,       text: "All Courses & Backgrounds",   color: "text-sky-600",   bg: "bg-sky-50"  },
  { icon: TrendingUp,  text: "Scale-driven Outcomes",        color: "text-blue-600",  bg: "bg-blue-50" },
  { icon: CheckCircle, text: "End-to-End Ecosystem Builder", color: "text-sky-600",   bg: "bg-sky-50"  },
];

const paragraphs = [
  "I am a veteran Career Services leader and corporate relations strategist with over 20 years of experience building high-velocity placement ecosystems. As the Regional Head of Placements at Bennett University (The Times of India Group), I serve as a definitive bridge between high-caliber academic talent and the rapidly evolving global corporate landscape.",
  "My operational philosophy is built on a core truth: Exceptional placement leadership goes far beyond coordinating transactional interviews. It requires building an end-to-end talent ecosystem—integrating corporate role discovery, rigorous student readiness, strategic market positioning, and final conversion.",
  "I believe true institutional success lies in universal mobility—building a framework that unlocks elite, meaningful career pathways for students across every vertical, academic discipline, and specialization.",
];

const intersectionPoints = [
  { label: "Predictive Market Alignment", desc: "Synthesizing macroeconomic hiring trends to proactively shift campus talent strategy." },
  { label: "Evolving Role Architecture", desc: "Translating shifting corporate technical requirements (such as low-level design, systems thinking, and AI-augmented engineering) into actionable student preparation." },
  { label: "Production-Ready Capabilities", desc: "Engineering talent pipelines optimized for modern workflows, high shipping velocity, and immediate organizational impact." },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay },
  });

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="glow-orb top-16 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="About"
          heading={<>Bridging Industry <span className="gradient-text">&amp; Academia</span></>}
          description="Architecting the institutional infrastructure that connects campus talent with global opportunity — at scale."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <div className="space-y-6 mb-8">
              {paragraphs.map((p, i) => (
                <motion.p key={i} {...fadeUp(0.12 + i * 0.1)} className={t.body}>
                  {p}
                </motion.p>
              ))}
            </div>

            {/* At the intersection */}
            <motion.div {...fadeUp(0.44)} className="mb-8">
              <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-4">
                At the Intersection of Demand &amp; Talent
              </p>
              <div className="space-y-3">
                {intersectionPoints.map((pt, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <span className="font-semibold text-slate-800">{pt.label}:</span> {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Global Corporate Network */}
            <motion.div {...fadeUp(0.54)} className="mb-8">
              <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-2">
                Global Corporate Network
              </p>
              <p className={`${t.body} text-slate-600`}>
                A 20-year track record of trust-driven relationships enables seamless talent acquisition across the entire corporate lifecycle—from disruptive, early-stage startups to elite global enterprises.
              </p>
            </motion.div>

            {/* Highlights grid */}
            <motion.div {...fadeUp(0.62)} className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.text}
                  className={`flex items-center gap-3 p-4 rounded-2xl ${h.bg} border border-slate-100`}
                >
                  <h.icon size={16} className={`flex-shrink-0 ${h.color}`} />
                  <span className="text-sm text-slate-700 font-medium leading-tight">{h.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="relative"
          >
            <div className={`relative ${card.base} overflow-hidden aspect-[4/5] shadow-xl`}>
              <Image
                src="/images/profile.jpeg"
                alt="Naushad K H — professional portrait"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 inset-x-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/80 shadow-md">
                  <p className="text-slate-900 font-semibold text-[15px]">Naushad K H</p>
                  <p className="text-slate-500 text-sm">Placement &amp; Corporate Relations Leader</p>
                </div>
              </div>
            </div>

            {/* Floating stat — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.62 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-6 py-4 border border-slate-200 shadow-lg"
            >
              <p className="text-2xl font-bold gradient-text">5,000+</p>
              <p className="text-[13px] text-slate-500 mt-0.5">Companies Associated</p>
            </motion.div>

            {/* Floating stat — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.72 }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl px-6 py-4 border border-slate-200 shadow-lg"
            >
              <p className="text-2xl font-bold gradient-text">10K+</p>
              <p className="text-[13px] text-slate-500 mt-0.5">Students Placed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
