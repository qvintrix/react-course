const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = env => {
    let prodConfig = {};

    if (env && env.production) {
        prodConfig = {
            optimization: {
                minimizer: [new UglifyJsPlugin()],
            }
        }
    }

    return {
        ...prodConfig,
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            historyApiFallback: true,
            hot: true
        },
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
                },
                {
                    test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                    loader: 'url-loader?limit=100000'
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    }
};
