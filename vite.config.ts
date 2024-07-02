import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import sass from 'sass'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: /^~/, replacement: '' }]
  },
  plugins: [
    react(),
    reactRefresh(),
    viteTsconfigPaths(),
    svgrPlugin({
      svgrOptions: {
        icon: true
      }
    })
  ],
  server: {
    open: true,
    port: 3000
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass
      }
    }
  }
})
