import type { Metadata } from "next";
import { DM_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono" });

export const metadata: Metadata = {
  title: "Param Shelke | Full-Stack Software Engineer",
  description: "Param Shelke is a full-stack software engineer from Pune building scalable web applications, backend systems, AI-powered products and modern digital experiences.",
  keywords: ["Param Shelke", "Full-Stack Software Engineer", "Backend Engineer", "AI Systems", "Pune"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Param Shelke — Full-Stack Software Engineer",
    description: "Engineering portfolio and software systems lab of Param Shelke.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Param Shelke — Full-Stack Software Engineer",
    description: "Building scalable web applications, backend systems and AI-powered products.",
  },
  alternates: { canonical: "/" },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dmMono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Param Shelke", jobTitle: "Full-Stack Software Engineer", sameAs: ["https://github.com/param-atxep", "https://linkedin.com/in/param-shelke-856722381", "https://leetcode.com/u/Param_shelke"] }) }} />{children}</body>
    </html>
  );
}
