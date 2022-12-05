/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "**",
        hostname: "**",
        port: "**",
        pathname: "**",
      },
    ],
  }
}

module.exports = nextConfig
