"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X } from "react-feather";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [navLinks, setNavLinks] = useState([
    {
      name: "",
      path: "",
    },
  ]);

  useEffect(() => {
    if (pathname?.startsWith("/admin")) {
      setNavLinks([
        { name: "Product", path: "/admin/product" },

        {
          name: "Blog",
          path: "/admin/blog",
        },
        { name: "Message", path: "/admin/messages" },
      ]);
    } else {
      setNavLinks([
        { name: "Home", path: "/" },
        { name: "Product", path: "/product" },
        { name: "Blog", path: "/blog" },
        {
          name: "About",
          path: pathname?.startsWith("/admin")
            ? ""
            : pathname === "/"
            ? "#about"
            : "/#about",
        },
        {
          name: "Services",
          path: pathname === "/" ? "#services" : "/#services",
        },
        { name: "Contact", path: pathname === "/" ? "#contact" : "/#contact" },
      ]);
    }
  }, [pathname]);

  return (
    <nav className={`bg-white dark:bg-gray-900 shadow-md `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="group w-[70px] h-[70px] perspective">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden flex items-center justify-center">
                  <Image
                    src="/dh.png"
                    alt="Logo"
                    width={70}
                    height={70}
                    className="h-12 w-12 object-center"
                  />
                </div>

                <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-white dark:bg-gray-800 rounded">
                  <span className="text-sm font-bold text-gray-900 dark:text-white text-center">
                    National Home Decor
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
