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
      },
    {
      test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/i,
      use: [
        "file-loader",
        {
          loader: "image-webpack-loader",
          options: {
            bypassOnDebug: true,
            disable: true,
          },
        },
      ],
    }
  ],

  // we can define ohter rules here
  },
};
