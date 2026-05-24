import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ale Contreras | Frontend Architect",
  description:
    "Frontend Architect specializing in high-performance interfaces, AI integrations, and pixel-perfect design. 3+ years at Above + Beyond Consulting.",
  keywords: [
    "Frontend Architect",
    "React Developer",
    "Next.js",
    "TypeScript",
    "AI Integration",
    "Web Development",
    "Ale Contreras",
  ],
  authors: [{ name: "Ale Contreras" }],
  openGraph: {
    title: "Ale Contreras | Frontend Architect",
    description:
      "Crafting high-performance interfaces and AI-powered experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ale Contreras | Frontend Architect",
    description:
      "Crafting high-performance interfaces and AI-powered experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
