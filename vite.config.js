// Vite is the tool that runs your site while you work on it and packages it for the web.
// This file tells Vite two things: "we use React" and "how to run tests".
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: './' makes the built site use relative file paths, so it works from a
  // subfolder like https://royzhirenli.github.io/RoyLiPortfolio/ (GitHub Pages)
  // as well as from a normal domain.
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom', // a fake browser, so tests can render React components
    globals: true, // lets tests use describe/it/expect without importing them
    setupFiles: './src/test-setup.js',
  },
})
