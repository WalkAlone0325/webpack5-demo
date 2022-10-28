const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolveApp } = require('./paths')
const paths = require('./paths')

module.exports = {
  // 入口
  entry: {
    index: './src/index.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      // ts
      {
        test: /\.(js|ts|tsx|jsx)$/,
        include: paths.appSrc,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015'
            }
          }
        ]
      },
      // image
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: paths.appSrc,
        type: 'asset/resource'
      },
      // font
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        include: resolveApp('src'),
        type: 'asset/resource'
      },
      // css
      {
        test: /\.css$/,
        include: paths.appSrc,
        use: [
          // js 生成 style 节点
          'style-loader',
          // css 转成 commonjs 模块
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2
              // 0 => no loaders(default),
              // 1 => postcss-loader,
              // 2 => postcss-loader, sass-loader
            }
          },
          // postcss => css
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    // postcss-preset-env 包含 autoprefixer
                    'postcss-preset-env'
                  ]
                ]
              }
            }
          },
          // sass 转成 css
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'release_v0'
    })
  ]
}
