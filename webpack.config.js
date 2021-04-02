const config = {
  entry: {
    root: __dirname + "/src/index",
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        parser: {
          worker: ["context.addModule('./recorder.worklet')"],
        },
      },
    ],
  },
};

module.exports = config;
