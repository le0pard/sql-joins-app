import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import {sveltekit} from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit({
      adapter: adapter(),
      serviceWorker: {
        register: true,
        files: (filepath) => /\.(png|svg|ico|webmanifest)$/.test(filepath)
      },
      compilerOptions: {
        cssHash: ({ hash, css }) => `s-${hash(css)}`
      },
      preprocess: [
        preprocess({
          postcss: true
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@root': path.resolve('./src'),
      '@components': path.resolve('./src/lib/components'),
      '@utils': path.resolve('./src/lib/utils')
    }
  }
}

export default config
