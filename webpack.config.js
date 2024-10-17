const path = require("path");
module.exports = {
  mode: "development", // 此模式打包出來的 main.js 依然是好閱讀的
  entry: "/src/index.js", // 告訴 webpack 要從哪開始打包
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // 打包後的檔案應該儲存的位置，__dirname:當前檔案所在的目錄
  },
  // loader:webpack 只理解 JavaScript 和 JSON 檔。loader允許 webpack 處理其他類型的檔
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // 先執行css-loader把結尾是.css 的檔案轉成JS,style-loader負責把此JS注入DOM
      },
    ],
  },
};
