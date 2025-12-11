import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  const base = '/';

  return {
    base,
    server: {
      port: 3000,
      host: '0.0.0.0',
      // Add this proxy configuration
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8788', // Point to Wrangler
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setupTests.ts',
      css: true,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'json-summary', 'html'],
        exclude: [
          'node_modules/',
          '.wrangler/',
          'setupTests.ts',
          'index.tsx',
          'types.ts',
          '**/*.d.ts',
          '**/*.test.{ts,tsx}',
          '**/*.config.{ts,js}',
          'dist/',
        ],
        include: ['components/**/*.{ts,tsx}', 'services/**/*.{ts,tsx}', '*.{ts,tsx}'],
        thresholds: {
          global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
          },
        },
        thresholdAutoUpdate: false,
      },
    },
  };
});
