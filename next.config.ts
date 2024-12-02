import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  assetPrefix:
    process.env.NODE_ENV === "production" && !process.env.VERCEL
      ? "https://cdn.zzfzzf.com/xx"
      : "/",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["zzfzzf.com", "*.ooxo.cc", "ccw.es"],
    },
  },
  productionBrowserSourceMaps: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
