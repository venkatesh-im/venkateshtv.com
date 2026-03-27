import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Move Prisma outside the Next.js bundler to prevent issues with native binaries
  serverExternalPackages: ["@prisma/client", "prisma"],
  images: {
    domains: [],
  },
};

export default nextConfig;
