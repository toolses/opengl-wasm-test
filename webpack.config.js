const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "js/index.js"),
  externals: {
    fs: "empty",
  },
  mode: "development",
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  module: {
    rules: [
      {
        include: [path.join(__dirname)],
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      { test: /\.(wasm)$/, loader: "file-loader", type: "javascript/auto" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "index.html") }),
  ],
};
