/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "dvvjkgh94f2v6.cloudfront.net"],
  },
}

module.exports = nextConfig
