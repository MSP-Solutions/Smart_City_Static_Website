import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Smart City International Education | Study & Work in Japan",
  description: "Your trusted partner for Japanese language classes, visa processing, and documentation. Choose Smart, Be Smart.",
  keywords: ["Study in Japan", "Work in Japan", "Japanese Language Class", "Kathmandu", "Nepal", "Student Visa", "SSW Japan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
