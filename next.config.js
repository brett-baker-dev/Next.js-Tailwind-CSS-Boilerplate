const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
}

module.exports = nextConfig
