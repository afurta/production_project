import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import webpack, { WebpackPluginInstance } from 'webpack'
import { IBuildOptions } from './types/config'

export const buildPlugins = ({paths, project, apiUrl, isDev}:IBuildOptions):WebpackPluginInstance[] => {
  const plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: paths.html }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV: JSON.stringify('true'),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'server'
    // })
  ]

  const isProd = !isDev
  
  if (isProd){
    plugins.push(new MiniCssExtractPlugin({filename: 'css/[name].[contenthash:8].css',chunkFilename: 'css/[name].[contenthash:8].css'}))
  }

  if (isDev){
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new CopyPlugin({patterns: [{ from: paths.locales, to: paths.buildLocales },],}))
  }

  return plugins
}
