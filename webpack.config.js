const path = require("path");
const webpack = require("webpack");

const fs = require("fs");

const nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: __dirname + "/dist/", // js引用路径或者CDN地址
    path: path.resolve(__dirname, "dist"), // 打包文件的输出目录
    filename: "music-api.js",
    chunkFilename: "[name].chunk.js",
    // library: "musicApi",
    libraryTarget: "commonjs"
  },
  target: "node"
  // externals: nodeModules
};
