"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Handshake, Search, BookOpen, ClipboardList, Trophy } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { card, tag, type as t } from "@/lib/tokens";

/* ─── Data ─────────────────────────────────────────────────────────────── */
const steps = [
  {
    step: "01",
    icon: Handshake,
    title: "Employer Engagement",
    description:
      "Building deep, trust-based relationships with C-suite leaders, HR heads, and Talent Acquisition managers. Continuous alignment with real-time hiring needs and evolving industry expectations.",
    tags: ["C-Suite Connects", "HR Partnerships", "Industry Alignment"],
  },
  {
    step: "02",
    icon: Search,
    title: "Role Discovery",
    description:
      "Identifying and securing diverse role opportunities across technology, analytics, product, consulting, operations, and business domains — ensuring maximum career pathways for every student profile.",
    tags: ["Tech Roles", "Non-Tech Roles", "Emerging Domains"],
  },
  {
    step: "03",
    icon: BookOpen,
    title: "Student Readiness",
    description:
      "Conducting targeted preparation programs — from aptitude and communication to domain-specific skill-building. Aligning individual student strengths with the right roles and companies.",
    tags: ["Skill Building", "Mock Interviews", "Profile Positioning"],
  },
  {
    step: "04",
    icon: ClipboardList,
    title: "Interview Process",
    description:
      "Coordinating structured interview drives, managing recruitment pipelines, and ensuring smooth communication between candidates and employers at every stage of the hiring funnel.",
    tags: ["Drive Coordination", "Pipeline Management", "Candidate Support"],
  },
  {
    step: "05",
    icon: Trophy,
    title: "Final Placement",
    description:
      "Ensuring conversion at scale — monitoring offer letters, salary negotiations, and onboarding. Zero talent left behind: every student, every background, every vertical.",
    tags: ["Offer Conversion", "Pay Band Tracking", "Zero Talent Left Behind"],
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function PlacementEcosystem() {
  const [ref, inView] = useInView({ threshold: 0.04, triggerOnce: true });

  return (
    <section id="ecosystem" ref={ref} className="relative py-24 md:py-32 bg-[#08080f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="glow-orb top-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Placement Ecosystem"
          heading={<>The End-to-End <span className="gradient-text">Placement Journey</span></>}
          description="A structured, five-stage process that transforms student potential into career success — at scale."
        />

        {/* ── Timeline ─────────────────────────────────────────────── */}
        <div className="relative">
          {/* Center vertical line (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/20 to-indigo-500/0" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.08 + i * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-stretch gap-6 ${
                    !isLeft ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${card.padding} ${card.base} ${card.hover}`}>
                    {/* Icon + step label */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 flex-shrink-0">
                        <step.icon size={20} />
                      </div>
                      <div>
                        <p className={t.capsLabel}>
                          Step {step.step}
                        </p>
                        <h3 className="text-[17px] font-semibold text-white leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className={`${t.cardBody} mb-6`}>
                      {step.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((t) => (
                        <span key={t} className={tag}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Center node (desktop) */}
                  <div className="hidden lg:flex w-12 flex-shrink-0 items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shadow-md shadow-indigo-500/10">
                      <span className="text-[11px] font-bold text-indigo-400">{step.step}</span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
