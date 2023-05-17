import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { WebpackPluginInstance } from 'webpack'
import {  IBuildOptions } from './types/config'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export const BuildPlugins = ({paths, isDev, apiUrl}:IBuildOptions):WebpackPluginInstance[] => {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV: JSON.stringify('true'),
      __API__: JSON.stringify(apiUrl),
    }),
    new ReactRefreshWebpackPlugin(),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: isDev ? 'server' : 'disabled'
    // })
  ]
}
