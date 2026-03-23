import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/aboutus", destination: "/about-us", permanent: true },
      { source: "/aboutus/:path*", destination: "/about-us/:path*", permanent: true },
      { source: "/case-studies", destination: "/our-work", permanent: true },
      { source: "/case-studies/:path*", destination: "/our-work/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
