const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Входной файл
  entry: [
    './src/index.js'
  ],

  // Выходной файл
  output: {
    filename: './assets/js/bundle.js'
  },

  // Source maps для удобства отладки
  devtool: "source-map",

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            // loader: 'file-loader?name=./assets/fonts/[name].[ext]'
            options: {
              name: '[name].[ext]',
              outputPath: './assets/fonts',
              publicPath: '../../assets/fonts',
            },
          },
        ]
      },

      // Подключаем картинки из css
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            // loader: 'file-loader?name=./static/[name].[ext]',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/static',
              publicPath: '../../assets/static/',
            },
          },
        ]
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       name: '[name].[ext]',
        //       outputPath: './static/',
        //       publicPath: '../',
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Макет из «Блока 1.6»',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css',
    }),

    // Копируем картинки
    new CopyWebpackPlugin([
      {
        from: './src/assets/img',
        to: 'assets/img',
      },
    ])
  ],
};
