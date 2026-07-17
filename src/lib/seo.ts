export const SITE_URL = "https://nationalhomedecor.com.np";
export const SITE_NAME = "Maa Kali Hardware";
export const DEFAULT_OG_IMAGE = "/hardware1.webp";

export const BUSINESS = {
  legalName: "Maa Kali Hardware & Home Solutions",
  telephone: "+977-9851081637",
  email: "hello@maakalihardware.com.np",
  streetAddress: "Main Road, Radhe Radhe",
  addressLocality: "Bhaktapur",
  addressRegion: "Bagmati Province",
  addressCountry: "NP",
  areaServed: [
    "Bhaktapur",
    "Kathmandu",
    "Lalitpur",
    "Kathmandu Valley",
    "Nepal",
  ],
  sameAs: [
    "https://www.facebook.com/groups/1658842604386500",
    "https://www.instagram.com/nationalhomedecor637/",
    "https://www.youtube.com/@MaaXNational",
  ],
  openingHours: [
    "Su-Fr 07:00-19:00",
    "Sa 07:00-15:00",
  ],
};

// Core keyword targets requested for the whole site.
export const CORE_KEYWORDS = [
  "hardware store",
  "hardware shop",
  "hardware near me",
  "best hardware in Nepal",
  "best hardware in Bhaktapur",
  "best hardware in Kathmandu Valley",
  "best hardware in Kathmandu",
  "hardware store in Bhaktapur",
  "hardware store in Kathmandu",
  "plumber",
  "plumber near me",
  "electrician",
  "electrician near me",
  "house repairing",
  "repairing items",
  "repairing",
  "room addition",
  "construction company",
  "construction company near me",
  "construction materials Nepal",
  "home renovation Nepal",
  "Maa Kali Hardware",
];

export function buildKeywords(...groups: (string[] | undefined)[]) {
  const all = groups.flat().filter(Boolean) as string[];
  return Array.from(new Set(all));
}
