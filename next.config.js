/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'flagsapi.com'
      }
    ],
  },
}

module.exports = nextConfig
