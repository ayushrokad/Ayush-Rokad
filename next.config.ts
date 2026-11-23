import type { NextConfig } from 'next';
import path from 'path';

if (process.platform === 'win32' && !process.env.NEXT_TEST_WASM_DIR) {
  try {
    process.env.NEXT_TEST_WASM_DIR = path.resolve(__dirname, 'node_modules/@next/swc-wasm-nodejs');
  } catch {}
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
