const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    output: {
        path: path.resolve('dist'),
        filename: 'bundled.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {loader: 'style-loader!css-loader', test: /\.css$/}
        ]
    }
    ,
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}
;
