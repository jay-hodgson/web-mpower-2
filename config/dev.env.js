'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  loaders: [{
    test: /\.styl$/,
    loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
  }]
})
