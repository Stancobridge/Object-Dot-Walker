const path = require("path");

module.exports = {
  mode: "development",

  entry: "/src/ObjectWalker.js",

  output: {
    filename: "app.raw.js",
    path: path.resolve(__dirname, "./build"),
  },
};
