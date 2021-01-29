const path = require('path');

module.exports = {
  entry: './src/index.js', // entry point (トランスパイル前)
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
        }
      }
    ]
  },
  output: {                // トランスパイル後
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};