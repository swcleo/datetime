const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const TARGET = process.env.npm_lifecycle_event;

const baseConfig = {
  entry: "./src/index.ts",
  output: {
    filename: "datetime.js",
    path: path.resolve(__dirname, "dist"),
    library: "DateTime",
    libraryTarget: "umd",
    globalObject: "this"
  },
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
};

if (TARGET === "start") {
  module.exports = merge(baseConfig, {
    mode: "development",
    plugins: [new HtmlWebpackPlugin()]
  });
}

if (TARGET === "build") {
  module.exports = merge(baseConfig, {
    mode: "production"
  });
}
