"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

/* ─── Featured recruiters ───────────────────────────────────────────────── */
const featured = [
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    highlight: "₹1.25 Cr Package",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    highlight: null,
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    highlight: null,
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    highlight: null,
  },
  {
    name: "Morgan Stanley",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Morgan_Stanley_Logo_1.svg",
    highlight: null,
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    highlight: null,
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    highlight: null,
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    highlight: null,
  },
];

/* ─── Scrolling strip — built from the featured recruiters above ────────── */
/* Only companies with real logos; doubled for a seamless infinite loop.    */
const strip = [...featured, ...featured];

function LogoImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[5rem] h-8">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        onError={(e) => {
          const el = e.target as HTMLImageElement;
          el.style.display = "none";
          const parent = el.parentElement?.parentElement;
          if (parent) {
            parent.innerHTML = `<span style="color:#475569;font-size:12px;font-weight:600">${alt}</span>`;
          }
        }}
      />
    </div>
  );
}

export default function CompanyNetwork() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="network" ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Major Recruiters"
          heading={<>Trusted by <span className="gradient-text">Industry Leaders</span></>}
          description="5,000+ strategic partnerships — from Fortune 500 companies to cutting-edge startups across every sector."
        />

        {/* Featured recruiters grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {featured.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.06 + i * 0.07 }}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col items-center justify-center gap-2 p-4 sm:p-6 rounded-2xl border bg-white transition-all duration-300 ${
                company.name === "Meta"
                  ? "border-blue-200 shadow-md shadow-blue-100 ring-1 ring-blue-100"
                  : "border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md"
              }`}
            >
              {company.name === "Meta" && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full whitespace-nowrap">
                  Highest Package
                </div>
              )}
              <div className="h-10 flex items-center justify-center">
                {company.logo ? (
                  <LogoImage src={company.logo} alt={company.name} />
                ) : (
                  <span className="text-base font-bold text-slate-700">{company.name}</span>
                )}
              </div>
              {company.logo && (
                <p className="text-[12px] font-medium text-slate-500">{company.name}</p>
              )}
              {company.highlight && (
                <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                  {company.highlight}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mb-12 text-[13px] text-slate-500"
        >
          And <span className="text-blue-600 font-semibold">4,993+ more</span> organisations across every sector
        </motion.p>

        {/* Scrolling strip of additional companies */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee">
            {strip.map((c, i) => (
              <div
                key={`strip-${i}`}
                className="flex-shrink-0 w-[9rem] h-14 mx-2 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center overflow-hidden"
              >
                <div className="relative w-[5rem] h-7">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    className="object-contain opacity-60 hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
