import Reveal from "@/components/Reveal";

const HeroSection = () => {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute -top-[15%] -left-[5%] w-[55vw] h-[55vw] blur-[60px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(47,190,126,.55), transparent 62%)",
            animation: "blobA 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[5%] -right-[12%] w-[58vw] h-[58vw] blur-[70px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(28,90,160,.6), transparent 62%)",
            animation: "blobB 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-[25%] left-[25%] w-[50vw] h-[50vw] blur-[65px]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(28,138,90,.5), transparent 60%)",
            animation: "blobC 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -top-[30%] left-1/2 w-[90vw] h-[90vw] -ml-[45vw] rounded-full blur-[40px] opacity-60"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(47,190,126,.12), rgba(20,40,70,.05), rgba(47,190,126,.12), rgba(20,40,70,.05), rgba(47,190,126,.12))",
            animation: "meshSpin 40s linear infinite",
          }}
        />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "62px 62px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, #000, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, #000, transparent 90%)",
        }}
      />

      <div className="relative z-[2] max-w-[1320px] mx-auto px-[6vw] pt-20 pb-24 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <Reveal
            className="inline-flex items-center gap-2.5 font-accent text-xs tracking-[.18em] text-mint border border-mint/35 px-3.5 py-2 mb-7"
          >
            <span className="w-[7px] h-[7px] bg-mint rounded-full" />
            HARDWARE · MATERIALS · HOME SERVICES — NEPAL
          </Reveal>
          <Reveal
            as="h1"
            index={1}
            className="font-black tracking-[-.02em] leading-[.98] mb-6 text-[clamp(40px,6vw,82px)]"
          >
            Everything to{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #2FBE7E, #7fd1ff, #2FBE7E, #7fd1ff)",
                backgroundSize: "200% auto",
                animation: "shine 6s linear infinite",
              }}
            >
              build, fix &amp; finish
            </span>{" "}
            your home.
          </Reveal>
          <Reveal
            as="p"
            index={2}
            className="text-white/74 max-w-[560px] mb-9 leading-relaxed text-[clamp(16px,1.5vw,19px)]"
          >
            Maa Kali Hardware is your one-stop hardware store and
            home-solutions partner in Bhaktapur, Nepal — quality construction
            materials, plumbing, paints, tools and tiles, plus expert
            installation services for your whole house.
          </Reveal>
          <Reveal index={3} className="flex gap-3.5 flex-wrap mb-12">
            <a
              href="/product"
              className="bg-forest hover:bg-mint hover:text-ink text-white font-bold text-[15.5px] px-7 py-[17px] inline-flex items-center gap-2.5 transition-all hover:-translate-y-0.5"
            >
              Explore Products →
            </a>
            <a
              href="/services"
              className="border border-white/28 hover:border-mint hover:bg-mint/10 text-white font-bold text-[15.5px] px-7 py-[17px] inline-flex items-center gap-2.5 transition-colors"
            >
              Our Services
            </a>
          </Reveal>
          <Reveal index={4} className="flex gap-9 flex-wrap">
            <div>
              <div className="text-[30px] font-black text-mint">
                28<span className="text-lg">yrs</span>
              </div>
              <div className="font-accent text-[11px] tracking-[.1em] text-white/50 mt-0.5">
                SINCE 1998
              </div>
            </div>
            <div>
              <div className="text-[30px] font-black">12k+</div>
              <div className="font-accent text-[11px] tracking-[.1em] text-white/50 mt-0.5">
                PRODUCTS
              </div>
            </div>
            <div>
              <div className="text-[30px] font-black">5,000+</div>
              <div className="font-accent text-[11px] tracking-[.1em] text-white/50 mt-0.5">
                HOMES SERVED
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal index={2} className="relative hidden lg:block">
          <div className="relative aspect-[4/5] bg-ink-2 border border-white/14 flex items-center justify-center [background-image:repeating-linear-gradient(135deg,rgba(47,190,126,.10)_0_14px,transparent_14px_28px)]">
            <span className="font-accent text-[13px] tracking-[.1em] text-mint uppercase">
              [ storefront / team photo ]
            </span>
            <span className="absolute top-3.5 left-3.5 font-accent text-[10px] tracking-[.14em] text-white/40">
              FIG.01 — MAA KALI HARDWARE, BHAKTAPUR
            </span>
          </div>
          <div
            className="absolute -bottom-6 -left-6 bg-white text-ink px-6 py-5 shadow-2xl"
            style={{ animation: "floaty 6s ease-in-out infinite" }}
          >
            <div className="font-accent text-[10px] tracking-[.16em] text-forest">
              FAMILY RUN
            </div>
            <div className="text-[22px] font-black leading-[1.05] mt-1">
              बलियो घर,
              <br />
              भरपर्दो सामान
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative z-[2] text-center pb-8">
        <div className="inline-block w-[22px] h-9 border-2 border-white/30 rounded-full relative">
          <span
            className="absolute top-[7px] left-1/2 -ml-0.5 w-1 h-2 bg-mint rounded-full"
            style={{ animation: "scrollcue 1.8s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
