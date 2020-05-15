const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const Dotenv = require("dotenv-webpack");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetsConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      // sets mode (dev or prod)
      mode,
      // This devServer block is for preventing
      // react-router crashing when a page refreshes
      // with browser router enabled
      devServer: {
        historyApiFallback: true,
        contentBase: "./",
        hot: true
      },
      module: {
        rules: [
          {
            // file loader to accept images
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000
                }
              }
            ]
          }
        ]
      },
      output: {
        filename: "bundle.js"
      },
      plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new webpack.ProgressPlugin()
        // new webpack.optimize.ModuleConcatenationPlugin()
      ]
    },
    modeConfig(mode),
    presetsConfig({ mode, presets })
  );
};
