import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import { SITE } from "@/constants/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap", weight: ["500", "700", "800"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap", weight: ["500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Trionex India | Digital Marketing for Builders & Interior Designers",
    template: "%s | Trionex India",
  },
  description:
    "Trionex India helps real estate developers, builders and interior design firms generate qualified leads through Meta Ads, Google Ads, premium websites and AI automation. Based in Ranchi, Jharkhand.",
  keywords: [
    "real estate digital marketing",
    "builder marketing agency",
    "interior designer marketing",
    "Meta Ads for real estate",
    "Google Ads for builders",
    "Trionex India",
    "Ranchi digital marketing agency",
  ],
  authors: [{ name: "Trionex India Private Limited" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: "Trionex India",
    title: "Trionex India | Digital Marketing for Builders & Interior Designers",
    description:
      "Generate more qualified property buyers with performance marketing, premium websites and AI automation built for real estate and interior design brands.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Trionex India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trionex India | Digital Marketing for Builders & Interior Designers",
    description:
      "Generate more qualified property buyers with performance marketing, premium websites and AI automation.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    addressCountry: "IN",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: `${SITE.url}/og-image.jpg`,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 10:00-19:00",
  priceRange: "₹₹",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
