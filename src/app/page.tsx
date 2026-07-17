import type { Metadata } from "next";
import HeroSection from "../pages/Hero";
import ServicesTeaser from "../pages/ServicesTeaser";
import ProductShowcase from "../components/Product";
import AboutUsSection from "../pages/AboutUs";
import ContactUsSection from "../pages/Contact";
import { buildKeywords, CORE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Best Hardware Store in Bhaktapur & Kathmandu Valley",
  description:
    "Maa Kali Hardware is the best hardware store in Bhaktapur, trusted across the Kathmandu Valley since 1998. Shop 12,000+ genuine hardware, plumbing, electrical and paint products, or book a plumber, electrician or construction company near you for room addition, house repairing and full home construction.",
  keywords: buildKeywords(CORE_KEYWORDS, [
    "hardware shop in Bhaktapur",
    "hardware store near me Bhaktapur",
    "plumber in Bhaktapur",
    "electrician in Bhaktapur",
    "construction company in Kathmandu Valley",
  ]),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Best Hardware Store in Bhaktapur & Kathmandu Valley | Maa Kali Hardware",
    description:
      "12,000+ genuine hardware, plumbing, electrical and paint products, plus trusted plumber, electrician and construction services in Bhaktapur & the Kathmandu Valley.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesTeaser />
      <ProductShowcase />
      <ContactUsSection />
    </>
  );
}
