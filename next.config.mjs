/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optional: Configure image domains if using next/image
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
}

export default nextConfig
