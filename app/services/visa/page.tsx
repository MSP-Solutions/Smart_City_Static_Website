import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import { Plane, Briefcase, FileCheck, Landmark } from 'lucide-react';

export default function VisaProcessing() {
  return (
    <main>
      <PageBanner 
        title="Visa Processing" 
        subtitle="Specialized support for Student, Work, and Specified Skilled Worker (SSW) visas."
        image="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=2000"
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Visa Processing', href: '/services/visa' }
        ]}
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <div className="bg-primary p-12 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 blur-[80px] -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
              <Plane className="w-12 h-12 text-secondary mb-8 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              <h3 className="text-[10px] font-black mb-6 tracking-[0.2em] text-secondary uppercase">Student Visa</h3>
              <p className="text-white/70 text-lg font-medium mb-10 leading-relaxed">
                For those wishing to study in Japanese Language Schools, Vocational Colleges, or Universities. Full COE application support.
              </p>
              <ul className="space-y-4">
                {['COE Application Support', 'School Admission Assistance', 'Embassy Interview Coaching'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold opacity-90">
                    <FileCheck className="w-4 h-4 text-secondary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-secondary p-12 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-[80px] -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
              <Briefcase className="w-12 h-12 text-primary mb-8 transition-transform group-hover:scale-110" />
              <h3 className="text-[10px] font-black mb-6 tracking-[0.2em] text-primary uppercase">SSW / Work Visa</h3>
              <p className="text-white/70 text-lg font-medium mb-10 leading-relaxed">
                For skilled professionals and workers in sectors like Nursing, Food, and Construction. Direct employer matching.
              </p>
              <ul className="space-y-4">
                {['Skill Test Guidance', 'Matching with Japanese Employers', 'Contract Verification'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-bold opacity-90">
                    <Landmark className="w-4 h-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center p-12 bg-light rounded-[3rem] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <p className="text-gray-500 font-bold mb-0 text-lg text-left max-w-xl">
             We stay updated with the latest regulations from the <span className="text-primary uppercase tracking-widest text-xs ml-2">Japanese Ministry of Justice</span> and the <span className="text-primary uppercase tracking-widest text-xs ml-2">Embassy of Japan</span>.
           </p>
           <Link href="/contact" className="btn-primary !px-10 whitespace-nowrap">Start Your Process</Link>
        </div>
        </div>
      </section>
    </main>
  );
}
