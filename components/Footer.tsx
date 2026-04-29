import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-dark text-white pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="relative w-auto h-14 md:h-16 bg-white rounded-xl p-2 shadow-lg shadow-white/5">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={150}
                  height={60}
                  className="object-contain w-auto h-full"
                />
              </div>
            </div>
            <p className="text-white/50 text-sm mb-8 leading-relaxed max-w-xs">
              Empowering Nepalese students to achieve their dreams in Japan
              through quality education and professional guidance.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Instagram, href: "#" },
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 group border border-white/5"
                >
                  <Icon className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-black mb-8 text-white uppercase tracking-widest text-xs">
              Quick Links
            </h5>
            <ul className="space-y-4 text-white/50 text-sm font-bold">
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary flex items-center gap-2 group transition-colors"
                >
                  <ArrowRight className="w-3 h-3 text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary flex items-center gap-2 group transition-colors"
                >
                  <ArrowRight className="w-3 h-3 text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />{" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/japan-states"
                  className="hover:text-secondary flex items-center gap-2 group transition-colors"
                >
                  <ArrowRight className="w-3 h-3 text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />{" "}
                  Japan States
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary flex items-center gap-2 group transition-colors"
                >
                  <ArrowRight className="w-3 h-3 text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />{" "}
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-black mb-8 text-white uppercase tracking-widest text-xs">
              Our Services
            </h5>
            <ul className="space-y-4 text-white/50 text-sm font-bold">
              <li>
                <Link
                  href="/services/test-prep"
                  className="hover:text-secondary flex items-center gap-2 group transition-colors"
                >
                  <ArrowRight className="w-3 h-3 text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />{" "}
                  Test Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/visa"
                  className="hover:text-secondary flex items-center gap-2 group transition-colors"
                >
                  <ArrowRight className="w-3 h-3 text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />{" "}
                  Visa Processing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/counselling"
                  className="hover:text-secondary flex items-center gap-2 group transition-colors"
                >
                  <ArrowRight className="w-3 h-3 text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />{" "}
                  Counselling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/placement"
                  className="hover:text-secondary flex items-center gap-2 group transition-colors"
                >
                  <ArrowRight className="w-3 h-3 text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />{" "}
                  Placement
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-black mb-8 text-white uppercase tracking-widest text-xs">
              Contact Info
            </h5>
            <ul className="space-y-6 text-white/50 text-sm font-bold">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors border border-white/5">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div className="pt-1">
                  <p className="text-white text-[10px] font-black uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-[11px] leading-tight">Butwal Sub-Metropolitan City-6, Rupandehi, Lumbini Province, Nepal</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors border border-white/5">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div className="pt-1">
                  <p className="text-white text-[10px] font-black uppercase tracking-widest mb-1">
                    Call Us
                  </p>
                  <p className="text-[11px] leading-tight">
                    071-532473
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors border border-white/5">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div className="pt-1">
                  <p className="text-white text-[10px] font-black uppercase tracking-widest mb-1">
                    Email Us
                  </p>
                  <p className="text-[11px] leading-tight lowercase">study@smartcityinternational.edu.np</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-white/20 text-[10px] uppercase tracking-widest font-black">
            © {year} Smart City International Education. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/20 text-[10px] uppercase tracking-widest font-black">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
