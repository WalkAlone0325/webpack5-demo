const { merge } = require('webpack-merge')
const { resolveApp } = require('./paths')
const common = require('./webpack.common')

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.js',
    path: resolveApp('dist'),
    clean: true
  },
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // 告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要。
    // contentBase: './dist'
  }
})
