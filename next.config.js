/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.boat-lifestyle.com"
      },
      {
        protocol: "https",
        hostname: "cdn4.vectorstock.com"
      }
    ],
  },
};

module.exports = nextConfig;
