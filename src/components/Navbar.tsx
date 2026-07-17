"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "react-feather";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import Cookies from "js-cookie";
import MarqueeBar from "./MarqueeBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [navLinks, setNavLinks] = useState([
    {
      name: "",
      path: "",
    },
  ]);

  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    if (isAdmin) {
      setNavLinks([
        { name: "Product", path: "/admin/product" },
        { name: "Blog", path: "/admin/blog" },
        { name: "Message", path: "/admin/messages" },
      ]);
    } else {
      setNavLinks([
        { name: "Home", path: "/" },
        { name: "Products", path: "/product" },
        { name: "Services", path: "/services" },
        { name: "About", path: pathname === "/" ? "#about" : "/#about" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: pathname === "/" ? "#contact" : "/#contact" },
      ]);
    }
  }, [pathname, isAdmin]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    router.refresh();
  };

  return (
    <div className="sticky top-0 z-[60]">
      <MarqueeBar />
      <nav className="bg-ink/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1320px] mx-auto px-[6vw] h-[74px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="w-[34px] h-[34px] bg-mint flex items-center justify-center text-ink font-black text-lg [clip-path:polygon(0_0,100%_0,100%_72%,72%_100%,0_100%)]">
              M
            </span>
            <span className="flex flex-col leading-[1.04]">
              <span className="text-white font-extrabold text-[17px] tracking-[.01em]">
                MAA KALI
              </span>
              <span className="text-white/50 font-accent text-[9.5px] tracking-[.22em]">
                HARDWARE · HOME
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="cursor-pointer font-semibold text-[14.5px] text-white/78 hover:text-mint transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {isAdmin ? (
              <Button onClick={handleLogout} variant="outline" className="rounded-none text-red-400 border-white/20">
                Logout
              </Button>
            ) : (
              <>
                <Link
                  href="/#contact"
                  className="cursor-pointer bg-forest hover:bg-mint hover:text-ink text-white font-bold text-sm px-5 py-[11px] transition-colors"
                >
                  Get a Quote →
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-mint hover:text-ink text-white transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                </Link>
              </>
            )}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center border border-white/20 text-white p-2"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[calc(74px+34px)] bottom-0 z-[55] bg-ink/98 backdrop-blur-md px-[8vw] py-8 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl font-extrabold py-3.5 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}
          {isAdmin ? (
            <button
              onClick={handleLogout}
              className="text-left text-red-400 text-2xl font-extrabold py-3.5"
            >
              Logout
            </button>
          ) : (
            <a
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="text-mint text-2xl font-extrabold py-3.5"
            >
              Cart →
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
