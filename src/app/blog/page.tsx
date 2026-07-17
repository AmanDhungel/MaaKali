import BlogSection from "../../components/BlogCard";

import { Metadata } from "next";
import { buildKeywords, CORE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hardware, Plumbing & Construction Guides",
  description:
    "Practical guides on hardware, plumbing, electrical work, house repairing, room addition and construction — written by Maa Kali Hardware, the best hardware store in Bhaktapur & the Kathmandu Valley.",
  keywords: buildKeywords(CORE_KEYWORDS, [
    "hardware tips Nepal",
    "plumbing guide Nepal",
    "construction guide Nepal",
    "home repair tips Bhaktapur",
  ]),
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Hardware, Plumbing & Construction Guides | Maa Kali Hardware",
    description:
      "Practical guides on hardware, plumbing, electrical work, house repairing, room addition and construction from Bhaktapur's trusted hardware store.",
    url: "/blog",
  },
};

export default BlogSection;
