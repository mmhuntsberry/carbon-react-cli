module.exports = () => ({
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,

        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
          {
            // This loader resolves url() and @imports inside CSS
            loader: "style-loader"
          },
          {
            // Then we apply postCSS fixes like autoprefixer and minifying
            loader: "css-loader"
          },
          {
            // First we transform SASS to standard CSS
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: [".", "node_modules"]
              }
            }
          }
        ]
      }
    ]
  }
});
