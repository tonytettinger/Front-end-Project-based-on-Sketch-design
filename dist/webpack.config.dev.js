"use strict";

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Webpack uses this to work with directories
var path = require("path");

var MiniCssExtractPlugin = require("mini-css-extract-plugin"); // This is the main configuration object.
// Here you write different options and tell Webpack what to do


module.exports = (_module$exports = {
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  // Path to your entry point. From this file Webpack will begin his work
  entry: "./src/js/index.js",
  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "production"
}, _defineProperty(_module$exports, "mode", "development"), _defineProperty(_module$exports, "module", {
  rules: [{
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"]
      }
    }
  }, {
    // Apply rule for .sass, .scss or .css files
    test: /\.(sa|sc|c)ss$/,
    // Set loaders to transform files.
    // Loaders are applying from right to left(!)
    // The first loader will be applied after others
    use: [{
      loader: MiniCssExtractPlugin.loader
    }, {
      // This loader resolves url() and @imports inside CSS
      loader: "css-loader"
    }, {
      // Then we apply postCSS fixes like autoprefixer and minifying
      loader: "postcss-loader"
    }, {
      // First we transform SASS to standard CSS
      loader: "sass-loader"
    }]
  }, {
    // Now we apply rule for images
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [{
      // Using file-loader for these files
      loader: "file-loader",
      // In options we can set different things like format
      // and directory to save
      options: {
        outputPath: "images"
      }
    }]
  }]
}), _defineProperty(_module$exports, "watch", true), _defineProperty(_module$exports, "devServer", {
  compress: true,
  port: 8888,
  liveReload: true,
  open: true,
  writeToDisk: true
}), _defineProperty(_module$exports, "plugins", [new MiniCssExtractPlugin({
  filename: "bundle.css"
})]), _module$exports);