const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (environment) => {
  let OUTPUT_PATH = environment === 'development' ? './public' : './build'

  let config = {
    context: path.resolve(__dirname, './src'),
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, OUTPUT_PATH),
      filename: '[name].[hash:8].js'
    },
    resolve: {
      alias: {
        config: path.resolve(__dirname, 'src', 'environments', `${environment}.js`)
      },
      extensions: [ '.js', '.json', '.jsx' ]
    },
    mode: environment,
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          exclude: /node_modules/,
          test: /\.(js|jsx|mjs)$/,
          use: 'babel-loader'
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'raw-loader'
            }
          ]
        },
        {
          exclude: [
            /\.html$/,
            /\.(js|jsx|mjs)$/,
            /\.css$/,
            /\.json$/,
            /\.svg$/,
            /\.(graphql|gql)$/,
            /particles\.js/
          ],
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]'
              }
            }
          ]
        },
        {
          test: /particles\.js/,
          loader: 'exports-loader?particlesJS=window.particlesJS,pJSDom=window.pJSDom'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(OUTPUT_PATH),
      new HtmlWebpackPlugin({
        inject: true,
        template: './index.html'
      }),
      new CaseSensitivePathsPlugin()
    ],
    devServer: {
      compress: true,
      clientLogLevel: 'none',
      contentBase: './public',
      overlay: true,
      hot: false,
      port: 8080,
      quiet: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      historyApiFallback: true,
      watchOptions: {
        ignored: /node_modules/
      }
    }
  }

  return config
}
