import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "react-feather";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Maa Kali Hardware - Radhe Radhe
            </h3>
            <p className="text-gray-400">
              Your trusted hardware supplier in Bhaktapur since 1995. Quality
              products, expert advice, and reliable service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/groups/1658842604386500"
                target="_blank"
                className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/nationalhomedecor637/"
                target="_blank"
                className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@MaaXNational"
                target="_blank"
                className="text-gray-400 hover:text-amber-500 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/product"
                  className="text-gray-400 hover:text-amber-500 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-amber-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-amber-500 transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-amber-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Products
            </h4>
            <ul className="space-y-2">
              <li>
                <a className="text-gray-400 hover:text-amber-500 transition-colors">
                  Plumbing Supplies
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-amber-500 transition-colors">
                  Electrical Items
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-amber-500 transition-colors">
                  Paints & Tools
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home Hardware
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-amber-500 transition-colors">
                  Construction Materials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5 mr-3" />
                <span className="text-gray-400">
                  Bhaktapur, Radhe Radhe, Nepal
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-amber-500 mt-0.5 mr-3" />
                <span className="text-gray-400">
                  <a href="tel:+9779851081637" className="hover:text-amber-500">
                    +977- 9851081637
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-amber-500 mt-0.5 mr-3" />
                <span className="text-gray-400">
                  <a
                    href="mailto:binaydhungel@gmail.com"
                    className="hover:text-amber-500">
                    binaydhungel@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-amber-500 mt-0.5 mr-3" />
                <span className="text-gray-400">
                  Sun-Fri: 7AM - 7PM (on Summer)
                  <br />
                  Sun-Fri: 8AM - 5PM (on winter)
                  <br />
                  Sat: 7AM - 3PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Maa Kali Hardware - Radhe Radhe. All
              rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a className="text-gray-500 hover:text-amber-500 text-sm">
                Privacy Policy
              </a>
              <a className="text-gray-500 hover:text-amber-500 text-sm">
                Terms of Service
              </a>
              <a className="text-gray-500 hover:text-amber-500 text-sm">
                Sitemap
              </a>
            </div>
          </div>

          <p className="text-gray-600 text-xs mt-6 text-center hidden md:block">
            Maa Kali Hardware - Hardware - Best hardware shop in Kathmandu
            Valley | Hardware store near me in Bhaktapur | Leading construction
            materials supplier in Nepal | Buy plumbing tools in Kathmandu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
