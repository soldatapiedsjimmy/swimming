const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        index: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[hash:5].js',
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        chunks: ['index']
    }), new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: "[id].css"
    }), new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        'window.$': 'jquery',
        'window.jQuery': 'jquery'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    }, "css-loader"
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    }, "css-loader", "less-loader"
                ],
            },
            {
                test: /\.sass|scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    }, "css-loader", "sass-loader"
                ],
            },
            {
                test: /\.mp4/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/video/[hash][ext][query]'
                }
            },
            {
                test: /\.png|jpg$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/images/[hash][ext][query]'
                }
            },
            {
                test: /\.ttf/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/fonts/[hash][ext][query]'
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    devServer: {
        compress: true,
        port: 9000,
        open: true
    },
};
