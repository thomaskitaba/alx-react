const path = require("path");

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
      test: /\.css$/,
      use: [
        'style-loader',
      'css-loader'
    ],
      }
  ],
  // we can define ohter rules here
  },
};
