import PageBanner from '@/components/PageBanner';
import { BookText, Globe, GraduationCap, MapPin, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function JapaneseLanguageClasses() {
  const courseFeatures = [
    {
      title: "Basic to Advanced Levels",
      desc: "Complete training from N5 (Basic) to N1 (Advanced) levels following the standard Japanese curriculum.",
      icon: GraduationCap
    },
    {
      title: "Conversation Focused",
      desc: "Interactive sessions with native speakers to improve your speaking and listening skills.",
      icon: MessageSquare
    },
    {
      title: "Cultural Immersion",
      desc: "Learn about Japanese culture, etiquette, and lifestyle to prepare for your life in Japan.",
      icon: Globe
    },
    {
      title: "Kanji & Grammar",
      desc: "Structured lessons on Kanji characters and complex grammar patterns for better writing.",
      icon: BookText
    }
  ];

  return (
    <main>
      <PageBanner 
        title="Japanese Language Classes" 
        subtitle="Master the Japanese language with our structured courses and expert faculty."
        image="https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Japanese Language Classes', href: '/services/japanese-language-classes' }
        ]}
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight">Expert Language Training</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our language classes are designed to provide students with a solid foundation in Japanese. 
              Whether you are a beginner starting with Hiragana or an advanced student aiming for N1, 
              we have the right course for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {courseFeatures.map((feature, i) => (
              <div key={i} className="bg-light p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all shadow-sm">
                  {feature.icon && <feature.icon className="w-7 h-7 text-secondary group-hover:text-white" />}
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-dark rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] -mr-48 -mt-48 rounded-full" />
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">Morning & Evening Batches</h3>
                <p className="text-white/70 text-lg mb-10 leading-relaxed">
                  We understand your busy schedule. That&apos;s why we offer flexible timings for our students. 
                  Classes are available in multiple shifts throughout the day.
                </p>
                <ul className="space-y-4">
                  {[
                    "Morning Shift: 7:00 AM - 10:00 AM",
                    "Day Shift: 11:00 AM - 2:00 PM",
                    "Evening Shift: 3:00 PM - 6:00 PM"
                  ].map((shift, i) => (
                    <li key={i} className="flex items-center gap-4 text-secondary font-black uppercase text-xs tracking-widest">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      {shift}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem]">
                <h4 className="text-2xl font-black mb-6">Contact Your Nearest Branch</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <p className="font-black text-xs uppercase tracking-widest text-secondary mb-1">Butwal (Head Office)</p>
                      <p className="text-sm">Traffic Chowk, Butwal (071-532473)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <p className="font-black text-xs uppercase tracking-widest text-secondary mb-1">Kathmandu</p>
                      <p className="text-sm">Gongabu, Kathmandu (01-4973400)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <p className="font-black text-xs uppercase tracking-widest text-secondary mb-1">Pharsatikar</p>
                      <p className="text-sm">Suddhodan 4, Rupandehi (9766810432)</p>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary w-full mt-10 text-center block">Enquire Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
