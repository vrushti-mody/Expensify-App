//entry -> endpoint
const path = require('path');
const webpack = require('webpack')
require('dotenv').config()
const ExtractTextPlugin = require('extract-text-webpack-plugin');
process.env.NODE_ENV = process.env.NODE_ENV || 'development'


module.exports= (env)=>{
    console.log(env)
    const isProduction = env =='production'
    const CSSExtract = new ExtractTextPlugin('styles.css')
    console.log(isProduction)
return(
{
    
    entry:[ 'babel-polyfill', './src/app.js'],
    output:{
        path:path.join(__dirname,'public','dist'),
       
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude: /node_modules/,
        },{
            test:/\.(s?)css$/,
            use:CSSExtract.extract({
                use:[
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap: true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap: true
                        }
                    }
                    
                ]
            }),
            include: [
                path.resolve(__dirname, "./src"),
                path.resolve(__dirname, "./node_modules")
            ]
        }]
    },

    devServer:{
        contentBase:path.join(__dirname,'/public'),
        historyApiFallback:true,
        publicPath:'/dist/'
    },
    devtool: isProduction ? 'source-map':'inline-source-map',
    plugins:[
        CSSExtract,
        new webpack.DefinePlugin({
            "process.env.API_KEY" : JSON.stringify(process.env.API_KEY),
            "process.env.AUTH_DOMAIN" : JSON.stringify(process.env.AUTH_DOMAIN),
            "process.env.DATABASE_URL" : JSON.stringify(process.env.DATABASE_URL),
            "process.env.PROJECT_ID" : JSON.stringify(process.env.PROJECT_ID),
            "process.env.MESSAGING_SENDER_ID" : JSON.stringify(process.env.MESSAGING_SENDER_ID),
            "process.env.STORAGE_BUCKET" : JSON.stringify(process.env.STORAGE_BUCKET),
            "process.env.APP_ID" : JSON.stringify(process.env.APP_ID),
            "process.env.MEASUREMENT_ID" : JSON.stringify(process.env.MEASUREMENT_ID),
        })
    ]
    
});
}