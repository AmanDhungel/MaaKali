import { Droplet, Layout, Layers } from "react-feather";

import { FaBrush } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { RiSofaFill } from "react-icons/ri";
const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Professional{" "}
            <span className="text-amber-600 dark:text-amber-400">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Radhe Radhe Hardware provides complete home solution services in
            Bhaktapur with skilled craftsmanship and quality materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-6">
              <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Droplet className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Plumbing Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Expert plumbing installation and repair services for homes and
                businesses in Bhaktapur. We handle pipe fitting, tap
                installation, drainage solutions, and water supply systems.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Pipe fitting & repair</li>
                <li>• Bathroom fixture installation</li>
                <li>• Water tank solutions</li>
              </ul>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-6">
              <div className="bg-amber-100 dark:bg-amber-900 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <FaBrush className="h-6 w-6 text-amber-600 dark:text-amber-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Professional Painting
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Complete interior and exterior painting services using premium
                quality paints. We provide color consultation, surface
                preparation, and flawless application.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Interior/exterior painting</li>
                <li>• Wall texture & finishes</li>
                <li>• Waterproofing solutions</li>
              </ul>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-6">
              <div className="bg-gray-100 dark:bg-gray-900 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Layout className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Marble & Tile Works
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Premium marble and tile installation for floors, walls, and
                countertops. We offer a wide selection of materials and precise
                installation techniques.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Floor tiling</li>
                <li>• Marble flooring</li>
                <li>• Bathroom tiling</li>
              </ul>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-6">
              <div className="bg-red-100 dark:bg-red-900 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <FaKitchenSet className="h-6 w-6 text-red-600 dark:text-red-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Modular Kitchen
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Custom-designed modular kitchens with efficient space
                utilization. We provide end-to-end solutions from design to
                installation.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Kitchen cabinet design</li>
                <li>• Countertop installation</li>
                <li>• Complete kitchen setup</li>
              </ul>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-6">
              <div className="bg-purple-100 dark:bg-purple-900 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                False Ceiling
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Modern false ceiling solutions with various materials including
                POP, gypsum, and PVC. We create designs that enhance your space
                aesthetically and functionally.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• POP ceiling</li>
                <li>• Gypsum board ceiling</li>
                <li>• Decorative ceiling designs</li>
              </ul>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="p-6">
              <div className="bg-green-100 dark:bg-green-900 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <RiSofaFill className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Home Furnishing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Complete home furnishing solutions including curtains,
                upholstery, and furniture. We help transform your space with
                quality materials.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                <li>• Window treatments</li>
                <li>• Furniture upholstery</li>
                <li>• Space optimization</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-16 prose dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Complete Home Solution Services in Bhaktapur
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Maa Kali Hardware, Radhe Radhe is your one-stop solution for all
            home improvement and construction needs in Bhaktapur. As leading{" "}
            <strong>plumbing service providers in Bhaktapur</strong>, we offer
            reliable water supply solutions and drainage systems. Our{" "}
            <strong>professional painting services</strong> transform homes with
            durable and beautiful finishes.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Specializing in <strong>marble and tile installation</strong>, we
            bring elegance to your floors and walls. Our{" "}
            <strong>modular kitchen designs</strong> combine functionality with
            modern aesthetics. For modern interiors, we provide innovative{" "}
            <strong>false ceiling solutions in Bhaktapur</strong> using premium
            materials. Complete your home with our{" "}
            <strong>furnishing services</strong> that add comfort and style.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Contact us today for quality{" "}
            <strong>hardware services near Bhaktapur</strong> and let our
            experienced team bring your home improvement visions to life with
            skilled craftsmanship and genuine materials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
