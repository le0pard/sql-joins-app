import path from 'path'
import {sveltekit} from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit({
      compilerOptions: {
        cssHash: ({ hash, css }) => `s-${hash(css)}`
      }
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
