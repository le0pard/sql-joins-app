const config = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 1,
      browsers: ['>0.3%', 'Firefox ESR', 'not dead', 'not ie 11', 'not op_mini all'],
      features: {
        'custom-properties': {
          strict: false,
          warnings: false,
          preserve: true
        }
      }
    }),
    require('postcss-reporter')
  ]
}

module.exports = config
