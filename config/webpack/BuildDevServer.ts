import { IBuildOptions } from './types/config'

export const buildDevServer = (options: IBuildOptions) => {
  return {
    open: true,
    port: options.port,
    historyApiFallback: true,
    hot: true
  }
}
