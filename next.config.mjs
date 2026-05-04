/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "suakademi";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "**" }]
  }
};

export default nextConfig;
