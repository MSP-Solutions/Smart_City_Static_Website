import React from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export default function ManagingDirectorMessage() {
  return (
    <main>
      <PageBanner
        title="Managing Director Message"
        subtitle="A message from our leadership to the aspiring students of Nepal."
        image="https://plus.unsplash.com/premium_photo-1661414415246-3e502e2fb241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        breadcrumb={[{ name: "Managing Director", href: "/md-message" }]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-secondary">
                <Image src="/md.png" alt="MD" fill className="object-cover" />
              </div>
              <div className="mt-8 text-center md:text-left">
                <h3 className="text-2xl font-black text-primary tracking-tight">
                  Suraj Bhusal
                </h3>
                <p className="text-secondary font-black uppercase tracking-[0.2em] text-[10px]">
                  Principal
                </p>
                <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">
                  +977-9857086452
                </p>
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-4xl font-black text-primary mb-10 leading-tight tracking-tighter italic">
                &#34;Your success is <br />
                <span className="text-secondary underline decoration-8 decoration-secondary/10 underline-offset-16">
                  our greatest achievement.&#34;
                </span>
              </h2>
              <div className="space-y-8 text-gray-500 leading-relaxed text-xl italic">
                <p>
                  Namaste! As the Managing Director of Smart City International
                  Education, I personally oversee every step of your journey —
                  from the moment you walk through our doors to the day you
                  board your flight to Japan.
                </p>
                <p>
                  My primary responsibility is to ensure that our Nepal-side
                  operations run with precision and care. I work closely with
                  our counselling team, documentation specialists, and language
                  instructors to guarantee that each student receives
                  personalised attention and the best possible preparation for
                  life in Japan.
                </p>
                <p>
                  I believe that transparency and honesty are the foundation of
                  any successful consultancy. We never make promises we cannot
                  keep. Instead, we provide you with a clear, realistic roadmap
                  — and then we walk that road with you, every step of the way.
                </p>
                <p>
                  Whether you are aiming for a language school, a vocational
                  college, or a university, our team is here to match your goals
                  with the right institution. I am always available to listen to
                  your concerns and help you make informed decisions. Together,
                  let us build your future in Japan. Choose Smart, Be Smart!
                </p>
                <div className="pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-px bg-secondary" />
                    <p className="font-black text-primary uppercase tracking-widest text-sm">
                      Suraj Bhusal
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-primary !px-10 !py-4 text-sm"
                  >
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
