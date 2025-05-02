import { resolve } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'mysta-lib': resolve(__dirname, 'node_modules/@mystaline/mysta-lib'),
      'mysta-presets': resolve(
        __dirname,
        'node_modules/@mystaline/mysta-presets',
      ),
    },
  },
  server: {
    port: 9080,
  },
  build: {
    sourcemap: true,
  },
});
