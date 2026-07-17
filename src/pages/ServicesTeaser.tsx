import Link from "next/link";
import { services } from "@/data/services";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

const featured = services.slice(0, 6);

const ServicesTeaser = () => {
  return (
    <section id="services" className="bg-offwhite px-[6vw] py-[120px]">
      <div className="max-w-[1320px] mx-auto">
        <Reveal className="flex items-end justify-between gap-8 flex-wrap mb-14">
          <div>
            <Eyebrow index="01" label="OUR SERVICES" />
            <h2 className="font-black tracking-[-.02em] leading-[1.02] max-w-[680px] text-[clamp(32px,4vw,52px)]">
              Complete home solutions, built by our own skilled teams.
            </h2>
          </div>
          <Link
            href="/services"
            className="font-bold text-forest border-b-2 border-forest pb-1 whitespace-nowrap"
          >
            All services →
          </Link>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-light border border-border-light">
          {featured.map((s, i) => (
            <Reveal key={s.id} index={i} as="div" className="bg-white">
              <Link
                href={`/services/${s.id}`}
                className="block p-9 h-full hover:bg-ink group transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-accent text-[13px] text-forest group-hover:text-mint">
                    {s.num}
                  </span>
                  <span className="w-11 h-11 bg-[#EEF4EF] group-hover:bg-white/10 flex items-center justify-center text-xl">
                    {s.icon}
                  </span>
                </div>
                <h3 className="text-[22px] font-extrabold mb-3 tracking-[-.01em] group-hover:text-white">
                  {s.name}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-body-muted group-hover:text-white/70 mb-[18px]">
                  {s.desc}
                </p>
                <div className="flex flex-col gap-1.5">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="text-[13.5px] text-forest group-hover:text-mint font-semibold"
                    >
                      — {it}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTeaser;
