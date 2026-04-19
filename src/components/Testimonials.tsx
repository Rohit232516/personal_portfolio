"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { card, btn, type as t } from "@/lib/tokens";

/* ─── Data ─────────────────────────────────────────────────────────────── */
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Microsoft",
    batch: "B.Tech CSE, 2023",
    initials: "PS",
    quote:
      "Naushad sir's guidance was transformative. He didn't just help me get placed — he helped me understand my strengths and match them to the right role. His connections with Microsoft's talent team were invaluable. I'm now working in a role I truly love.",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    role: "Data Analyst",
    company: "Amazon",
    batch: "B.Tech ECE, 2023",
    initials: "AM",
    quote:
      "As an ECE student targeting data analytics, I was unsure if top tech companies would consider me. Naushad sir not only believed in me but actively pitched my profile to Amazon's TA team. His cross-vertical approach is unlike anything I've seen.",
  },
  {
    id: 3,
    name: "Sneha Gupta",
    role: "Product Manager",
    company: "Flipkart",
    batch: "MBA, 2022",
    initials: "SG",
    quote:
      "The placement ecosystem Naushad sir built is exceptional. From resume workshops to mock interviews with actual HR managers — everything was structured for success. Flipkart was a dream placement and it became reality because of his ecosystem.",
  },
  {
    id: 4,
    name: "Rahul Khanna",
    role: "Talent Acquisition Lead",
    company: "LinkedIn",
    batch: "Corporate Partner",
    initials: "RK",
    quote:
      "As a hiring partner, I can confidently say that Naushad is one of the most organised and proactive placement heads I've worked with. His students consistently come prepared, well-briefed, and professionally aligned.",
  },
  {
    id: 5,
    name: "Kavya Nair",
    role: "Strategy Consultant",
    company: "McKinsey",
    batch: "BBA, 2023",
    initials: "KN",
    quote:
      "Getting into consulting from a BBA background felt impossible until Naushad sir intervened. He personally connected me with McKinsey's campus team, coached me on case interviews, and ensured my profile was positioned perfectly.",
  },
  {
    id: 6,
    name: "Vikram Sinha",
    role: "Operations Manager",
    company: "Uber",
    batch: "B.Tech ME, 2022",
    initials: "VS",
    quote:
      "Mechanical engineering to Operations at Uber — a path I never thought possible. Naushad sir saw the potential in diverse profiles and created pathways that didn't exist before. His ability to match students to roles is genuinely remarkable.",
  },
];

/* Stars helper */
function Stars({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const go = (i: number) => { setAutoplay(false); setCurrent(i); };
  const prev = () => go((current - 1 + testimonials.length) % testimonials.length);
  const next = () => go((current + 1) % testimonials.length);

  const active = testimonials[current];

  return (
    <section id="testimonials" ref={ref} className="relative py-24 md:py-32 bg-[#08080f] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="glow-orb !relative" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          heading={<>Voices of <span className="gradient-text">Success</span></>}
          description="Students and corporate partners share their experience working with Naushad K H."
        />

        <div className="grid lg:grid-cols-3 gap-6 items-start">

          {/* ── Main card ───────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className={`relative ${card.padding} ${card.base} overflow-hidden`}
              >
                {/* Watermark quote */}
                <Quote
                  size={72}
                  className="absolute top-4 right-6 text-indigo-400/[0.08] pointer-events-none"
                />

                <Stars size={15} />

                <blockquote className={`mt-6 mb-8 ${t.body} !text-zinc-300 italic`}>
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0 shadow-md shadow-indigo-500/25">
                    {active.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[15px]">{active.name}</p>
                    <p className={t.cardBody}>{active.role} · {active.company}</p>
                    <p className={t.muted + " mt-0.5"}>{active.batch}</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/[0.07]">
                  <button onClick={prev} className={btn.icon}>
                    <ChevronLeft size={17} />
                  </button>

                  {/* Progress dots */}
                  <div className="flex-1 flex items-center gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => go(i)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === current
                            ? "bg-indigo-500 flex-1"
                            : "bg-white/[0.15] w-4 hover:bg-white/[0.3]"
                        }`}
                      />
                    ))}
                  </div>

                  <button onClick={next} className={btn.icon}>
                    <ChevronRight size={17} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Mini stack ──────────────────────────────────────────── */}
          <div className="flex flex-col gap-3">
            {testimonials
              .filter((_, i) => i !== current)
              .slice(0, 3)
              .map((test) => (
                <motion.div
                  key={test.id}
                  whileHover={{ x: 3 }}
                  onClick={() => go(testimonials.findIndex((t) => t.id === test.id))}
                  className={`${card.paddingSm} ${card.base} ${card.hover} cursor-pointer`}
                >
                  <Stars count={5} size={11} />
                  <p className="mt-2 mb-3 text-xs text-zinc-500 leading-relaxed line-clamp-3">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0">
                      {test.initials}
                    </div>
                    <div>
                      <p className="text-zinc-300 text-xs font-medium">{test.name}</p>
                      <p className={t.muted}>{test.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
