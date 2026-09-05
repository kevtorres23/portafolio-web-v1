import type { Metadata } from "next";
import { Caveat, Poppins } from "next/font/google";

import { site } from "@/lib/data/site";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Diseñador y Desarrollador Web`,
  description: site.description,
  openGraph: {
    title: `${site.name} — Diseñador y Desarrollador Web`,
    description: site.description,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${poppins.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
