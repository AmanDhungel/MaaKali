"use client";
import { PostContact } from "@/services/contact.services";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "react-feather";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContactFormProps, ContactFormType } from "@/types/contact.types";
import { zodResolver } from "@hookform/resolvers/zod";
const queryClient = new QueryClient();

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

  const onSubmit = async (data: any) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("message sent successfully");
        reset();
      },
      onError: () => {
        toast.error("error while sending message");
      },
    });
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Contact &nbsp;
            <span className="text-amber-600 dark:text-amber-400">
              Radhe Radhe Hardware
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Visit us, call us, or send a message—we're here to help with all
            your hardware needs in <strong>Bhaktapur, Nepal</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h3>

            <div className="flex items-start mb-6">
              <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-amber-600 dark:text-amber-300" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  Our Store
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Maa Kali Hardware, Bhaktapur <br />
                </p>
                <a
                  href="https://maps.app.goo.gl/nfZkfVEQiof2pJiSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 dark:text-amber-400 hover:underline mt-2 inline-block">
                  View on Google Maps →
                </a>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  Call Us
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <a
                    href="tel:+9771234567890"
                    className="hover:text-amber-600 dark:hover:text-amber-400">
                    +977 - 9851081637
                  </a>{" "}
                  (Store) <br />
                  <a
                    href="tel:+9779876543210"
                    className="hover:text-amber-600 dark:hover:text-amber-400">
                    +977 - 9841227822
                  </a>{" "}
                  (Mobile)
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  Email Us
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <a
                    href="mailto:binaydhungel@gmail.com"
                    className="hover:text-amber-600 dark:hover:text-amber-400">
                    binaydhungel@gmail.com
                  </a>{" "}
                  <br />
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                <Clock className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                  Opening Hours
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Sun-Fri:</strong> 7:00 AM - 7:00 PM <br />
                  <strong>Sat:</strong> 7:00 AM - 3:00 PM <br />
                  <em className="text-sm">Closed only on Urgency or Work</em>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">Name is required</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Email is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: true })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:text-white"></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    Message is required
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Visit the <strong>Best Hardware Shop in Kathmandu Valley</strong>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Maa Kali Hardware - Radhe Radhe is your trusted
            <strong>construction materials supplier in Nepal</strong>, offering
            top-quality products for all your home improvement and building
            needs. Whether you're looking to
            <strong>buy plumbing tools in Kathmandu</strong> or need expert
            advice, our team is ready to assist you. Find us easily as the
            leading <strong>hardware store near me</strong> in Bhaktapur.
          </p>
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/P2vyKJctPfcETxL96"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Visit Our Store
          </a>
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
