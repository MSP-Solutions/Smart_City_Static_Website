"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Plane,
  Briefcase,
  FileText,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

const slides = [
  {
    title: "Japan",
    subtitle:
      "Travel & Tourism, Engineering, Business, Health, Science, IT and many more...",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2000",
    cta: "Learn More",
    href: "/services",
  },
  {
    title: "Your Gateway to Japan here",
    subtitle:
      "Our Students at TIA, Kathmandu for flight to Japan. Join the successful journey.",
    image:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80&w=2000",
    cta: "Apply Now",
    href: "/contact",
  },
];

const states = [
  {
    name: "Tokyo",
    region: "Kanto",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Osaka",
    region: "Kansai",
    image:
      "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Kyoto",
    region: "Kansai",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Hokkaido",
    region: "Hokkaido",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Fukuoka",
    region: "Kyushu",
    image:
      "https://res.klook.com/image/upload/fl_lossy.progressive,w_1200,h_630,c_fill,q_85/v1755071695/destination/eiy4ykjk6dkpzpxnf5j3.jpg",
  },
  {
    name: "Okinawa",
    region: "Okinawa",
    image:
      "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&q=80&w=800",
  },
];

const services = [
  {
    title: "Japanese Language Class",
    icon: BookOpen,
    desc: "Comprehensive JLPT, NAT, and TOP-J preparation from N5 to N1.",
  },
  {
    title: "Student Visa Processing",
    icon: Plane,
    desc: "Expert guidance for university and language school placements.",
  },
  {
    title: "SSW (Work) Program",
    icon: Briefcase,
    desc: "Direct placement for Specified Skilled Workers in various sectors.",
  },
  {
    title: "Documentation Support",
    icon: FileText,
    desc: "Meticulous handling of all your documents for zero-failure results.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="relative">
      {/* Hero Carousel - Cloned vibe from Sekai Education */}
      <section className="relative h-screen flex items-center overflow-hidden bg-primary">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/50 to-transparent z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className={`object-cover transition-transform duration-[5000ms] ${index === currentSlide ? "scale-110" : "scale-100"}`}
              priority={index === 0}
            />

            <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
              <div className="max-w-3xl animate-fade-in">
                <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
                  Smart City Int'l Education
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                  {slide.title}
                </h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl font-medium">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={slide.href}
                    className="btn-primary group flex items-center gap-3 !px-10 !py-4"
                  >
                    {slide.cta}{" "}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="absolute md:bottom-20 bottom-10 right-10 z-30 flex gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-secondary transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-secondary transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-10 z-30 flex gap-3">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${i === currentSlide ? "w-12 bg-secondary" : "w-4 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </section>

      {/* Floating Quick Info - Over the banner bottom */}
      <div className="relative z-30 -mt-16 container mx-auto px-6 hidden md:block">
        <div className="grid md:grid-cols-3 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-8 flex items-center gap-6 border-r border-gray-50 hover:bg-light transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
              <Clock className="w-6 h-6 text-secondary group-hover:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">
                Class Hours
              </p>
              <p className="text-sm font-bold text-primary">
                6:00 AM - 6:00 PM
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center gap-6 border-r border-gray-50 hover:bg-light transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors">
              <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">
                Our Location
              </p>
              <p className="text-sm font-bold text-primary">
                Sorhakhutte, Kathmandu
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center gap-6 hover:bg-light transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-green-500 group-hover:text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">
                Visa Success
              </p>
              <p className="text-sm font-bold text-primary">99% Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-4xl font-black text-primary mb-6 leading-tight tracking-tighter flex items-center justify-start gap-2">
                Our <br />{" "}
                <span className="text-secondary">Services.</span>
              </h3>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                We provide end-to-end support for your Japanese journey,
                ensuring every step is "Smart" and successful.
              </p>
            </div>
            <Link href="/services" className="btn-outline">
              All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="card-hover bg-light p-8 md:p-10 flex flex-col items-start group border border-transparent hover:border-secondary/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-primary/5 flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-secondary group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-black mb-4 text-primary leading-tight">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6">
                  {service.desc}
                </p>
                <Link
                  href="/services"
                  className="text-secondary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group/link"
                >
                  Details{" "}
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Japan States Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] -mr-64 -mt-64 rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
                Destinations
              </span>
              <h3 className="text-2xl md:text-4xl font-black mb-6 tracking-tighter leading-tight">
                Explore Major <br />{" "}
                <span className="text-secondary">Japanese States.</span>
              </h3>
              <p className="text-white/50 text-lg font-medium leading-relaxed">
                We have strong partnerships across all major Japanese
                prefectures. Choose your preferred destination for study or
                work.
              </p>
            </div>
            <Link href="/japan-states" className="btn-primary">
              View All Prefectures
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {states.map((state, i) => (
              <div
                key={i}
                className="relative group rounded-[2.5rem] overflow-hidden h-[500px] shadow-2xl"
              >
                <Image
                  src={state.image}
                  alt={state.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-100" />
                <div className="absolute bottom-0 left-0 p-12 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="bg-secondary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase mb-4 inline-block tracking-[0.2em]">
                    {state.region} Region
                  </span>
                  <h4 className="text-3xl font-black mb-4 tracking-tighter">
                    {state.name}
                  </h4>
                  <div className="w-12 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-32 bg-light overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="About Us"
                  width={600}
                  height={400}
                  className="object-cover h-[500px]"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-3xl -z-0 hidden md:block opacity-20" />
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-4xl font-black text-primary mb-8 leading-tight tracking-tighter">
                Your Gateway to <br />{" "}
                <span className="text-secondary underline decoration-8 decoration-secondary/20 underline-offset-8">
                  Japanese Excellence.
                </span>
              </h3>
              <p className="text-gray-500 mb-10 text-xl font-medium leading-relaxed">
                Smart City International Education is a reputed educational
                institution based in Kathmandu, Nepal. Our excellence in
                Japanese language training has best influenced student exchange
                programs.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-12">
                {[
                  "Professional Native-level Teachers",
                  "Personalized Career Counseling",
                  "Seamless Documentation Support",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-primary font-black uppercase text-xs tracking-widest"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary !px-12">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
