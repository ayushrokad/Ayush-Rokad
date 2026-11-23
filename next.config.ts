import type { NextConfig } from 'next';
import path from 'path';

if (process.platform === 'win32' && !process.env.NEXT_TEST_WASM_DIR) {
  try {
    process.env.NEXT_TEST_WASM_DIR = path.resolve(__dirname, 'node_modules/@next/swc-wasm-nodejs');
  } catch {}
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|ico|pdf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
