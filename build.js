const { execSync } = require('child_process');
const path = require('path');

if (process.platform === 'win32') {
  process.env.NEXT_TEST_WASM_DIR = path.resolve(__dirname, 'node_modules/@next/swc-wasm-nodejs');
  execSync('npx.cmd next build', { stdio: 'inherit', env: process.env });
} else {
  execSync('next build', { stdio: 'inherit', env: process.env });
}
