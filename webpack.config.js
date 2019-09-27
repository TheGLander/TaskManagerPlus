const HtmlWebpackPlugin = require('html-webpack-plugin');
const BitBarWebpackProgressPlugin = require("bitbar-webpack-progress-plugin");
module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: 'index.js',
        path: __dirname + "\\dist"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties', "@babel/plugin-transform-strict-mode"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new BitBarWebpackProgressPlugin()
    ]
};