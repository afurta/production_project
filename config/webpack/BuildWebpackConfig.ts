import { BuildPlugins } from './BuildPlugins'
import { BuildResolves } from './BuildResolves'
import { BuildLoaders } from './BuildLoaders'
import { IBuildOptions } from './types/config'
import { BuildDevServer } from './BuildDevServer'

export const buildWebpackConfig = (options: IBuildOptions)=>{
  const { mode, paths, port, isDev } = options
  
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    resolve: BuildResolves(options),
    module: {
      rules: BuildLoaders(options)
    },
    plugins: BuildPlugins(paths),
    devServer: isDev ? BuildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
  }
}
