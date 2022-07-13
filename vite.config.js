import path from 'path'
import {sveltekit} from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '@root': path.resolve('./src'),
      '@components': path.resolve('./src/lib/components'),
      '@utils': path.resolve('./src/lib/utils')
    }
  }
}

export default config
