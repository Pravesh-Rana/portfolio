#!/usr/bin/env node

import { build } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist/public',
    sourcemap: false,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './attached_assets'),
    },
  },
  root: 'client',
};

try {
  await build(config);
  console.log('Client build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}