const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

const common = require("./webpack.common.js");
const packageJson = require("./package.json");

module.exports = merge(common, {
  cache: true,
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        APP_VERSION: JSON.stringify(packageJson.version)
      }
    }),
    new CircularDependencyPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: "./index.ejs"
    })
  ]
});
