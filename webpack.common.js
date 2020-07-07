const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.php$/i,
                loader: 'file-loader?{name: "[name].[ext], outputPath: "php/"}',
            },
            {
                test: /\.htaccess$/i,
                loader: 'file-loader?{name: "[name].[ext]}',
            },
            {
                test: /\.(png|jpe?g|gif|ico|svg|webp)$/i,
                loader:
                    'file-loader?{name: "[name].[ext]", outputPath: "assets/", esModule: false}',
            },
            {
                test: /\.ttf$/i,
                loader:
                    'file-loader?{name="[name].[ext], outputPath="assets/"}',
            },
        ],
    },
};
