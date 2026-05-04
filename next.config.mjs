/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "suakademi";
const basePath = isProd ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath,
  assetPrefix: isProd ? `/${repo}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "**" }]
  }
};

export default nextConfig;
