import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/hardware1.webp"
              alt="Maa Kali Hardware Store in Bhaktapur - Best hardware shop in Kathmandu Valley"
              className="w-full h-auto object-cover"
              width={500}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <span className="text-white text-lg font-medium">
                Serving the Kathmandu Valley since 1995
              </span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About{" "}
              <span className="text-amber-600 dark:text-amber-400">
                Maa Kali Hardware - Radhe Radhe
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              Established in Bhaktapur,{" "}
              <strong>Maa Kali Hardware - Radhe Radhe</strong> has grown to
              become one of the
              <strong> best hardware shops in Kathmandu Valley</strong>,
              providing top-quality construction materials and tools to both
              professionals and homeowners.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              As your trusted <strong>hardware store near me</strong> in
              Bhaktapur, we offer an extensive range of products including
              plumbing supplies, electrical equipment, paints, tools, and all
              essential <strong>construction materials in Nepal</strong>. Our
              knowledgeable staff can help you find exactly what you need for
              any project.
            </p>

            <div className="bg-amber-50 dark:bg-gray-800 p-6 rounded-lg my-6 border-l-4 border-amber-500">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Why Choose Us?
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <strong>Wide selection</strong> &nbsp; of quality products
                  from trusted brands
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <strong>Expert advice</strong> &nbsp; for all your
                  construction needs
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <strong>Competitive prices</strong> &nbsp; on all plumbing
                  tools and building materials
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">✓</span>
                  <strong>Convenient location</strong> &nbsp; in Bhaktapur with
                  easy access from Kathmandu
                </li>
              </ul>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              Whether you're looking to{" "}
              <strong>buy plumbing tools in Kathmandu</strong>, renovate your
              home, or undertake a major construction project, Radhe Radhe
              Hardware is your one-stop solution. Visit our store today and
              experience why we're considered among the
              <strong> top construction materials suppliers in Nepal</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/P2vyKJctPfcETxL96">
                  Visit Our Store
                </a>
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
                <a href="#contact">Contact Us</a>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 prose dark:prose-invert max-w-none bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Your Trusted Hardware Partner in Kathmandu Valley
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            As a leading <strong>hardware store in Bhaktapur</strong>, Radhe
            Radhe Hardware takes pride in serving both individual homeowners and
            construction professionals across the Kathmandu Valley. Our
            extensive inventory includes everything from basic plumbing fixtures
            to specialized construction tools, making us the preferred choice
            for those searching for a{" "}
            <strong>reliable hardware store near me</strong>.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            We understand that finding quality{" "}
            <strong>construction materials in Nepal</strong> can be challenging.
            That's why we've carefully curated our product selection to include
            only the most durable and dependable materials. Whether you need to
            <strong> buy plumbing tools in Kathmandu</strong> or source
            materials for a large-scale construction project, our team has the
            expertise to guide you.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Our convenient location in Bhaktapur makes us easily accessible to
            customers throughout the Kathmandu Valley. With competitive pricing,
            expert advice, and exceptional customer service, it's no wonder
            Radhe Radhe Hardware is recognized as one of the{" "}
            <strong>best hardware shops in Kathmandu</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
