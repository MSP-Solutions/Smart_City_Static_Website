"use client";

import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const mapLocations = {
  butwal: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4944788007406!2d83.46173398885497!3d27.702015100000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996873276c92d51%3A0xd3c6675133d70696!2sTraffic%20chowk!5e0!3m2!1sen!2snp!4v1777460834179!5m2!1sen!2snp",
  kathmandu: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28247.804647724945!2d85.29753473650669!3d27.748899174129125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb192b9cada64d%3A0xdf67e83763747500!2sGongabu%2C%2044600!5e0!3m2!1sen!2snp!4v1777525393465!5m2!1sen!2snp",
  pharsatikar: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56558.13948714093!2d83.35073837473384!3d27.628117814109817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968f00487f2509%3A0x3cce9564bd81711!2sPharsatikar%20Chowk!5e0!3m2!1sen!2snp!4v1777525246810!5m2!1sen!2snp"
};

export default function Contact() {
  const [activeLocation, setActiveLocation] = useState<keyof typeof mapLocations>("butwal");

  return (
    <main>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our experts to start your Japanese journey today."
        image="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=80&w=2000"
        breadcrumb={[{ name: "Contact", href: "/contact" }]}
      />

      <section className="py-24 bg-light">
        <div className="container mx-auto px-6">
          {/* Top: Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                title: "Our Locations",
                icon: MapPin,
                val: (
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="font-black text-white/50 text-[10px] mb-1">Head Office (Butwal)</p>
                      <p>Traffic Chowk, Butwal, Rupandehi</p>
                    </div>
                    <div>
                      <p className="font-black text-white/50 text-[10px] mb-1">Kathmandu Office</p>
                      <p>Gongabu, Kathmandu</p>
                    </div>
                    <div>
                      <p className="font-black text-white/50 text-[10px] mb-1">Pharsatikar Office</p>
                      <p>Suddhodan 4, Pharsatikar Chowk</p>
                    </div>
                  </div>
                ),
                color: "bg-primary",
              },
              {
                title: "Call Us",
                icon: Phone,
                val: (
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="font-black text-white/50 text-[10px] mb-1">Butwal</p>
                      <a href="tel:071532473">071-532473</a>, <a href="tel:9857086452">9857086452</a>
                    </div>
                    <div>
                      <p className="font-black text-white/50 text-[10px] mb-1">Kathmandu</p>
                      <a href="tel:014973400">01-4973400</a>, <a href="tel:9851427377">9851427377</a>
                    </div>
                    <div>
                      <p className="font-black text-white/50 text-[10px] mb-1">Pharsatikar</p>
                      <a href="tel:9766810432">9766810432</a>
                    </div>
                  </div>
                ),
                color: "bg-secondary",
              },
              {
                title: "Email Us",
                icon: Mail,
                val: (
                  <div className="flex flex-col gap-2">
                    <a href="mailto:study@smartcityinternational.edu.np" className="lowercase">study@smartcityinternational.edu.np</a>
                  </div>
                ),
                color: "bg-primary",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`${card.color} p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl relative overflow-hidden group text-white font-black uppercase text-[10px] tracking-widest`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 -mr-12 -mt-12 rounded-full group-hover:scale-110 transition-transform" />
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <card.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <h3 className="mb-3 opacity-60 text-[9px] tracking-[0.2em]">
                  {card.title}
                </h3>
                <div className="text-[11px] md:text-sm mb-0.5 lowercase tracking-normal font-normal leading-relaxed">
                  {card.val}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
            {/* Left Side: Map Iframe */}
            <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden min-h-[500px] flex flex-col">
              <div className="flex flex-wrap gap-2 p-2 justify-center">
                {(Object.keys(mapLocations) as Array<keyof typeof mapLocations>).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setActiveLocation(loc)}
                    className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeLocation === loc
                        ? "bg-secondary text-white shadow-lg"
                        : "bg-light text-primary hover:bg-gray-200"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
              <div className="flex-1 rounded-[2rem] overflow-hidden mb-4">
                <iframe
                  src={mapLocations[activeLocation]}
                  className="w-full h-full border-0 min-h-[400px]"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-10 tracking-tight">
                Send Us a Message
              </h3>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Mahendra Thapa"
                    className="w-full bg-light border border-transparent px-6 py-4 rounded-2xl outline-none focus:border-secondary focus:bg-white transition-all shadow-sm font-bold text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="thapa@gmail.com"
                    className="w-full bg-light border border-transparent px-6 py-4 rounded-2xl outline-none focus:border-secondary focus:bg-white transition-all shadow-sm font-bold text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="9851XXXXXX"
                    className="w-full bg-light border border-transparent px-6 py-4 rounded-2xl outline-none focus:border-secondary focus:bg-white transition-all shadow-sm font-bold text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">
                    Interested In
                  </label>
                  <select className="w-full bg-light border border-transparent px-6 py-4 rounded-2xl outline-none focus:border-secondary focus:bg-white transition-all shadow-sm font-bold appearance-none text-sm cursor-pointer">
                    <option>Student Visa</option>
                    <option>SSW Program</option>
                    <option>Work Visa</option>
                    <option>Language Classes</option>
                  </select>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-light border border-transparent px-6 py-4 rounded-2xl outline-none focus:border-secondary focus:bg-white transition-all shadow-sm font-bold text-sm"
                  ></textarea>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto !px-12 !py-4 text-sm group flex items-center justify-center gap-3"
                  >
                    Send Message{" "}
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
