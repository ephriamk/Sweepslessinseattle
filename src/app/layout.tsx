import type { Metadata } from "next";
import { Libre_Baskerville, Bebas_Neue, Great_Vibes, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd, webSiteJsonLd } from "@/lib/json-ld";
import { site } from "@/content/site";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://sweepslessinseattle.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description:
    "Professional house cleaning in Woodinville, Kirkland, Bellevue, and the greater Eastside. Restorative cleans, deep details, and date-night-ready atmospheres \u2014 we promise to sweep you off your feet.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${bebasNeue.variable} ${greatVibes.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
