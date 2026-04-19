import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naushad K H — Maverick in Campus Placements",
  description:
    "Naushad K H — Strategic Corporate Relations Leader & Campus Placement Expert. Building bridges between industry and academia across Pan-India.",
  keywords:
    "campus placements, university placements, corporate relations, talent acquisition, Bennett University, industry connect",
  openGraph: {
    title: "Naushad K H — Maverick in Campus Placements",
    description:
      "Strategic Corporate Relations Leader building end-to-end placement ecosystems for university students.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
