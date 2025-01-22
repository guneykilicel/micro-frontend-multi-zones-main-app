/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `https://${process.env.NEXT_PUBLIC_BLOG_URL}`,
      },
      {
        source: "/blog/:path*",
        destination: `https://${process.env.NEXT_PUBLIC_BLOG_URL}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig

