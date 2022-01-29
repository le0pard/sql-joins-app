const browserlist = require('./browserslist.config.cjs')

const config = {
  plugins: [
    require('postcss-import'),
    require('rucksack-css'),
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
    })
  ]
}

module.exports = config
