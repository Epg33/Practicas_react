/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["media.cnn.com",],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "**",
        pathname: "**",
      },
    ],
  }
}

module.exports = nextConfig
