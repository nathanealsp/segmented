const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      process: 'process/browser',
    },
  },
  externals: ['tls', 'net', 'fs'],
  output: {
    filename: 'index.js',
    library: 'extractDeviceTypeFromUA',
    libraryExport: 'default',
  },
  plugins: [new NodePolyfillPlugin()],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            unused: false,
          },
          mangle: {
            keep_fnames: true,
          },
        },
      }),
    ],
  },
};
