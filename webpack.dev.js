const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development", // 此模式打包出來的 main.js 依然是好閱讀的
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // 打包後的檔案應該儲存的位置，__dirname:當前檔案所在的目錄
  },
});
