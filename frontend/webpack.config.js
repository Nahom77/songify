const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  // output: {
  //   path: path.join(__dirname, '/dist'),
  //   filename: 'index.bundle.js',
  //   publicPath: '/',
  // },

  //for deployment
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true,
    },
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][hash][ext][query]',
        },
      },
      {
        test: /\.svg$/i,
        oneOf: [
          {
            // Allows importing SVGs as React components using @svgr/webpack
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
          },
          {
            // Fallback to file-loader behavior
            type: 'asset/resource',
            generator: {
              filename: 'images/[name][hash][ext][query]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      publicPath: '/',
    }),
    new CspHtmlWebpackPlugin(
      {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-eval'"], // only for dev
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'", 'data:', 'http://localhost:3000'],
        'connect-src': [
          "'self'",
          'http://localhost:3000',
          'https://song-discovery-by-nahom-9e5e4e24a578.herokuapp.com',
        ],
      },
      {
        enabled: true,
        hashingMethod: 'sha256',
        hashEnabled: {
          'script-src': false,
          'style-src': false,
        },
      }
    ),
  ],
};
