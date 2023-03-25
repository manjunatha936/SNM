/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

 
  experimental: {
    newNextLinkBehavior: false,
    
  },
};

module.exports = nextConfig;
