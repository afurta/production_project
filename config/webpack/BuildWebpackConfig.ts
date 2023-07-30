import webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildResolves } from './buildResolves'
import { buildLoaders } from './buildLoaders'
import { IBuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import webpackDevServer from 'webpack-dev-server'

export function buildWebpackConfig(
  options: IBuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
      publicPath: '/'
    },
    resolve: buildResolves(options),
    module: {
      rules: buildLoaders(options)
    },
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined
  }
}
