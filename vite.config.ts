import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

const host = 'localhost'
const port = 5191
const urlToOpen = `http://${host}:${port}`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port,
    open: urlToOpen,
    origin: urlToOpen
  },
  envDir: './src/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    cssCodeSplit: false,
    sourcemap: false,
    minify: false,
    // brotliSize: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
