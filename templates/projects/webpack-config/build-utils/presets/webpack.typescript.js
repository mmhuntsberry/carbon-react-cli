/**
 * A one of config to add to your project if you
 * just want to try a feature
 *
 * install plugin, loader and
 * make sure to import into base config
 * and create a script in package.json
 * e.g.
 */

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
});
