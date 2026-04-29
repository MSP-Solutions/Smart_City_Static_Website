import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import { School, GraduationCap, Building2, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Placement() {
  return (
    <main>
      <PageBanner 
        title="School Placement" 
        subtitle="Direct admission to reputed Japanese language schools, vocational colleges, and universities."
        image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000"
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Placement', href: '/services/placement' }
        ]}
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-light p-12 md:p-20 rounded-[3rem] border border-gray-100 shadow-2xl relative overflow-hidden mb-20">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-primary" />
            
            <h3 className="text-3xl font-black text-primary mb-12 tracking-tight">Our Placement Network</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {[
                { name: 'Language Schools', icon: School },
                { name: 'Vocational Colleges', icon: Building2 },
                { name: 'Junior Colleges', icon: GraduationCap },
                { name: 'Universities', icon: Globe2 },
                { name: 'Graduate Schools', icon: GraduationCap }
              ].map((type, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-transparent hover:border-secondary/20 transition-all group shadow-sm">
                  <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                     <type.icon className="w-6 h-6 text-secondary group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-black text-primary tracking-tight">{type.name}</h4>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-black text-primary mb-8 tracking-tight">How We Assist You</h3>
                <div className="space-y-6">
                  {[
                    'Evaluating your academic goals and interests.',
                    'Selecting the best city and institution for your profile.',
                    'Assistance in scholarship applications.',
                    'Direct communication with school administrators.',
                    'Support with enrollment documentation.'
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex-shrink-0 flex items-center justify-center">
                         <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <p className="font-bold text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-secondary rounded-[2.5rem] rotate-3 opacity-10" />
                <div className="bg-primary p-12 rounded-[2.5rem] text-white relative z-10 shadow-2xl">
                   <h4 className="text-2xl font-black mb-6 leading-tight">Ready to find your <br /><span className="text-secondary">Perfect School?</span></h4>
                   <p className="text-white/60 mb-8 font-medium">Let our experts guide you to the institution that matches your career dreams.</p>
                   <Link href="/contact" className="btn-primary w-full !bg-white !text-primary hover:!bg-secondary hover:!text-white group shadow-xl text-center inline-block">
                      Apply Now <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
