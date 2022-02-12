import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          '@root': path.resolve('./src'),
          '@components': path.resolve('./src/lib/components')
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
