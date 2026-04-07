import type { Metadata } from "next";
import { DM_Sans, Fraunces, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
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
        url: "/opengraph-image",
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
    images: ["/opengraph-image"],
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Venkatesh TV",
  url: "https://www.venkateshtv.com",
  sameAs: [
    "https://www.linkedin.com/in/venkateshtv/",
  ],
  jobTitle: "CEO & Co-Founder",
  worksFor: {
    "@type": "Organization",
    name: "Impelox Tech",
    url: "https://impelox.com",
  },
  description:
    "Two-time CTO, CEO & Founder of Impelox Tech. Building AI agents for insurance, healthcare, and regulated industries. Based in Chennai, India.",
  knowsAbout: [
    "Artificial Intelligence",
    "AI Agents",
    "Software Engineering",
    "Engineering Leadership",
    "Workflow Automation",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Venkatesh TV",
  url: "https://www.venkateshtv.com",
  description:
    "Writing on AI agents, engineering leadership, and building software — by Venkatesh TV, 2× CTO and CEO of Impelox.",
  author: {
    "@type": "Person",
    name: "Venkatesh TV",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-V0N0YMYBM7" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V0N0YMYBM7');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
