//entry -> endpoint
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports= (env)=>{
    console.log(env)
    const isProduction = env =='production'
    const CSSExtract = new ExtractTextPlugin('styles.css')
    console.log(isProduction)
return(
{
    
    entry:'./src/app.js',
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
        CSSExtract
    ]
    
});
}