import ProductShowcase from "@/components/Product";
import { Metadata } from "next";
import { buildKeywords, CORE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Shop Hardware, Plumbing, Electrical & Paint Products",
  description:
    "Shop 12,000+ genuine hardware products in Bhaktapur — plumbing supplies, electrical items, paints, tools, tiles and construction materials, all at fair prices from the best hardware store in the Kathmandu Valley.",
  keywords: buildKeywords(CORE_KEYWORDS, [
    "buy hardware online Nepal",
    "plumbing supplies Bhaktapur",
    "electrical items Nepal",
    "construction materials price Nepal",
    "cement price Nepal",
  ]),
  alternates: { canonical: "/product" },
  openGraph: {
    title: "Shop Hardware, Plumbing, Electrical & Paint Products | Maa Kali Hardware",
    description:
      "12,000+ genuine hardware, plumbing, electrical, paint and construction products at fair prices — the best hardware store in Bhaktapur & the Kathmandu Valley.",
    url: "/product",
  },
};

export default ProductShowcase;
