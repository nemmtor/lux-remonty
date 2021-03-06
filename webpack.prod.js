const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    optimization: {
        minimize: true,
        usedExports: true,
        sideEffects: true,
        splitChunks: { chunks: 'all', maxSize: 40000 },
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserPlugin({ sourceMap: true }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                favicon: './src/assets/favicon.png',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    removeScriptTypeAttributes: true,
                },
            }),
            new HtmlWebpackPlugin({
                filename: 'polityka-prywatnosci/index.html',
                template: './src/polityka-prywatnosci.html',
                favicon: './src/assets/favicon.png',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    removeScriptTypeAttributes: true,
                },
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CopyPlugin({
            patterns: [
                { from: './.htaccess' },
                { from: './sitemap.xml' },
                { from: './robots.txt' },
                { from: './wizytowka.png' },
                { from: './php/contactform.php', to: 'php' },
            ],
        }),
    ],
});
