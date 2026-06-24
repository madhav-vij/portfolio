/** @type {import('next').NextConfig} */
const isLocalDev = process.env.LOCAL_DEV === "true"

const nextConfig = {
  output: "export",
  basePath: isLocalDev ? "" : "/portfolio",
  assetPrefix: isLocalDev ? "" : "/portfolio",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
