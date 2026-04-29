import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import { UserCheck, ShieldCheck, PieChart, MessageSquare, ArrowRight } from 'lucide-react';

export default function Counselling() {
  return (
    <main>
      <PageBanner 
        title="Counselling & Documentation" 
        subtitle="Meticulous profile assessment and error-free visa documentation support."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000"
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Counselling', href: '/services/counselling' }
        ]}
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              { title: 'Profile Analysis', icon: UserCheck, desc: 'We deep-dive into your academic and financial background to map the best route.' },
              { title: 'Document Audit', icon: ShieldCheck, desc: 'Every certificate and statement is verified against Japanese immigration standards.' },
              { title: 'Financial Planning', icon: PieChart, desc: 'Assistance in preparing income proofs and bank balances that meet requirements.' },
              { title: 'Mock Interviews', icon: MessageSquare, desc: 'Confidence-building sessions for your interactions with the COE and Embassy.' }
            ].map((item, i) => (
              <div key={i} className="bg-light p-12 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all group flex flex-col items-start">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors shadow-sm">
                    <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                 </div>
                 <h3 className="text-sm font-black text-primary mb-4 tracking-[0.2em] uppercase">{item.title}</h3>
                 <p className="text-gray-500 font-medium leading-relaxed mb-6 text-lg">{item.desc}</p>
                 <div className="w-10 h-1 bg-secondary rounded-full" />
              </div>
            ))}
          </div>

          <div className="bg-primary p-12 md:p-20 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[100px] -mr-48 -mt-48" />
             <div className="md:w-2/3 relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">Our 99% Success Rate <br /> is built on <span className="text-secondary">Precision.</span></h2>
                <p className="text-white/70 text-lg font-medium leading-relaxed">
                  A single error can lead to a visa rejection. Our "Smart" documentation system ensures that your dreams aren't delayed by paperwork.
                </p>
             </div>
              <div className="md:w-1/3 w-full">
                <Link href="/contact" className="btn-primary w-full !py-6 !text-lg group shadow-xl text-center inline-block">
                  Book a Free Session <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}
