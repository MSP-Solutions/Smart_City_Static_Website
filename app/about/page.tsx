import React from 'react';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';

export default function About() {
  return (
    <main>
      <PageBanner 
        title="About Us" 
        subtitle="Leading the way in Japanese educational consultancy with excellence and integrity."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
        breadcrumb={[{ name: 'About', href: '/about' }]}
      />
      
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Who We Are</span>
            <h2 className="text-2xl md:text-4xl font-black text-primary mb-8 leading-tight tracking-tighter">
              Leading Japanese Educational <br />
              <span className="text-secondary">Consultancy in Nepal.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed text-lg">
              <div>
                <p className="mb-6">
                  Smart City International Education is a reputed educational institution based in Kathmandu, Nepal. Our excellence in Japanese language training has best influenced student exchange programs between Nepal and Japan.
                </p>
                <p>
                  Monitored by professional language teachers, who have already been a part of the Japanese society, this leading educational institution ensures zero failure in interaction with the natives.
                </p>
              </div>
              <div>
                <p className="mb-6">
                  Our vision is to empower Nepalese students with the best education and career opportunities in Japan. We believe in providing honest, transparent, and high-quality services.
                </p>
                <ul className="space-y-4 mt-8">
                  {['Honesty', 'Excellence', 'Commitment', 'Global Success'].map(v => (
                    <li key={v} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-secondary/10 text-secondary rounded-full flex items-center justify-center text-xs font-bold italic">S</span>
                      <span className="font-bold text-primary">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
