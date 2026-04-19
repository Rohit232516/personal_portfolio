"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { card } from "@/lib/tokens";

/* ─── Data ─────────────────────────────────────────────────────────────── */
const companies = [
  { name: "LinkedIn",     logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
  { name: "Microsoft",    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Amazon",       logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Flipkart",     logo: "https://upload.wikimedia.org/wikipedia/en/3/3c/Flipkart_logo.svg" },
  { name: "Uber",         logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
  { name: "Morgan Stanley", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Morgan_Stanley_Logo_1.svg" },
  { name: "Zomato",       logo: "https://upload.wikimedia.org/wikipedia/en/7/75/Zomato_logo.png" },
  { name: "Zerodha",      logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Zerodha_logo.svg" },
  { name: "Groww",        logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Groww_app_logo.png" },
  { name: "Wingify",      logo: null, initials: "WG" },
  { name: "Rubrik",       logo: null, initials: "RB" },
  { name: "AlphaGrep",    logo: null, initials: "AG" },
];

const row1 = [...companies.slice(0, 6), ...companies.slice(0, 6)];
const row2 = [...companies.slice(6),    ...companies.slice(6)];

/* ─── Company card ──────────────────────────────────────────────────────── */
function CompanyCard({ company }: { company: (typeof companies)[0] }) {
  return (
    <div className={`flex-shrink-0 w-[9.5rem] h-[4.5rem] mx-2.5 ${card.base} ${card.hover} flex items-center justify-center overflow-hidden`}>
      {company.logo ? (
        <div className="relative w-[5.5rem] h-9">
          <Image
            src={company.logo}
            alt={company.name}
            fill
            className="object-contain opacity-50 hover:opacity-80 transition-opacity duration-300"
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              el.style.display = "none";
              const parent = el.parentElement?.parentElement;
              if (parent) {
                parent.innerHTML = `<span style="color:#71717a;font-size:12px;font-weight:600">${company.name}</span>`;
              }
            }}
          />
        </div>
      ) : (
        <span className="text-[13px] font-semibold text-zinc-500 tracking-wide">
          {company.name}
        </span>
      )}
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────── */
export default function CompanyNetwork() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="network" ref={ref} className="relative py-24 md:py-32 bg-[#050509] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Corporate Network"
          heading={<>Trusted by <span className="gradient-text">Industry Leaders</span></>}
          description="200+ strategic partnerships with global organisations — from Fortune 500 companies to cutting-edge startups."
        />
      </div>

      {/* ── Scrolling logo strip ─────────────────────────────────────── */}
      <div className="relative overflow-hidden mt-2">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050509] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050509] to-transparent z-10 pointer-events-none" />

        {/* Row 1 — left */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="flex mb-3"
        >
          {row1.map((c, i) => <CompanyCard key={`r1-${i}`} company={c} />)}
        </motion.div>

        {/* Row 2 — right */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="flex"
        >
          {row2.map((c, i) => <CompanyCard key={`r2-${i}`} company={c} />)}
        </motion.div>
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="text-center mt-12 text-[13px] text-zinc-600"
      >
        And <span className="text-indigo-400 font-semibold">150+ more</span> organisations across all sectors
      </motion.p>
    </section>
  );
}
