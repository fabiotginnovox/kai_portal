import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3010,
        host: '0.0.0.0',
      },
      plugins: [
        react(), 
        mode !== 'development' && viteSingleFile()
      ].filter(Boolean),
      define: {
        "import.meta.env.VITE_BRANCH": JSON.stringify(process.env.CF_PAGES_BRANCH),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
