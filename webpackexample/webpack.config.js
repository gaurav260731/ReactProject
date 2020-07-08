const  path = require('path');
const PATH_SRC_DIR = path.join(__dirname, './src');
const PATH_DIST_DIR = path.join(__dirname, './dist');
const PATH_DEV_DIR = path.join(__dirname, './devfolder');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        path.join(PATH_SRC_DIR, './index.js')
    ],
    output: {
        path: PATH_DIST_DIR,
        filename: 'js/[name].[hash].js'
    },
    devServer: {
        contentBase: PATH_DIST_DIR,
        host: 'localhost',
        port: 4200,
        historyApiFallback: true,
        overlay: {
            errors: true,
            warning: true
        },

    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devtool: 'eval-cheapmodule-source-map',
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(PATH_SRC_DIR,'./index.html'),
        }),
        
    ],
}