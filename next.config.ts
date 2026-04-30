import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.klook.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fktm17-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'media.gettyimages.com',
      },
      {
        protocol: 'https',
        hostname: 'cityeducare.com',
      }
    ],
  },
};

export default nextConfig;
