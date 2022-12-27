/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org','surveymonkey-assets.s3.amazonaws.com','https://upload.wikimedia.org']
  }
}

module.exports = nextConfig
