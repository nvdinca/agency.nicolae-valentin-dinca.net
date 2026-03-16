import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Nicolae-Valentin Dinca - Portfolio - Real Estate Agency";
const siteDescription =
  "Portfolio project: real estate agency site. Residential and commercial properties, sales, lettings, and investment advisory. Fictional demo for global agencies.";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agency.nicolae-valentin-dinca.net";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  keywords: [
    "real estate",
    "agency",
    "portfolio",
    "Nicolae-Valentin Dinca",
    "property",
    "listings",
  ],
  authors: [{ name: "Nicolae-Valentin Dinca", url: "https://nicolae-valentin-dinca.net" }],
  creator: "Nicolae-Valentin Dinca",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning
      >
        <DisclaimerBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
