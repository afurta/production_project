import { BuildPlugins } from "./BuildPlugins";
import { BuildResolves } from "./BuildResolves";
import { BuildLoaders } from "./BuildLoaders";
import { IBuildOptions } from "./types/config";
import { BuildDevServer } from "./BuildDevServer";

export const buildWebpackConfig = (options: IBuildOptions)=>{
  const { mode, path, port, isDev } = options
  
  return{
    mode,
    entry: path.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: path.output,
      clean: true,
    },
    resolve: BuildResolves(),
    module: {
      rules: BuildLoaders(options)
    },
    plugins: BuildPlugins(path),
    devServer: isDev ? BuildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
  }
}
