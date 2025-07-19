// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This is the key part. We are configuring the development server's headers.
    headers: {
      // We set a Content-Security-Policy to explicitly allow credly.com as a frame source.
      'Content-Security-Policy': "frame-src 'self' https://www.credly.com;"
    }
  }
});
