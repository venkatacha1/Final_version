import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const reactAppApiUrl = env.REACT_APP_API_URL || '/api'
  const devApiTarget = env.VITE_DEV_API_TARGET || 'http://localhost:5001'

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env.REACT_APP_API_URL': JSON.stringify(reactAppApiUrl),
    },
    server: {
      port: 5174,
      fs: {
        strict: false,
      },
      proxy: {
        '/api': {
          target: devApiTarget,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
