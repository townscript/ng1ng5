var ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require('path'), webpack = require('webpack');
module.exports = {
    //context: __dirname + '/app',
    debug: true,
    entry: {
        bundle: './app/app.js'
    },
    output: {
        path: path.join(__dirname, 'app'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap") },
            { test: /\.(png|svg|jpg|gif)([\?#].*)?$/, loader: "url?limit=1000&name=[path][name]-[hash].[ext]" },
            { test: /\.(ttf|otf|woff|woff2|eot)([\?#].*)?$/, loader: "file?name=[path][name]-[hash].[ext]" }
        ]
    },
    plugins: [
        new ExtractTextPlugin( "[name].css" )
    ],
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        historyApiFallback: {
            index: 'index.html'
        },
        displayErrorDetails: true
    }
};
