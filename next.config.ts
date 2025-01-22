/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `https://micro-frontend-multi-zones-blog-app.vercel.app/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `https://micro-frontend-multi-zones-blog-app.vercel.app/blog/:path*`,
      },
    ]
  },
}

module.exports = nextConfig

