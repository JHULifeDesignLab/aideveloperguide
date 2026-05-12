import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aideveloperguide/',
  resolve: {
    alias: {
      '@': './src'
    }
  },
  plugins: [
    {
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter as any, remarkGfm],
        providerImportSource: '@mdx-js/react'
      }),
      enforce: 'pre'
    } as any,
    react()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  }
})
