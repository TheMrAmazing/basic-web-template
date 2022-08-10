const makeInclude = require('@dbux/common-node/dist/filters/makeInclude').default
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const moduleFilterOptions = {
  packageWhitelist: 'interestingPackage1,@interesting/package2',
  // packageBlacklist: '',
  fileBlacklist: '.*bad_file1\.js,.*/unwanted_dir1/.*'
};

const isProduction = process.env.NODE_ENV == "production";

const config = {
    entry: "./src/index.js",
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'index_bundle.js',
    },
    devServer: {
      open: true,
      host: "localhost",
    },
    plugins: [
      new HtmlWebpackPlugin(),
  
      // Add your plugins here
      // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
  module: {
    rules: [
      // ...
      {
        test: /\.jsx?$/,
        include: [
          makeInclude(moduleFilterOptions)
        ],
        use: {
          loader: 'babel-loader',
          options: {
            /**
             * Make sure, things work correctly, even if babeling (maybe previously unbabled) `node_modules`.
             * @see https://github.com/webpack/webpack/issues/4039#issuecomment-419284940
             */
            sourceType: 'unambiguous',
            plugins: [
            ]
          }
        }
      }
    ]
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
    config.module.rules[0].use.options.plugins.push('@dbux/babel-plugin')
  }
  return config;
};
