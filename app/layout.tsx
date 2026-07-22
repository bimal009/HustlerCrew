import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://hustlercrew.com";
const title = "Hustler Crew - Professional PUBG Mobile Esports Organization";
const description =
  "Hustler Crew is a professional PUBG Mobile esports organization from the UK and Nepal. Roster, official jerseys, tournament history, services and coaching.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Hustler Crew",
  },
  description,
  keywords: [
    "Hustler Crew",
    "PUBG Mobile esports",
    "PUBG Mobile team",
    "PMGO",
    "PUBG Mobile Global Open",
    "esports organization",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Hustler Crew",
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hustler Crew at the PUBG Mobile Global Open",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Hustler Crew",
  alternateName: "Hatyara Crew",
  url: siteUrl,
  logo: `${siteUrl}/emblem.png`,
  sameAs: ["https://liquipedia.net/pubgmobile/Hustler_Crew"],
  sport: "Esports",
  foundingDate: "2024-02-21",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
