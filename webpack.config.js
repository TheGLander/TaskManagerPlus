const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'index.js',
        path: __dirname + "\\dist"
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};