const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client');

module.exports = {
  mode: 'development',
  entry: path.resolve(SRC_DIR, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
