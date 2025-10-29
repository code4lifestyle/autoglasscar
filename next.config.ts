import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // 👈 Replace this with the domain of your image
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
