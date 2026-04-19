/**
 * Design System Tokens
 * Single source of truth for all visual constants.
 * 8px base grid. One primary accent color (indigo).
 */

// ─── Backgrounds ─────────────────────────────────────────────────────────────
export const bg = {
  base: "#050509",        // sections A (about, network, gallery, contact)
  raised: "#08080f",      // sections B (impact, ecosystem, testimonials)
  footer: "#020204",
} as const;

// ─── Accent (single color palette) ───────────────────────────────────────────
export const accent = {
  label: "text-indigo-400",
  line: "bg-indigo-500",
  gradient: "bg-gradient-to-r from-indigo-600 to-violet-600",
  gradientText: "gradient-text",
  shadow: "shadow-indigo-500/25",
  shadowHover: "shadow-indigo-500/40",
  glow: "bg-indigo-600/8",
} as const;

// ─── Typography ───────────────────────────────────────────────────────────────
export const type = {
  // Section label above heading
  label: "text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400",
  // Section main heading
  h2: "text-4xl md:text-[2.75rem] font-bold text-white tracking-tight leading-[1.15]",
  // Section subheading (e.g. "Placement Verticals Covered")
  h3: "text-xl font-semibold text-white tracking-tight",
  // Body / description under section heading
  body: "text-[15px] text-zinc-400 leading-[1.75]",
  // Card body text
  cardBody: "text-sm text-zinc-400 leading-relaxed",
  // Small muted text
  muted: "text-xs text-zinc-500",
  // Caps label inside cards
  capsLabel: "text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-400",
} as const;

// ─── Spacing ─────────────────────────────────────────────────────────────────
export const spacing = {
  // Consistent section padding (reduces on mobile)
  section: "py-24 md:py-32",
  // Container
  container: "max-w-7xl mx-auto px-6 lg:px-8",
  // Gap between section label and h2
  labelToH2: "mt-3",
  // Gap between h2 and description paragraph
  h2ToDesc: "mt-4",
  // Gap between description and first content block
  descToContent: "mt-12",
  // Standard vertical gap between header block and content
  headerToContent: "mb-14",
} as const;

// ─── Cards ────────────────────────────────────────────────────────────────────
export const card = {
  base: "rounded-2xl border border-white/[0.07] bg-white/[0.03]",
  hover: "hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-300",
  padding: "p-6",
  paddingSm: "p-4",
} as const;

// ─── Buttons ─────────────────────────────────────────────────────────────────
export const btn = {
  primary:
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300",
  secondary:
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-white/[0.05] border border-white/[0.10] hover:bg-white/[0.09] hover:border-white/[0.18] transition-all duration-300",
  ghost:
    "text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200",
  icon: "w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.09] text-zinc-400 hover:text-white hover:bg-white/[0.09] transition-all duration-200",
} as const;

// ─── Filter buttons (Gallery-style) ──────────────────────────────────────────
export const filterBtn = {
  base: "px-4 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 bg-white/[0.04] text-zinc-500 border border-white/[0.07] hover:bg-white/[0.08] hover:text-zinc-200",
  active: "px-4 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25",
} as const;

// ─── Tags / pills ────────────────────────────────────────────────────────────
export const tag =
  "px-2.5 py-1 text-[11px] font-medium rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300";

// ─── Inputs ──────────────────────────────────────────────────────────────────
export const input =
  "w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200";

// ─── Dividers ─────────────────────────────────────────────────────────────────
export const divider = {
  top: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent",
} as const;

// ─── Animation presets (Framer Motion) ───────────────────────────────────────
export const anim = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
} as const;
