const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel?cacheDirectory',
                test: /\.jsx?$/
            },
            {
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', [
                    'css?sourceMap',
                    'postcss',
                    'sass?sourceMap'
                ]),
                test: /\.scss$/
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    postcss: () => [autoprefixer]
};
