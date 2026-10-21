import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep output tracing scoped to this project, not the parent Termux home directory.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
