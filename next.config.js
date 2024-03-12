const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images : {
    domains : [
      'mc-heads.net'
    ]
  }
  // Optionally, add any other Next.js config below
}
 
module.exports = withMDX(nextConfig)