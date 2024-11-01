const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  }, // 告訴 webpack 要從哪開始打包
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // webpack 幫我們生成 html
    }),
  ],
  // loader:webpack 只理解 JavaScript 和 JSON 檔。loader允許 webpack 處理其他類型的檔案
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Injects styles to tje DOM
          "css-loader", // 2. Turns css into JS
          "sass-loader", // 1, Turns sass into css
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"], // 讓 webpack 可以解析 html 內容
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "imgs/[name].[hash][ext]",
        },
      },
    ],
  },
};
