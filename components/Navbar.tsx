"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      subItems: [
        { name: "About Us", href: "/about" },
        { name: "Chairman Message", href: "/chairman-message" },
        { name: "Managing Director Message", href: "/md-message" },
        { name: "Japan States", href: "/japan-states" },
      ],
    },
    {
      name: "Services",
      href: "/services",
      subItems: [
        { name: "Test Preparation", href: "/services/test-prep" },
        { name: "Counselling", href: "/services/counselling" },
        { name: "Visa Processing", href: "/services/visa" },
        { name: "Placement", href: "/services/placement" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const isHome = pathname === "/";

  const toggleMobileSub = (name: string) => {
    setOpenMobileSub(openMobileSub === name ? null : name);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setHoveredMenu(null);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm ${isScrolled ? "py-3" : "py-5"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-auto h-10 sm:h-12">
            <Image
              src="/logo.png"
              alt="Smart City Logo"
              width={200}
              height={80}
              className="object-contain w-auto h-full"
              priority
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map(link => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setHoveredMenu(link.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-bold transition-all flex items-center gap-1.5 hover:text-secondary py-4 text-primary"
              >
                {link.name}
                {link.subItems && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${hoveredMenu === link.name ? "rotate-180 text-secondary" : ""}`}
                  />
                )}
              </Link>
              {link.subItems && (
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-2xl transition-all duration-300 transform overflow-hidden border border-gray-100 p-2 ${hoveredMenu === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
                >
                  {link.subItems.map(sub => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={handleLinkClick}
                      className="flex items-center justify-between px-6 py-3.5 text-sm font-bold text-gray-700 hover:bg-light hover:text-secondary rounded-xl transition-all group/item"
                    >
                      {sub.name}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-block btn-primary px-8 py-3 !text-sm"
          >
            Apply Now
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-xl transition-colors bg-primary/5 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 flex flex-col gap-2 animate-fade-in border-t border-gray-100 max-h-[85vh] overflow-y-auto">
          {navLinks.map(link => (
            <div
              key={link.name}
              className="border-b border-gray-50 pb-2 last:border-0"
            >
              {link.subItems ? (
                <button
                  onClick={() => toggleMobileSub(link.name)}
                  className="w-full flex items-center justify-between text-xl font-black text-primary py-2"
                >
                  {link.name}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${openMobileSub === link.name ? "rotate-180 text-secondary" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-xl font-black text-primary block "
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}

              {link.subItems && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${openMobileSub === link.name ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="pl-4 flex flex-col gap-4 border-l-2 border-secondary/20 ">
                    {link.subItems.map(sub => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="text-base font-bold text-gray-500 hover:text-secondary flex items-center justify-between"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="btn-primary w-full text-center mt-4 !py-5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
