import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || "https://venkateshtv.com"),
  title: {
    default: "Venkatesh TV — Software Engineer & Developer",
    template: "%s | Venkatesh TV",
  },
  description:
    "Personal website and blog of Venkatesh TV, a software engineer and developer. Writing about web development, software architecture, and engineering.",
  keywords: ["software engineer", "developer", "web development", "blog", "Venkatesh TV"],
  authors: [{ name: "Venkatesh TV", url: "https://venkateshtv.com" }],
  creator: "Venkatesh TV",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://venkateshtv.com",
    siteName: "Venkatesh TV",
    title: "Venkatesh TV — Software Engineer & Developer",
    description:
      "Personal website and blog of Venkatesh TV, a software engineer and developer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Venkatesh TV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkatesh TV — Software Engineer & Developer",
    description:
      "Personal website and blog of Venkatesh TV, a software engineer and developer.",
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
