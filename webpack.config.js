const path = require("path");
module.exports = {
  mode: "development", // 此模式打包出來的 main.js 依然是好閱讀的
  entry: "/src/index.js", // 告訴 webpack 要從哪開始打包
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // 打包後的檔案應該儲存的位置，__dirname:當前檔案所在的目錄
  },
};
