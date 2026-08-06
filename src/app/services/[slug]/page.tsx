import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService, SERVICE_TO_PRODUCT_CATEGORY } from "@/data/services";
import Reveal from "@/components/Reveal";
import { buildKeywords, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service | Maa Kali Hardware" };
  const title = `${service.name} in Bhaktapur & Kathmandu Valley`;
  const description = `${service.desc} Serving Bhaktapur, Kathmandu and the whole Kathmandu Valley — request ${service.name.toLowerCase()} from Maa Kali Hardware's own skilled teams.`;
  return {
    title,
    description,
    keywords: buildKeywords(service.keywords),
    alternates: { canonical: `/services/${service.id}` },
    openGraph: {
      title: `${title} | Maa Kali Hardware`,
      description,
      url: `/services/${service.id}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 6);
  const productCategory = SERVICE_TO_PRODUCT_CATEGORY[service.id];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.desc,
    provider: {
      "@type": "HardwareStore",
      name: "Maa Kali Hardware",
      url: SITE_URL,
    },
    areaServed: ["Bhaktapur", "Kathmandu", "Kathmandu Valley", "Nepal"],
    url: `${SITE_URL}/services/${service.id}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}/services/${service.id}` },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* HERO */}
      <section className="relative bg-ink text-white overflow-hidden px-[6vw] pt-[74px] pb-20">
        <div
          className="absolute -top-[30%] -left-[8%] w-[48vw] h-[48vw] rounded-full blur-[70px]"
          style={{
            background: "radial-gradient(circle, rgba(47,190,126,.42), transparent 60%)",
            animation: "blobA 19s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-[40%] -right-[8%] w-[48vw] h-[48vw] rounded-full blur-[70px]"
          style={{
            background: "radial-gradient(circle, rgba(28,90,160,.5), transparent 60%)",
            animation: "blobB 23s ease-in-out infinite",
          }}
        />
        <div className="max-w-[1320px] mx-auto relative">
          <div className="flex items-center gap-2.5 font-accent text-xs tracking-[.1em] text-white/60 mb-6">
            <Link href="/services" className="text-mint hover:underline">
              SERVICES
            </Link>
            <span>/</span>
            <span>{service.name}</span>
          </div>
          <div className="flex items-center gap-5 mb-6">
            <span className="w-[78px] h-[78px] bg-mint/15 border border-mint/40 flex items-center justify-center text-4xl shrink-0">
              {service.icon}
            </span>
            <h1 className="font-black tracking-[-.02em] leading-[1] text-[clamp(34px,5vw,64px)]">
              {service.name}
            </h1>
          </div>
          <p className="text-white/78 max-w-[760px] leading-relaxed text-[clamp(16px,1.6vw,19px)]">
            {service.intro}
          </p>
          <div className="flex gap-3.5 flex-wrap mt-8">
            <a
              href="/#contact"
              className="bg-forest hover:bg-mint hover:text-ink text-white font-bold text-[15px] px-7 py-[15px] transition-colors"
            >
              Request this service →
            </a>
            <Link
              href="/services"
              className="border border-white/28 hover:border-mint text-white font-bold text-[15px] px-7 py-[15px] transition-colors"
            >
              ← All services
            </Link>
            {productCategory && (
              <Link
                href={`/product?category=${encodeURIComponent(productCategory)}`}
                className="border border-white/28 hover:border-mint text-white font-bold text-[15px] px-7 py-[15px] transition-colors"
              >
                Shop {productCategory} products →
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-offwhite px-[6vw] py-24">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
          <Reveal>
            <div className="font-accent text-xs tracking-[.2em] text-forest mb-4">
              WHAT WE DO
            </div>
            <h2 className="font-black tracking-[-.02em] leading-[1.06] mb-5 text-[clamp(26px,3vw,40px)]">
              Our full scope for this service.
            </h2>
            <p className="text-body-muted leading-relaxed mb-6 text-[15.5px]">
              {service.long}
            </p>
            <div className="aspect-[4/3] bg-ink-2 border border-border-light flex items-center justify-center [background-image:repeating-linear-gradient(135deg,rgba(47,190,126,.12)_0_14px,transparent_14px_28px)]">
              <span className="font-accent text-xs tracking-[.1em] text-forest uppercase">
                [ project photo ]
              </span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-light border border-border-light">
            {service.scope.map((sc, i) => (
              <Reveal key={sc} index={i} as="div" className="bg-white p-6 flex flex-col gap-3">
                <span className="w-[34px] h-[34px] bg-[#EEF4EF] text-forest flex items-center justify-center font-black">
                  ✓
                </span>
                <span className="text-[16px] font-bold leading-snug">{sc}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink-2 text-white px-[6vw] py-24">
        <div className="max-w-[1320px] mx-auto">
          <Reveal className="text-center mb-14">
            <div className="font-accent text-xs tracking-[.2em] text-mint mb-3.5">
              HOW IT WORKS
            </div>
            <h2 className="font-black tracking-[-.02em] text-[clamp(28px,3.4vw,44px)]">
              Our process for {service.name}.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <Reveal key={p.step} index={i} className="border-t border-white/15 pt-5">
                <div className="text-mint/90 font-black text-[44px] leading-none mb-4">
                  {p.step}
                </div>
                <h3 className="text-[19px] font-extrabold mb-2.5">{p.t}</h3>
                <p className="text-white/66 text-sm leading-relaxed">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="bg-offwhite px-[6vw] py-24">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <h2 className="font-black tracking-[-.02em] text-[clamp(24px,2.8vw,36px)]">
              Explore other services
            </h2>
            <Link
              href="/services"
              className="font-bold text-forest border-b-2 border-forest pb-1 whitespace-nowrap"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((o, i) => (
              <Reveal key={o.id} index={i}>
                <Link
                  href={`/services/${o.id}`}
                  className="bg-white border border-border-light hover:border-forest px-6 py-6 flex items-center gap-4 transition-all hover:-translate-y-0.5"
                >
                  <span className="text-[28px]">{o.icon}</span>
                  <div>
                    <h3 className="text-[17px] font-extrabold mb-0.5">{o.name}</h3>
                    <span className="font-accent text-[11px] text-forest">
                      VIEW DETAILS →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-forest text-white overflow-hidden px-[6vw] py-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(47,190,126,.6), transparent 50%)",
          }}
        />
        <Reveal className="max-w-[1320px] mx-auto relative flex items-center justify-between gap-9 flex-wrap">
          <div>
            <h2 className="font-black tracking-[-.02em] leading-[1.05] mb-2 max-w-[640px] text-[clamp(26px,3.2vw,40px)]">
              Ready to get started with {service.name}?
            </h2>
            <p className="text-white/85 text-base">
              Get a free, same-day quote from our team.
            </p>
          </div>
          <a
            href="/#contact"
            className="bg-ink text-white font-extrabold text-base px-9 py-[19px] whitespace-nowrap transition-transform hover:-translate-y-1"
          >
            Get a Free Quote →
          </a>
        </Reveal>
      </section>
    </div>
  );
}
