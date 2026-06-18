/**
 * Design System Tokens — Light Academic Theme
 * Single source of truth for all visual constants.
 * 8px base grid. One primary accent color (blue).
 */

// ─── Backgrounds ─────────────────────────────────────────────────────────────
export const bg = {
  base: "#ffffff",
  raised: "#f8fafc",
  footer: "#0f172a",
} as const;

// ─── Accent ───────────────────────────────────────────────────────────────────
export const accent = {
  label: "text-blue-600",
  line: "bg-blue-600",
  gradient: "bg-gradient-to-r from-blue-600 to-sky-500",
  gradientText: "gradient-text",
  shadow: "shadow-blue-500/15",
  shadowHover: "shadow-blue-500/25",
  glow: "bg-blue-500/4",
} as const;

// ─── Typography ───────────────────────────────────────────────────────────────
export const type = {
  label: "text-xs font-semibold uppercase tracking-[0.15em] text-blue-600",
  h2: "text-4xl md:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.15]",
  h3: "text-xl font-semibold text-slate-800 tracking-tight",
  body: "text-[15px] text-slate-600 leading-[1.75]",
  cardBody: "text-sm text-slate-500 leading-relaxed",
  muted: "text-xs text-slate-400",
  capsLabel: "text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600",
} as const;

// ─── Spacing ─────────────────────────────────────────────────────────────────
export const spacing = {
  section: "py-24 md:py-32",
  container: "max-w-7xl mx-auto px-6 lg:px-8",
  labelToH2: "mt-3",
  h2ToDesc: "mt-4",
  descToContent: "mt-12",
  headerToContent: "mb-14",
} as const;

// ─── Cards ────────────────────────────────────────────────────────────────────
export const card = {
  base: "rounded-2xl border border-slate-200 bg-white shadow-sm",
  hover: "hover:border-blue-200 hover:shadow-md transition-all duration-300",
  padding: "p-6",
  paddingSm: "p-4",
} as const;

// ─── Buttons ─────────────────────────────────────────────────────────────────
export const btn = {
  primary:
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 hover:from-blue-700 hover:to-blue-800 transition-all duration-300",
  secondary:
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all duration-300",
  ghost:
    "text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors duration-200",
  icon: "w-9 h-9 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all duration-200",
} as const;

// ─── Filter buttons ───────────────────────────────────────────────────────────
export const filterBtn = {
  base: "px-4 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 bg-white text-slate-500 border border-slate-200 hover:bg-slate-50 hover:text-slate-700 shadow-sm",
  active: "px-4 py-2 text-[13px] font-medium rounded-xl transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-500/20",
} as const;

// ─── Tags / pills ────────────────────────────────────────────────────────────
export const tag =
  "px-2.5 py-1 text-[11px] font-medium rounded-full border border-blue-200 bg-blue-50 text-blue-700";

// ─── Inputs ──────────────────────────────────────────────────────────────────
export const input =
  "w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200";

// ─── Dividers ─────────────────────────────────────────────────────────────────
export const divider = {
  top: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent",
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
