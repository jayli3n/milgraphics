var CustomVarLibraryNamePlugin = require('webpack-custom-var-library-name-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'milgraphics.js',
    path: './dist',
    library: 'milgraphics',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new CustomVarLibraryNamePlugin({
      name: 'ms'
    })
  ]
}