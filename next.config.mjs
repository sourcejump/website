/** @type {import('next').NextConfig} */
import headers from './headers.config.js';
import webpack from './webpack.config.js';

const nextConfig = {
  headers,
  webpack,
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx'],
};

export default nextConfig;
