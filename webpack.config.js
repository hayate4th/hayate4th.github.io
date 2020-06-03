const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devServer: {
    contentBase: "./docs"
  }
}
