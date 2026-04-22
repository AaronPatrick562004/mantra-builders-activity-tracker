/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Correct key for Next.js 16
  experimental: {
    turbopack: false,
  },
}

export default nextConfig