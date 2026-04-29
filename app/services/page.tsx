import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import { BookOpen, FileText, Plane, School, ArrowRight } from 'lucide-react';

const services = [
  { 
    title: 'Test Preparation', 
    icon: BookOpen, 
    desc: 'Excel in JLPT, NAT-TEST, and TOP-J with our expert-led classes from N5 to N1 levels.',
    href: '/services/test-prep'
  },
  { 
    title: 'Counselling & Documentation', 
    icon: FileText, 
    desc: 'Meticulous documentation support for error-free visa applications and profile assessment.',
    href: '/services/counselling'
  },
  { 
    title: 'Japan Visa Processing', 
    icon: Plane, 
    desc: 'Comprehensive guidance for Student, Work, and SSW visas with a 99% success rate.',
    href: '/services/visa'
  },
  { 
    title: 'Placement in Schools & Colleges', 
    icon: School, 
    desc: 'Direct placement in reputed Japanese language schools, vocational colleges and universities.',
    href: '/services/placement'
  },
];

export default function Services() {
  return (
    <main>
      <PageBanner 
        title="Our Services" 
        subtitle="End-to-end support for your journey to Japan, from language training to successful placement."
        image="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&q=80&w=2000"
        breadcrumb={[{ name: 'Services', href: '/services' }]}
      />
      
      <section className="py-24 bg-light/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <Link key={i} href={service.href} className="card-hover bg-white p-12 flex flex-col sm:flex-row gap-10 items-start group border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="w-24 h-24 shrink-0 bg-light rounded-[2rem] flex items-center justify-center transition-all duration-500 group-hover:bg-secondary group-hover:rotate-6 shadow-xl shadow-primary/5">
                  <service.icon className="w-10 h-10 text-secondary group-hover:text-white transition-colors" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-primary mb-6 group-hover:text-secondary transition-colors tracking-tight uppercase tracking-widest text-sm">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-4 text-secondary font-black text-[10px] uppercase tracking-widest group/link">
                    Detailed Service <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
