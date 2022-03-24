import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    serviceWorker: {
      register: true,
      files: (filepath) => /\.(png|svg|ico|webmanifest)$/.test(filepath)
    },
    prerender: {
      default: true
    },
    vite: {
      resolve: {
        alias: {
          '@root': path.resolve('./src'),
          '@components': path.resolve('./src/lib/components'),
          '@utils': path.resolve('./src/lib/utils')
        }
      }
    }
  },

  preprocess: [
    preprocess({
      postcss: true
    })
  ]
}

export default config
