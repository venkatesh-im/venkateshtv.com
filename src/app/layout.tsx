import type { Metadata } from "next";
import { DM_Sans, Fraunces, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || "https://venkateshtv.com"),
  title: {
    default: "Venkatesh TV — 2× CTO, CEO & Founder, Impelox",
    template: "%s | Venkatesh TV",
  },
  description:
    "Venkatesh TV — two-time CTO, CEO & Founder of Impelox Tech. Leading 60+ people building AI agents for regulated industries. Chennai, India. Writing on AI, engineering, and leadership.",
  keywords: [
    "Venkatesh TV",
    "Impelox Tech",
    "AI agents",
    "CEO",
    "founder",
    "artificial intelligence",
    "Chennai",
    "India",
    "software engineer",
    "startup",
    "CTO",
    "Impelox",
  ],
  authors: [{ name: "Venkatesh TV", url: "https://venkateshtv.com" }],
  creator: "Venkatesh TV",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://venkateshtv.com",
    siteName: "Venkatesh TV",
    title: "Venkatesh TV — 2× CTO, CEO & Founder, Impelox",
    description:
      "Two-time CTO; CEO & Founder of Impelox. Leading 60+ people building AI agents for regulated industries. Chennai, India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Venkatesh TV — 2× CTO, CEO & Founder, Impelox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkatesh TV — 2× CTO, CEO & Founder, Impelox",
    description:
      "Two-time CTO; CEO & Founder of Impelox. AI agents, 60+ team, Chennai.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full w-full ${dmSans.variable} ${fraunces.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen w-full min-w-0 bg-[#020617] font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
