const { merge } = require('webpack-merge')
const { resolveApp } = require('./paths')
const common = require('./webpack.common')

module.exports = merge(common, {
  // 输出
  output: {
    // bundle 文件名称 【只有这里和开发环境不一样】
    filename: '[name].[contenthash].bundle.js',

    // bundle 文件路径
    path: resolveApp('dist'),

    // 编译前清除目录
    clean: true
  },
  mode: 'production'
})
