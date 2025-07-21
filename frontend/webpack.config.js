const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true,
    },
    port: 3000,
    hot: true,
    open: true,
    // port: 3010,
    // watch: true,
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
    ],
  },
};
