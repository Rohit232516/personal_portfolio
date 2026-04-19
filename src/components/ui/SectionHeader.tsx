"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  heading: React.ReactNode;
  description?: string;
  /** Extra classes on the wrapper div */
  className?: string;
}

/**
 * Shared section header used by every content section.
 * Enforces: label → h2 → description — consistent spacing, typography, color.
 */
export default function SectionHeader({
  label,
  heading,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${className}`}>
      {/* Label row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-3"
      >
        <div className="h-px w-8 bg-indigo-500 flex-shrink-0" />
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400">
          {label}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="text-4xl md:text-[2.75rem] font-bold text-white tracking-tight leading-[1.15]"
      >
        {heading}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-4 text-[15px] text-zinc-400 leading-[1.75] max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
