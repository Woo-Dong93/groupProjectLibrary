var webpack = require('webpack')
module.exports = {
  output: {
    library: 'MathquillComponent',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  target: 'node',
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /mathquill\.css$/,
        loader: 'string-replace-loader',
        options: {
          search: '@font-face {(.|\n)+?}',
          replace:
            '@font-face {\n' +
            '  /* Heavy fonts have been removed */\n' +
            '  font-family: Symbola;\n' +
            '}',
          flags: 'g',
        },
      },
      {
        test: require.resolve(
          './node_modules/@edtr-io/mathquill/build/mathquill.js'
        ),
        loader: 'exports-loader',
        options: {
          type: 'commonjs',
          exports: {
            syntax: 'single',
            name: 'window.MathQuill',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
}
