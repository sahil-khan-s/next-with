/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

const withSass = require('@webdeb/next-styles')({
  sass: true, // use .scss files
  modules: true,
})

module.exports = withSass(nextConfig)
