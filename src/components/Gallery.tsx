"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { card, btn, filterBtn, type as t } from "@/lib/tokens";

/* ─── Data ─────────────────────────────────────────────────────────────── */
const categories = [
  "All",
  "Corporate Sessions",
  "Placement Drives",
  "Student Interactions",
  "Events & Workshops",
];

const galleryImages = [
  { id: 2, src: "/images/corporate_session_1.jpg", thumb: "/images/corporate_session_1.jpg", alt: "Corporate Conclave",          category: "Corporate Sessions",   caption: "Leadership Conclave with top industry executives" },
  { id: 3, src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85", thumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=75", alt: "Placement Interview",        category: "Placement Drives",     caption: "Students preparing for interviews with top companies" },
  { id: 5, src: "/images/student_interaction_onsurity.jpg", thumb: "/images/student_interaction_onsurity.jpg", alt: "Student Interaction Onsurity",        category: "Student Interactions", caption: "Interaction with Alumni in Onsurity" },
  { id: 6, src: "/images/corporate_session_2_cropped.jpg", thumb: "/images/corporate_session_2_cropped.jpg", alt: "Corporate Seminar",            category: "Corporate Sessions",   caption: "Global leadership networking and relations building" },
  { id: 7, src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=85", thumb: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&q=75", alt: "Campus Drive",               category: "Placement Drives",     caption: "On-campus recruitment drive with 500+ student participants" },
  { id: 10, src: "/images/student_interaction_2.jpg",   thumb: "/images/student_interaction_2.jpg",   alt: "Students Group",             category: "Student Interactions", caption: "Interaction with students in Linkedin Talent Connect" },
  { id: 13, src: "/images/student_interaction_3.jpg", thumb: "/images/student_interaction_3.jpg", alt: "Students Engagement",            category: "Student Interactions",   caption: "Interactive engagement with student cohorts" },
  { id: 14, src: "/images/corporate_session_3.jpg", thumb: "/images/corporate_session_3.jpg", alt: "Talent Connect India",            category: "Corporate Sessions",   caption: "LinkedIn Talent Connect Session India" },
  { id: 15, src: "/images/corporate_session_4.jpg", thumb: "/images/corporate_session_4.jpg", alt: "Volopay Office",            category: "Corporate Sessions",   caption: "Engagement and interaction at Volopay" },
  { id: 16, src: "/images/event_workshop_1.jpg", thumb: "/images/event_workshop_1.jpg", alt: "Bennett University Event",            category: "Events & Workshops",   caption: "Bennett University event and workshop" },
  { id: 18, src: "/images/legalite_poster.jpg", thumb: "/images/legalite_poster.jpg", alt: "Legalite 6.0 Poster",            category: "Events & Workshops",   caption: "Legalite 6.0 Annual Law Fest" },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function Gallery() {
  const [activeCategory,  setActiveCategory]  = useState("All");
  const [lightboxIndex,   setLightboxIndex]   = useState<number | null>(null);
  const [ref, inView] = useInView({ threshold: 0.04, triggerOnce: true });

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (id: number) =>
    setLightboxIndex(filtered.findIndex((img) => img.id === id));

  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };
  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <section id="gallery" ref={ref} className="relative py-24 md:py-32 bg-[#050509] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Gallery"
          heading={<>Moments That <span className="gradient-text">Define Impact</span></>}
          description="A visual chronicle of campus life, corporate connects, placement drives, and the journeys that shaped careers."
        />

        {/* ── Category filters ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? filterBtn.active : filterBtn.base}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Masonry grid ─────────────────────────────────────────── */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.35, delay: i * 0.035 }}
                className={`relative group mb-3 rounded-2xl overflow-hidden cursor-pointer border border-white/[0.07] hover:border-white/[0.16] transition-all duration-300`}
                onClick={() => openLightbox(img.id)}
              >
                <Image
                  src={img.thumb}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${img.id}/400/300`;
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-1.5 mb-1">
                    <ZoomIn size={13} className="text-indigo-300 flex-shrink-0" />
                    <span className={t.capsLabel + " !text-indigo-300"}>{img.category}</span>
                  </div>
                  <p className="text-white text-[13px] font-medium leading-snug">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-11 right-0 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  width={900}
                  height={600}
                  className="w-full object-contain max-h-[72vh]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://picsum.photos/seed/${filtered[lightboxIndex].id}/900/600`;
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-6">
                  <p className={t.capsLabel + " mb-1"}>
                    {filtered[lightboxIndex].category}
                  </p>
                  <p className="text-white text-[15px] font-medium">
                    {filtered[lightboxIndex].caption}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={prev}
                  className={btn.ghost + " flex items-center gap-1.5"}
                >
                  <ChevronLeft size={18} /> Previous
                </button>
                <span className="text-zinc-600 text-sm tabular-nums">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
                <button
                  onClick={next}
                  className={btn.ghost + " flex items-center gap-1.5"}
                >
                  Next <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
