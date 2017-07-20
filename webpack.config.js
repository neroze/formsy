var webpack = require('webpack');
var path = require('path');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'out');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: [
        APP_DIR + '/app.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.js?/,
            include: APP_DIR,
            loader: ['babel-loader'],
            exclude: /node_modules/,

        }
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBuildNotifierPlugin({
            title: 'Jumper App',
            // logo: path.resolve(__dirname + '/out/images/dl-logo-white.png'),
            suppressSuccess: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, '/out'),
        // compress: true,
        port: 9000,
        inline: true,
        hot: true,
        publicPath: '/',
    }
};

module.exports = config;