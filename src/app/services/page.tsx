import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import Reveal from "@/components/Reveal";
import { buildKeywords, CORE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home Services in Bhaktapur & Kathmandu Valley",
  description:
    "Trusted plumber, electrician and construction company services in Bhaktapur & the Kathmandu Valley — room addition, house repairing, full house construction, renovation, painting, modular kitchens, false ceiling and more, delivered by our own skilled teams.",
  keywords: buildKeywords(
    CORE_KEYWORDS,
    services.flatMap((s) => [s.name, `${s.name} near me`]),
    ["home services Nepal", "home improvement Bhaktapur"]
  ),
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Home Services in Bhaktapur & Kathmandu Valley | Maa Kali Hardware",
    description:
      "Plumber, electrician and construction company services — room addition, house repairing, full construction, renovation and more across Bhaktapur & the Kathmandu Valley.",
    url: "/services",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <section className="relative bg-ink text-white overflow-hidden px-[6vw] pt-20 pb-[70px]">
        <div
          className="absolute -top-[30%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[70px] opacity-80"
          style={{
            background: "radial-gradient(circle, rgba(28,138,90,.45), transparent 60%)",
            animation: "blobC 22s ease-in-out infinite",
          }}
        />
        <div className="max-w-[1320px] mx-auto relative">
          <div className="font-accent text-xs tracking-[.2em] text-mint mb-4">SERVICES</div>
          <h1 className="font-black tracking-[-.02em] leading-[1] mb-4 text-[clamp(38px,5.5vw,72px)]">
            Skilled hands for
            <br />
            every part of your home.
          </h1>
          <p className="text-white/72 max-w-[620px] text-[17px]">
            Beyond the counter, Maa Kali provides complete home-improvement
            services in Nepal — delivered by experienced, reliable teams using
            genuine materials.
          </p>
        </div>
      </section>

      <section className="bg-offwhite px-[6vw] pt-16 pb-[110px]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-light border border-border-light">
          {services.map((s, i) => (
            <Reveal key={s.id} index={i % 8} as="div" className="bg-white">
              <Link
                href={`/services/${s.id}`}
                className="block p-7 h-full hover:bg-ink group transition-colors"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-accent text-[13px] text-forest group-hover:text-mint">
                    {s.num}
                  </span>
                  <span className="w-11 h-11 bg-[#EEF4EF] group-hover:bg-white/10 flex items-center justify-center text-xl">
                    {s.icon}
                  </span>
                </div>
                <h3 className="text-[19px] font-extrabold mb-2 tracking-[-.01em] group-hover:text-white">
                  {s.name}
                </h3>
                <p className="text-[14px] leading-relaxed text-body-muted group-hover:text-white/70">
                  {s.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
