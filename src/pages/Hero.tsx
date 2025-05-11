import { Droplet, Tool, Home, ShoppingCart, Archive } from "react-feather";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-amber-600 dark:text-amber-400">
                Maa Kali Hardware
              </span>
              &nbsp; Radhe Radhe
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              Your Trusted Hardware Shop in Bhaktapur
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Quality pipes, fittings, paints, tools, and all household hardware
              needs since 1995. Serving the Bhaktapur community with genuine
              products and expert advice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/product">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <ShoppingCart size={20} />
                  Shop Now
                </button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-xl shadow-md flex flex-col items-center transition-transform hover:scale-105">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 md:p-4 rounded-full mb-3">
                <Droplet className="h-6 w-6 md:h-8 md:w-8 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">
                Plumbing
              </h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center">
                Pipes, Fittings, Taps
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-xl shadow-md flex flex-col items-center transition-transform hover:scale-105">
              <div className="bg-amber-100 dark:bg-amber-900 p-3 md:p-4 rounded-full mb-3">
                <Archive className="h-6 w-6 md:h-8 md:w-8 text-amber-600 dark:text-amber-300" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">
                Paints
              </h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center">
                Colors, Brushes, Tools
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-xl shadow-md flex flex-col items-center transition-transform hover:scale-105">
              <div className="bg-red-100 dark:bg-red-900 p-3 md:p-4 rounded-full mb-3">
                <Tool className="h-6 w-6 md:h-8 md:w-8 text-red-600 dark:text-red-300" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">
                Tools
              </h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center">
                Hand & Power Tools
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 md:p-6 rounded-xl shadow-md flex flex-col items-center transition-transform hover:scale-105">
              <div className="bg-green-100 dark:bg-green-900 p-3 md:p-4 rounded-full mb-3">
                <Home className="h-6 w-6 md:h-8 md:w-8 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">
                Home Essentials
              </h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center">
                Pans, Basins, Commod
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 dark:text-gray-300 italic">
            "हाम्रा उपकरण, तपाईंको मजबुत घर!"
            <br />
            ("We are Bhaktapur's trusted hardware store")
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
