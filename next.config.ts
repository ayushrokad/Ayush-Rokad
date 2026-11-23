import type { NextConfig } from 'next';
import path from 'path';

if (!process.env.NEXT_TEST_WASM_DIR) {
  process.env.NEXT_TEST_WASM_DIR = path.resolve(__dirname, 'node_modules/@next/swc-wasm-nodejs');
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
