import  HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';

const __dirname = path.resolve();
export default {
    entry:{
        model: ['babel-polyfill', './js/model/moviesInfo.js'],
        controller:'./js/controller/controller.js',
        table:'./js/view/table.js',
        input:'./js/view/inputs.js',
        modal:'./js/view/modal.js'

    },
    output:{
        path: __dirname+"/dist",
        filename: '[name]-[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename:'index.html',
            template: __dirname+'/index.html'
        })
    ]
}