'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: { name: string; href: string }[];
}

const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, image, breadcrumb }) => {
  return (
    <section className="relative h-[350px] md:h-[450px] flex items-center overflow-hidden bg-primary pt-16 md:pt-20">
      {/* Background with Optimized Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/40 z-10" />
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover scale-105" 
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl animate-fade-in">
          {/* Refined Breadcrumbs */}
          <nav className="hidden sm:flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8">
            <Link href="/" className="hover:text-secondary flex items-center gap-1 transition-colors">
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-3 h-3 opacity-30" />
            {breadcrumb && breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <Link href={item.href} className="hover:text-secondary transition-colors">
                  {item.name}
                </Link>
                {index < breadcrumb.length - 1 && <ChevronRight className="w-3 h-3 opacity-30" />}
              </React.Fragment>
            ))}
            <span className="text-secondary font-black tracking-[0.3em]">{title}</span>
          </nav>

          <h1 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-[1.1] uppercase">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/60 text-sm md:text-md font-medium leading-relaxed max-w-2xl border-l-4 border-secondary/30 pl-6 md:pl-8 mt-2 md:mt-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
