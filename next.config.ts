import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "fiery-fly-12.convex.cloud",
        protocol: "https",
      },
      {
        hostname: "compassionate-meadowlark-153.convex.cloud",
        protocol: "https",
      }
    ]

  }
};

export default nextConfig;
