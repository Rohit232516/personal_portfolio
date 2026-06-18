"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Send, CheckCircle, MapPin, Phone, Link2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { card, btn, input, type as t } from "@/lib/tokens";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "naushad.kh@bennett.edu.in",
    href: "mailto:naushad.kh@bennett.edu.in",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/naushadkh",
    href: "https://linkedin.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bennett University, Greater Noida",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Available on request",
    href: null,
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors,  setErrors]  = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())  e.name  = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="glow-orb bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Get In Touch"
          heading={<>Let&apos;s Build Something <span className="gradient-text">Exceptional</span></>}
          description="Whether you're a company looking to hire top talent or a university looking to elevate placements — let's connect."
        />

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm text-slate-800 hover:text-blue-600 transition-colors duration-200 font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-800 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-3 pt-2 border-t border-slate-100">
              <motion.a
                whileHover={{ x: 3 }}
                href="mailto:naushad.kh@bennett.edu.in"
                className={btn.primary + " w-full"}
              >
                <Mail size={17} />
                Send Email
              </motion.a>
              <motion.a
                whileHover={{ x: 3 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={btn.secondary + " w-full"}
              >
                <Link2 size={17} />
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-emerald-200 bg-emerald-50"
              >
                <CheckCircle size={48} className="text-emerald-500 mb-6" />
                <h3 className={`${t.h3} mb-2`}>Message Sent!</h3>
                <p className={`${t.cardBody} mb-8 max-w-xs`}>
                  Thank you for reaching out. Naushad will reply within 24 hours.
                </p>
                <button onClick={() => setSent(false)} className={btn.secondary}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`${card.padding} ${card.base} space-y-4`}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={input}
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={input}
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`${input} appearance-none`}
                >
                  <option value="">Select Subject</option>
                  {["Corporate Partnership", "Campus Placement Collaboration", "Student Opportunity", "Speaking Engagement", "Other"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                <div>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${input} resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-[11px] mt-1.5">{errors.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={loading}
                  className={`w-full ${btn.primary} disabled:opacity-55 disabled:cursor-not-allowed`}
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
