const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/index.js",

  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.css$/,
        use: [
          {
            // Babel を利用する
            loader: "css-loader",
            // Babel のオプションを指定する
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
};
