/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Move Prisma outside the Next.js bundler to prevent issues with native binaries
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client", "prisma"],
  },
  images: {
    domains: [],
  },
};

export default nextConfig;
