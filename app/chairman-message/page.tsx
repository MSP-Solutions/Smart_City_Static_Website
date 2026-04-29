import React from 'react';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function ChairmanMessage() {
  return (
    <main>
      <PageBanner 
        title="Chairman Message" 
        subtitle="A message from our leadership to the aspiring students of Nepal."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
        breadcrumb={[{ name: 'Chairman Message', href: '/chairman-message' }]}
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-secondary">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="Chairman" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="mt-8 text-center md:text-left">
                <h3 className="text-2xl font-black text-primary tracking-tight">Madhukar Basnet</h3>
                <p className="text-secondary font-black uppercase tracking-[0.2em] text-[10px]">Chairman / Principal</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-4xl font-black text-primary mb-10 leading-tight tracking-tighter italic">
                &#34;Your success is <br />
                <span className="text-secondary underline decoration-8 decoration-secondary/10 underline-offset-16">our greatest achievement.&#34;</span>
              </h2>
              <div className="space-y-8 text-gray-500 leading-relaxed text-xl italic font-medium">
                <p>
                  Namaste and Welcome to Smart City International Education!
                </p>
                <p>
                  It is my great pleasure to welcome you to our institution. Over the years, we have helped hundreds of students realize their dream of studying and working in Japan. Our commitment to quality education and honest guidance has made us a trusted name in Nepal.
                </p>
                <p>
                  Japan offers a world-class education system and incredible career opportunities. At Smart City, we don&apos;t just teach language; we prepare you for a new life.
                </p>
                <p>
                  We invite you to join our community and take the first step towards a bright future. Choose Smart, Be Smart!
                </p>
                <div className="pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-px bg-secondary" />
                    <p className="font-black text-primary uppercase tracking-widest text-sm">Madhukar Basnet</p>
                  </div>
                  <Link href="/contact" className="btn-primary !px-10 !py-4 text-sm">
                    Start Your Journey
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
