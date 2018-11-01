const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GenerateStaticPagePlugin = require('./lib/GenerateStaticPagePlugin');
const path = require('path');

const ENTRY_PATH = './generate.js';

const basename = path.basename(process.cwd());
const dist = path.join(process.cwd(), 'build');
debugger;
const cleanPlugin = new CleanWebpackPlugin(dist, {
  allowExternal: true
});
const copyWebpackPlugin = new CopyWebpackPlugin(
  [
    {
      context: process.cwd(),
      from: 'assets/*',
      to: basename,
      toType: 'dir'
    },
    {
      context: './lib',
      from: 'assets/**/*',
      to: basename,
      toType: 'dir'
    }
  ],
  { debug: 'warning' }
);
const extractCSSPlugin = new ExtractTextPlugin(`${basename}/assets/combined.css`);
const generateStaticPagePlugin = new GenerateStaticPagePlugin();

const config = {
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: extractCSSPlugin.extract(['css-loader'])
      }
    ]
  },
  entry: ENTRY_PATH,
  output: {
    filename: 'generate.js',
    path: dist,
    libraryTarget: 'umd'
  },
  plugins: [cleanPlugin, extractCSSPlugin, copyWebpackPlugin, generateStaticPagePlugin],
  externals: [],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: 'node'
};

module.exports = config;
