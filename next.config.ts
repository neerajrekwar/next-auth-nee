import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    serverActions:{
      allowedOrigins: ['localhost:3000', '*.app.github.dev/'],
      
    }
  }
  /* config options here */
};

export default nextConfig;
