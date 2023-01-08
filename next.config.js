/** @type {import('next').NextConfig} */
// const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // }
  images: {
    domains: ['random.dog'],
  },
}

module.exports = nextConfig
