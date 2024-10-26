module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier', 'plugin:svelte/recommended'],
  plugins: [],
  overrides: [{ files: ['*.svelte'], parser: 'svelte-eslint-parser'}],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    semi: [2, 'never']
  }
}
