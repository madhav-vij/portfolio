/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure the project to be exported as a static site
  output: "export",

  // Configure the base path for the project, which is the name of your repository
  basePath: "/portfolio",

  // This is needed for images to work correctly on GitHub Pages
  images: {
    unoptimized: true,
  },
}

export default nextConfig
