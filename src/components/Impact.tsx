"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2, BarChart3, Package, Briefcase, Settings, TrendingUp,
  DollarSign, Layers, Users, Building, Award, Globe,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { card, type as t } from "@/lib/tokens";

const stats = [
  { value: "5,000+",      label: "Companies Associated", icon: Building  },
  { value: "10,000+",     label: "Students Placed",      icon: Users     },
  { value: "₹1.25 Cr",   label: "Highest Package",      icon: DollarSign},
  { value: "50+",         label: "Roles Covered",        icon: Briefcase },
  { value: "Pan-India",   label: "Industry Reach",       icon: Globe     },
  { value: "20+",         label: "Years Experience",     icon: Award     },
];

const domains = [
  { icon: Code2,       label: "Technology",   description: "SDE, DevOps, ML/AI, Data Eng" },
  { icon: BarChart3,   label: "Analytics",    description: "Data Science, BI, Research" },
  { icon: Package,     label: "Product",      description: "PM, Strategy, UX Research" },
  { icon: TrendingUp,  label: "Consulting",   description: "Strategy, Management, Advisory" },
  { icon: Settings,    label: "Operations",   description: "Supply Chain, Process, Quality" },
  { icon: DollarSign,  label: "Business",     description: "Finance, Sales, Marketing" },
  { icon: Layers,      label: "Emerging",     description: "Blockchain, AR/VR, CleanTech" },
  { icon: Globe,       label: "Global Orgs",  description: "MNCs, Unicorns, Startups" },
];

export default function Impact() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="impact" ref={ref} className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="glow-orb bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Impact & Reach"
          heading={<>Numbers That <span className="gradient-text">Define the Journey</span></>}
          description="Driven by outcomes at scale — placing students across every vertical, every pay band, and every background."
        />

        {/* Experience callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="p-3 rounded-xl bg-white/15 flex-shrink-0 self-start">
              <Award size={28} />
            </div>
            <div>
              <p className="text-3xl font-bold mb-1">20+ Years of Experience</p>
              <p className="text-blue-100 text-[15px] leading-relaxed">
                Over two decades of mentoring students, building industry partnerships, and guiding successful careers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
              className={`flex flex-col items-center text-center ${card.padding} ${card.base} ${card.hover}`}
            >
              <div className="p-2 rounded-xl bg-blue-50 mb-3">
                <stat.icon size={18} className="text-blue-600" />
              </div>
              <p className="text-lg font-bold text-slate-900 mb-0.5">{stat.value}</p>
              <p className={t.capsLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Domains */}
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.48 }}
          className={`${t.h3} mb-6`}
        >
          Placement Verticals Covered
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {domains.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.52 + i * 0.055 }}
              whileHover={{ y: -3 }}
              className={`${card.padding} ${card.base} ${card.hover} cursor-default`}
            >
              <div className="inline-flex p-2 rounded-xl bg-blue-50 mb-4">
                <d.icon size={18} className="text-blue-600" />
              </div>
              <p className="font-semibold text-slate-800 text-sm mb-1">{d.label}</p>
              <p className={t.muted + " leading-relaxed"}>{d.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
