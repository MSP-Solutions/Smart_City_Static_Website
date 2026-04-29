import React from 'react';
import PageBanner from '@/components/PageBanner';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main>
      <PageBanner 
        title="Contact Us" 
        subtitle="Get in touch with our experts to start your Japanese journey today."
        image="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=80&w=2000"
        breadcrumb={[{ name: 'Contact', href: '/contact' }]}
      />
      
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6">
          {/* Top: Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16">
            {[
              { title: 'Our Location', icon: MapPin, val: 'Sorhakhutte Chowk, Kathmandu, Nepal', color: 'bg-primary' },
              { title: 'Call Us', icon: Phone, val: '+977-9851040518', sub: '+977-14983643', color: 'bg-secondary' },
              { title: 'Email Us', icon: Mail, val: 'info@smartcitynepal.com', color: 'bg-primary' }
            ].map((card, i) => (
              <div key={i} className={`${card.color} p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl relative overflow-hidden group text-white font-black uppercase text-[10px] tracking-widest`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 -mr-12 -mt-12 rounded-full group-hover:scale-110 transition-transform" />
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <card.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <h3 className="mb-1.5 opacity-60 text-[9px] tracking-[0.2em]">{card.title}</h3>
                <p className="text-md md:text-lg mb-0.5 lowercase tracking-normal">{card.val}</p>
                {card.sub && <p className="text-md md:text-lg opacity-80 tracking-normal">{card.sub}</p>}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
            {/* Left Side: Map Iframe */}
            <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden min-h-[400px] h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9734914144415!2d85.30560731506164!3d27.71804798278786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fc20658f8b%3A0x6335a96860f38c35!2sSorhakhutte%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp" 
                className="w-full h-full rounded-[2rem] border-0 min-h-[400px]"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-10 tracking-tight">Send Us a Message</h3>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Full Name</label>
                  <input type="text" placeholder="Mahendra Thapa" className="w-full bg-light border border-transparent px-6 py-4 rounded-2xl outline-none focus:border-secondary focus:bg-white transition-all shadow-sm font-bold text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Email Address</label>
                  <input type="email" placeholder="thapa@gmail.com" className="w-full bg-light border border-transparent px-6 py-4 rounded-2xl outline-none focus:border-secondary focus:bg-white transition-all shadow-sm font-bold text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Phone Number</label>
                  <input type="text" placeholder="9851XXXXXX" className="w-full bg-light border border-transparent px-6 py-4 rounded-2xl outline-none focus:border-secondary focus:bg-white transition-all shadow-sm font-bold text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Interested In</label>
                  <select className="w-full bg-light border border-transparent px-6 py-4 rounded-2xl outline-none focus:border-secondary focus:bg-white transition-all shadow-sm font-bold appearance-none text-sm cursor-pointer">
                    <option>Student Visa</option>
                    <option>SSW Program</option>
                    <option>Work Visa</option>
                    <option>Language Classes</option>
                  </select>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-[10px] font-black text-primary uppercase tracking-[0.2em] ml-2">Your Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full bg-light border border-transparent px-6 py-4 rounded-2xl outline-none focus:border-secondary focus:bg-white transition-all shadow-sm font-bold text-sm"></textarea>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button type="submit" className="btn-primary w-full md:w-auto !px-12 !py-4 text-sm group flex items-center justify-center gap-3">
                    Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
