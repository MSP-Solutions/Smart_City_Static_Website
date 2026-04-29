"use client";

import React from "react";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const states = [
  {
    name: "Tokyo",
    region: "Kanto",
    desc: "The energetic heart of Japan, famous for its neon lights, skyscrapers, and Shibuya Crossing.",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Osaka",
    region: "Kansai",
    desc: "Japan's kitchen, known for Dotonbori's vibrant atmosphere and the historic Osaka Castle.",
    image:
      "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Kyoto",
    region: "Kansai",
    desc: "The city of ten thousand shrines, famous for the Fushimi Inari torii gates and Arashiyama bamboo.",
    image:
      "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Nagoya",
    region: "Chubu",
    desc: "A major industrial and transportation hub, home to the magnificent Nagoya Castle.",
    image:
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Fukuoka",
    region: "Kyushu",
    desc: "Famous for its open-air food stalls (yatai) and beautiful seaside parks.",
    image:
      "https://res.klook.com/image/upload/fl_lossy.progressive,w_1200,h_630,c_fill,q_85/v1755071695/destination/eiy4ykjk6dkpzpxnf5j3.jpg",
  },
  {
    name: "Yokohama",
    region: "Kanto",
    desc: "A stunning port city featuring Minato Mirai and the world's largest Chinatown.",
    image:
      "https://images.unsplash.com/photo-1587474064565-922e1178ec8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hiroshima",
    region: "Chugoku",
    desc: "A city of peace and culture, featuring the iconic floating torii gate of Miyajima.",
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Kobe",
    region: "Kansai",
    desc: "A cosmopolitan city between the sea and the Rokko mountain range.",
    image:
      "https://plus.unsplash.com/premium_photo-1724593825200-39731dcdacf8?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nagasaki",
    region: "Kyushu",
    desc: "A historic port city with a unique blend of Eastern and Western influences.",
    image:
      "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Shizuoka",
    region: "Chubu",
    desc: "The best place to view Mount Fuji, surrounded by lush green tea plantations.",
    image:
      "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Hokkaido",
    region: "Hokkaido",
    desc: "The northern frontier, famous for its vast wilderness, skiing, and Sapporo.",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Aomori",
    region: "Tohoku",
    desc: "Known for its apple orchards and the vibrant Nebuta Festival.",
    image:
      "https://images.unsplash.com/photo-1602159649231-08f18550512d?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Akita",
    region: "Tohoku",
    desc: "Famous for traditional festivals, hot springs, and snowy landscapes.",
    image:
      "https://media.gettyimages.com/id/183856990/photo/hot-spring-inn-akita-prefecture.webp?s=612x612&w=gi&k=20&c=mYeDSxjK9LeWhmradHEcjt14nSq-Mrwx-IUcSNvKRfU=",
  },
  {
    name: "Niigata",
    region: "Chubu",
    desc: "Known for rice fields, sake production, and heavy snowfall regions.",
    image:
      "https://images.unsplash.com/photo-1694116865986-32660110ee0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmlpZ2F0YXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Kanazawa",
    region: "Chubu",
    desc: "Known for its well-preserved Edo-era districts and Kenrokuen Garden.",
    image:
      "https://images.unsplash.com/photo-1687355358866-c9ff1ed350eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nara",
    region: "Kansai",
    desc: "The ancient capital where deer roam free among historic temples.",
    image:
      "https://images.unsplash.com/photo-1610026386855-e01404c45a63?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Okinawa",
    region: "Okinawa",
    desc: "A tropical paradise with white sand beaches and unique Ryukyuan heritage.",
    image:
      "https://images.unsplash.com/photo-1647336963732-7446b9da7a6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Yamanashi",
    region: "Chubu",
    desc: "Home to Mount Fuji’s best views and beautiful lakes.",
    image:
      "https://images.unsplash.com/photo-1635215277614-5bea1b092836?q=80&w=753&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Nagano",
    region: "Chubu",
    desc: "Famous for mountains, skiing resorts, and Zenko-ji Temple.",
    image:
      "https://plus.unsplash.com/premium_photo-1690957484571-26f88c6ad43f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const StateCard = ({ state, index }: { state: any; index: number }) => {
  const [imgSrc, setImgSrc] = React.useState(state.image);

  return (
    <div className="card-hover group relative overflow-hidden h-[400px] md:h-[450px] shadow-2xl rounded-[2rem] md:rounded-[2.5rem]">
      <div className="relative w-full h-full bg-primary/10">
        <Image
          src={imgSrc}
          alt={state.name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
          onError={() => setImgSrc("/Logoshort.png")}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 p-6 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-secondary" />
          <span className="text-secondary text-[10px] font-black uppercase tracking-[0.2em]">
            {state.region} Region
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
          {state.name}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 mb-6 line-clamp-3">
          {state.desc}
        </p>
        {/* <Link
          href="/contact"
          className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest group/link"
        >
          View Schools{" "}
          <ArrowRight className="w-4 h-4 text-secondary transition-transform group-hover/link:translate-x-2" />
        </Link> */}
      </div>
    </div>
  );
};

export default function JapanStates() {
  return (
    <main>
      <PageBanner
        title="Japan States"
        subtitle="Explore the diverse prefectures and major cities where your journey could begin."
        image="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=2000"
        breadcrumb={[{ name: "Japan States", href: "/japan-states" }]}
      />

      <section className="py-24 bg-light relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {states.map((state, i) => (
              <StateCard key={i} state={state} index={i} />
            ))}
          </div>

          <div className="mt-24 text-center p-20 bg-white rounded-[3rem] border border-gray-100 shadow-xl">
            <h3 className="text-4xl font-black text-primary mb-6 tracking-tighter uppercase tracking-widest text-sm">
              And Many More Prefectures...
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Smart City International Education covers all 47 prefectures of
              Japan. From the snowy peaks of Hokkaido to the tropical shores of
              Okinawa, we help you find the perfect environment for your
              success.
            </p>
            <Link href="/contact" className="btn-primary !px-12 inline-block">
              Start Your Journey Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
