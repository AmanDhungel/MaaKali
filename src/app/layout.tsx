import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StructuredData from "@/components/StructuredData";
import { ToastContainer } from "react-toastify";
import TanStackQuery from "@/context/TanStackQuery";
import {
  BUSINESS,
  CORE_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Maa Kali Hardware | Best Hardware Store in Bhaktapur, Kathmandu Valley",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Maa Kali Hardware & Home Solutions is the best hardware store in Bhaktapur, serving the whole Kathmandu Valley since 1998. Find a trusted plumber, electrician and construction company near you, plus 12,000+ genuine hardware, plumbing, electrical, paint and construction products.",
  keywords: CORE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Maa Kali Hardware | Best Hardware Store in Bhaktapur, Kathmandu Valley",
    description:
      "Trusted hardware store, plumber, electrician and construction company in Bhaktapur & the Kathmandu Valley since 1998. 12,000+ genuine products plus expert home services.",
    images: [
      { url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Maa Kali Hardware | Best Hardware Store in Bhaktapur, Kathmandu Valley",
    description:
      "Trusted hardware store, plumber, electrician and construction company in Bhaktapur & the Kathmandu Valley since 1998.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "tPlILGAwGX1YB35OmXuWBvgiBiI6p-FZka76KGv7UBo",
  },
  other: {
    "geo.placename": BUSINESS.addressLocality,
    "geo.region": "NP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${spaceMono.variable} antialiased`}>
        <TanStackQuery>
          <Navbar />
          <div className="min-h-[80vh]">{children}</div>
          <ToastContainer />
          <Footer />
        </TanStackQuery>
      </body>
    </html>
  );
}
