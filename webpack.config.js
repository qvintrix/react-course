const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = env => {
    let prodConfig = {};

    if (env && env.production) {
        console.log('Production: ', env.production);
        prodConfig = {
            optimization: {
                minimizer: [new UglifyJsPlugin()],
            }
        }
    }

    return {
        ...prodConfig,
        output: {
            path: path.resolve('dist'),
            filename: 'bundled.js'
        },
        module: {
            rules: [
                { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' },
                { test: '/\.jsx$/', loader: 'babel-loader', exclude: '/node_modules/' },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                }]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    }
};
