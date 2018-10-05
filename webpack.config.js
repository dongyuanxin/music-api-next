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
    publicPath: __dirname + "/dist/",
    path: path.resolve(__dirname, "dist"),
    filename: "music-api-next.js",
    chunkFilename: "[name].chunk.js",
    libraryTarget: "commonjs"
  },
  target: "node"
};
