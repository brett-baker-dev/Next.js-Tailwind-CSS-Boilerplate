const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  env: {
    ALLOWED_DOMAINS: [
      "http://localhost",
      "http://localhost:3000",
    ],
  }
}

module.exports = nextConfig
