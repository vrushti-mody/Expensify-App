//entry -> endpoint
const path = require('path');

module.exports={
    
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'/public'),
       
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude: /node_modules/,
        },{
            test:/\.(s?)css$/,
            use:['style-loader','css-loader','sass-loader'],
            include: [
                path.resolve(__dirname, "./src"),
                path.resolve(__dirname, "./node_modules")
            ]
        }]
    },

    devServer:{
        contentBase:path.join(__dirname,'/public'),
        historyApiFallback:true
    },
    devtool:'cheap-module-eval-source-map'
    
};