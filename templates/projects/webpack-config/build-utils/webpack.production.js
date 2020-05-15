const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
  devtool: false,
  output: {
    filename: "bundle.js",
    // This may break
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [".", "node_modules"],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
