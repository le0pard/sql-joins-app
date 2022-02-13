const browserlist = require('./browserslist.config.cjs')

const config = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 1,
      browsers: browserlist,
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
