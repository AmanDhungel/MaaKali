"use client";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "react-feather";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={`bg-ink text-white pt-20 pb-9 px-[6vw] ${
        pathname?.startsWith("/admin") ? "hidden" : ""
      }`}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-[34px] h-[34px] bg-mint flex items-center justify-center text-ink font-black text-lg [clip-path:polygon(0_0,100%_0,100%_72%,72%_100%,0_100%)]">
                M
              </span>
              <span className="font-extrabold text-[17px]">MAA KALI HARDWARE</span>
            </div>
            <p className="text-white/60 text-[14.5px] leading-relaxed max-w-[330px]">
              Your trusted hardware &amp; home-solutions partner in Nepal since
              1998. Quality products, expert advice, reliable service.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://www.facebook.com/groups/1658842604386500"
                target="_blank"
                className="border border-white/20 hover:border-mint hover:text-mint p-2.5 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/nationalhomedecor637/"
                target="_blank"
                className="border border-white/20 hover:border-mint hover:text-mint p-2.5 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/@MaaXNational"
                target="_blank"
                className="border border-white/20 hover:border-mint hover:text-mint p-2.5 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-accent text-[11px] tracking-[.16em] text-white/50 mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 text-[14.5px]">
              <li>
                <a href="/" className="text-white/78 hover:text-mint transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/product" className="text-white/78 hover:text-mint transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/78 hover:text-mint transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white/78 hover:text-mint transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#about" className="text-white/78 hover:text-mint transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-white/78 hover:text-mint transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-accent text-[11px] tracking-[.16em] text-white/50 mb-4">
              PRODUCTS
            </h4>
            <ul className="space-y-3 text-[14.5px] text-white/78">
              <li>Plumbing Supplies</li>
              <li>Electrical Items</li>
              <li>Paints &amp; Tools</li>
              <li>Tiles &amp; Marble</li>
              <li>Construction Materials</li>
            </ul>
          </div>

          <div>
            <h4 className="font-accent text-[11px] tracking-[.16em] text-white/50 mb-4">
              CONTACT
            </h4>
            <ul className="space-y-3 text-[14.5px]">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-mint mt-0.5 shrink-0" />
                <span className="text-white/78">Bhaktapur, Radhe Radhe, Nepal</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-mint mt-0.5 shrink-0" />
                <a href="tel:+9779851081637" className="text-white/78 hover:text-mint">
                  +977- 9851081637
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-mint mt-0.5 shrink-0" />
                <a
                  href="mailto:binaydhungel@gmail.com"
                  className="text-white/78 hover:text-mint"
                >
                  binaydhungel@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-mint mt-0.5 shrink-0" />
                <span className="text-white/78">
                  Sun–Fri: 7AM–7PM (Summer)
                  <br />
                  Sun–Fri: 8AM–5PM (Winter)
                  <br />
                  Sat: 7AM–3PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-6 text-[13px] text-white/50">
          <p>
            © {new Date().getFullYear()} Maa Kali Hardware - Radhe Radhe. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sitemap</span>
          </div>
        </div>

        <p className="text-white/35 text-xs mt-6 text-center hidden md:block">
          Maa Kali Hardware - Best hardware shop in Kathmandu Valley | Hardware
          store near me in Bhaktapur | Leading construction materials supplier
          in Nepal | Buy plumbing tools in Kathmandu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
