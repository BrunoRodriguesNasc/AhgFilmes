import  HtmlWebPackPlugin from 'html-webpack-plugin';

export default {
    entry:{
        model: ['babel-polyfill', './js/model/moviesInfo.js'],
        controller:'./js/controller/controller.js',
        table:'./js/view/table.js',
        input:'./js/view/inputs.js',
        modal:'./js/view/modal.js'

    },
    output:{
        path: "/home/ahgora/Área de Trabalho/ahgfilmes/dist",
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
            template:'/home/ahgora/Área de Trabalho/ahgfilmes/index.html'
        })
    ]
}