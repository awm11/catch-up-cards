import { defineConfig } from 'vite'

// Relative base so the site works at https://<user>.github.io/<any-repo-name>/
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
