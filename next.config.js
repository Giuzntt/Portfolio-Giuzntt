/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["media.graphassets.com", "sa-east-1.graphassets.com"],
  },
};

module.exports = nextConfig;
