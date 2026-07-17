"use client";
import { PostContact } from "@/services/contact.services";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContactFormProps, ContactFormType } from "@/types/contact.types";
import { zodResolver } from "@hookform/resolvers/zod";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

const queryClient = new QueryClient();

const contactCards = [
  {
    icon: "📍",
    title: "Our Store",
    body: "Maa Kali Hardware, Bhaktapur",
    link: {
      href: "https://maps.app.goo.gl/nfZkfVEQiof2pJiSA",
      label: "View on Google Maps →",
    },
  },
  {
    icon: "📞",
    title: "Call Us",
    body: "+977 - 9851081637 (Store)\n+977 - 9841227822 (Mobile)",
  },
  {
    icon: "✉️",
    title: "Email Us",
    body: "binaydhungel@gmail.com",
  },
  {
    icon: "🕖",
    title: "Opening Hours",
    body: "Sun–Fri: 7:00 AM – 7:00 PM\nSat: 7:00 AM – 3:00 PM",
  },
];

const ContactUsSectionContent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormProps>({
    resolver: zodResolver(ContactFormType),
  });

  const { mutate } = PostContact();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Message sent successfully");
        reset();
      },
      onError: () => {
        toast.error("Error while sending message");
      },
    });
  };

  return (
    <section className="bg-offwhite px-[6vw] py-[110px]" id="contact">
      <div className="max-w-[1320px] mx-auto">
        <Reveal className="mb-14">
          <Eyebrow index="06" label="CONTACT" />
          <h2 className="font-black tracking-[-.02em] leading-[1] mb-4 text-[clamp(32px,4vw,52px)]">
            Let&apos;s talk about your project.
          </h2>
          <p className="text-body-muted max-w-[600px] text-[17px]">
            Visit the store, call us, or send a message — we&apos;re happy to
            help with products, quotes and home services anywhere in the
            Kathmandu Valley.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          <Reveal className="flex flex-col gap-5">
            {contactCards.map((c) => (
              <div
                key={c.title}
                className="bg-white border border-border-light px-7 py-6 flex gap-4 items-start"
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <div className="font-extrabold text-[17px] mb-1.5">
                    {c.title}
                  </div>
                  <div className="text-body-muted text-[14.5px] leading-relaxed whitespace-pre-line">
                    {c.body}
                  </div>
                  {c.link && (
                    <a
                      href={c.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest hover:text-mint hover:underline mt-2 inline-block font-semibold text-sm"
                    >
                      {c.link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal index={1} className="bg-white border border-border-light p-11">
            <h3 className="text-[26px] font-black mb-1.5">Send us a message</h3>
            <p className="text-body-muted text-[14.5px] mb-7">
              We usually reply the same day during business hours.
            </p>
            <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[12.5px] font-bold tracking-[.04em] text-ink">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  {...register("name", { required: true })}
                  className="border border-border-light px-4 py-3.5 text-[15px] outline-none focus:border-forest transition-colors"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">Name is required</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-[12.5px] font-bold tracking-[.04em] text-ink">
                  PHONE *
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+977"
                  {...register("phone", { required: true })}
                  className="border border-border-light px-4 py-3.5 text-[15px] outline-none focus:border-forest transition-colors"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[12.5px] font-bold tracking-[.04em] text-ink">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@email.com"
                  {...register("email", { required: true })}
                  className="border border-border-light px-4 py-3.5 text-[15px] outline-none focus:border-forest transition-colors"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">Email is required</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[12.5px] font-bold tracking-[.04em] text-ink">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us what you need — products, a quote, or a service..."
                  {...register("message", { required: true })}
                  className="border border-border-light px-4 py-3.5 text-[15px] outline-none focus:border-forest transition-colors resize-y"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">Message is required</span>
                )}
              </div>
              <button
                type="submit"
                className="bg-forest hover:bg-mint hover:text-ink text-white font-extrabold text-base py-4 transition-colors"
              >
                Send Message →
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const ContactUsSection = () => (
  <QueryClientProvider client={queryClient}>
    <ContactUsSectionContent />
  </QueryClientProvider>
);

export default ContactUsSection;
