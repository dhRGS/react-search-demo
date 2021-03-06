const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + '/app/index.js',
    output: {
       path: DIST_DIR,
       filename: 'app.bundle.js',
       publicPath: "/"
    },
    devtool:'#source-map',
    devServer: {
        inline: true, // otherwise runs in an iframe
        compress: true, // gzip assets
        port: 8080,
        contentBase: DIST_DIR,
        stats: 'errors-only', // essential logging only
        open: true
    },
    module: {
      rules: [
        {
            test: /\.js?/,
            include: SRC_DIR,
            //exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['env']
            }
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
                })
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader'
            })
          },
        // {
        //     test: /\.css$/,  // this adds all styles to the head of the document
        //     use: [
        //     'style-loader',
        //     'css-loader'
        //     ]
        // },
        {
            test: /.woff$|.woff2$|.ttf$|.eot$|.svg$/,
            use: 'file-loader?name=[name].[ext]&outputPath=./fonts/'
        }
       ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Semantic Search Project',
            template: SRC_DIR + '/index.ejs',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            hash: true
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          }),
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NamedModulesPlugin()
    ]
 }
 module.exports = config;
 
 // const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// var pathsToClean = ['./dist'];

// var cleanOptions = {
//   root: __dirname,
//   exclude: [],
//   verbose: true,
//   dry: false
// };

// module.exports = {
//     context: path.resolve(__dirname, 'src'),
//     entry: "./app/index.js",
//     output: {
//       filename: "bundle.js",
//       path: path.resolve(__dirname, 'dist')
//     },
//     devtool: 'source-map',
//     watch: true,
//     module: {
//       loaders: [
//         {
//           test: /\.js$/,
//           loader: 'babel-loader',
//           exclude: /node_modules/,
//           options: {
//             presets: ['env']
//           }
//         },
//   /*      ,*/
//        {
//           test: /\.css$/,
//           use: [
//             'style-loader',
//             'css-loader'
//           ]
//         },
//         {
//           test: /\.html$/,
//           use: ['html-loader']
//         },
//         {
//           test: /\.(jpg|png)$/,
//           use: [
//               {
//                 loader: 'file-loader',
//                 options: {
//                   name: '[name].[ext]',
//                   outputPath: './dist/img/',
//                   //publicPath: 'dist/img/'
//                 }
//               }
//           ]
//         },
//         {
//           test: /\.ttf$/,
//           use: 'file-loader?name=[name].[ext]&outputPath=../fonts/&publicPath=../fonts/&mimetype=font/ttf'
//           /*test: /.woff$|.woff2$|.ttf$|.eot$|.svg$/,
//           loader: 'file-loader'*/
//         },
//         {
//           test: /\.woff$/,
//           use: 'file-loader?name=[name].[ext]&outputPath=../fonts/&publicPath=../fonts/&mimetype=font/woff'
//         },
//         {
//           test: /\.woff2$/,
//           use: 'file-loader?name=[name].[ext]&outputPath=../fonts/&publicPath=../fonts/&mimetype=font/woff2'
//         },
//         {
//           test: /\.eot$/,
//           use: 'file-loader?name=[name].[ext]&outputPath=../fonts/&publicPath=../fonts/&mimetype=font/eot'
//         },
//         {
//           test: /\.svg$/,
//           use: 'file-loader?name=[name].[ext]&outputPath=../fonts/&publicPath=../fonts/&mimetype=font/svg'
//         }
//       ]
//     },
//     plugins: [
//   /*    new webpack.optimize.DedupePlugin(),
//       new webpack.optimize.OccurenceOrderPlugin(),*/
//       //new webpack.optimize.UglifyJsPlugin({ 
//               // options added here
//          //}),
//       //new ExtractTextPlugin('styles.css'),
//       new CleanWebpackPlugin(pathsToClean,cleanOptions),
//       new HtmlWebpackPlugin({
//         template: 'index.html'
//       })
//     //   new CopyWebpackPlugin([
//     //           { from: './content', to: './content' }
//     //       ])
//     ],
//     devServer: {
//       contentBase: path.resolve(__dirname, 'src'),
//       inline: true,
//       headers: {
//           'Access-Control-Allow-Origin': '*'
//       }
//     },
//     externals: {
//       '$': '$'
//     }
//   };

//const path = require('path');



// {
//     test: /\.css$/,
//     use: extractCSS.extract({
//     fallback: 'style-loader',
//     use: ['css-loader', 'url-loader', 'sass-loader']
//     })
// },