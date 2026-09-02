import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Keep resolution inside this repo (avoids picking up lockfiles above the project).
    root: projectRoot,
  },
};

export default nextConfig;
