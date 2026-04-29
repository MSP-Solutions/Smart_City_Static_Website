import React from 'react';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import { CheckCircle2, Star, Award, Users, Laptop } from 'lucide-react';

export default function TestPrep() {
  return (
    <main>
      <PageBanner 
        title="Test Preparation" 
        subtitle="Specialized training for JLPT, NAT-TEST, and TOP-J with expert native faculty."
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Test Prep', href: '/services/test-prep' }
        ]}
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-light p-12 md:p-20 rounded-[3rem] border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            <div className="grid md:grid-cols-3 gap-10 mb-20">
              {['JLPT', 'NAT-TEST', 'TOP-J'].map((test, i) => (
                <div key={test} className="bg-white p-10 rounded-[2rem] text-center border border-transparent hover:border-secondary/20 transition-all group shadow-sm">
                  <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-colors">
                     <Award className="w-6 h-6 text-secondary group-hover:text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-primary mb-3 tracking-tight">{test}</h3>
                  <p className="text-[10px] font-black text-secondary uppercase tracking-widest">N5 to N1 Levels</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-black text-primary mb-8 tracking-tight">Why Choose Our Classes?</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Expert Native Faculty', icon: Users, desc: 'Learn from teachers who have lived and worked in Japan for decades.' },
                    { title: 'Interactive Learning', icon: Laptop, desc: 'Modern audio-visual tools and real-world conversation practice.' },
                    { title: 'Regular Mock Tests', icon: CheckCircle2, desc: 'Bi-weekly assessments to track your progress and build confidence.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 shrink-0 bg-primary/5 rounded-2xl flex items-center justify-center">
                         <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-black text-primary mb-1 uppercase text-[10px] tracking-widest">{item.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary p-12 rounded-[2.5rem] text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 blur-[80px] -mr-20 -mt-20" />
                <Star className="w-12 h-12 text-secondary mb-8 group-hover:rotate-45 transition-transform duration-700" />
                <h3 className="text-3xl font-black mb-6 tracking-tight leading-tight">Join Our Next Batch</h3>
                <p className="text-white/70 text-lg mb-10 leading-relaxed">
                  Admissions are now open for morning and evening shifts. Start your journey with the best mentors in Kathmandu.
                </p>
                <Link href="/contact" className="btn-primary w-full !bg-white !text-primary hover:!bg-secondary hover:!text-white shadow-xl text-center inline-block">Check Schedule</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
