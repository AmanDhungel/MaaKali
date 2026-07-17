import Image from "next/image";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";
import { whyFeatures } from "@/data/services";

const AboutUsSection = () => {
  return (
    <section className="bg-offwhite px-[6vw] py-[110px]" id="about">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-border-light">
            <Image
              src="/hardware1.webp"
              alt="Maa Kali Hardware Store in Bhaktapur - Best hardware shop in Kathmandu Valley"
              className="w-full h-full object-cover"
              width={500}
              height={625}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent flex items-end p-6">
              <span className="text-white text-lg font-medium">
                Serving the Kathmandu Valley since 1998
              </span>
            </div>
          </div>
          <div className="absolute -bottom-7 -right-5 bg-forest text-white px-6 py-5 max-w-[230px]">
            <div className="text-[34px] font-black leading-none">100%</div>
            <div className="text-[13.5px] mt-1.5 leading-snug">
              Genuine, branded products — no compromise on quality.
            </div>
          </div>
        </Reveal>

        <div>
          <Eyebrow index="03" label="ABOUT US" />
          <h2 className="font-black tracking-[-.02em] leading-[1.06] mb-5 text-[clamp(28px,3.4vw,42px)]">
            The best hardware shop in Bhaktapur — since 1998.
          </h2>
          <p className="text-body-muted leading-[1.7] mb-4 text-[15.5px]">
            Established in Bhaktapur,{" "}
            <strong className="text-ink">Maa Kali Hardware</strong> has grown
            to become one of the best hardware shops in the Kathmandu Valley,
            providing top-quality construction materials and tools to both
            professionals and homeowners.
          </p>
          <p className="text-body-muted leading-[1.7] mb-7 text-[15.5px]">
            As your trusted hardware store near you in Bhaktapur, we offer an
            extensive range of products including plumbing supplies,
            electrical equipment, paints, tools, and all essential
            construction materials in Nepal — backed by honest advice and
            fair prices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-7 mb-9">
            {whyFeatures.map((w) => (
              <div key={w.title} className="border-t-2 border-forest pt-4">
                <h3 className="text-[18px] font-extrabold mb-2">{w.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-body-muted">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3.5">
            <a
              target="_blank"
              href="https://maps.app.goo.gl/P2vyKJctPfcETxL96"
              className="bg-ink hover:bg-forest text-white font-bold px-7 py-[15px] transition-colors"
            >
              Visit Our Store →
            </a>
            <a
              href="#contact"
              className="border border-ink/20 hover:border-forest font-bold px-7 py-[15px] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
