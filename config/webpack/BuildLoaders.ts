import { RuleSetRule } from 'webpack'
import { IBuildOptions } from './types/config'

export const BuildLoaders = (options: IBuildOptions):RuleSetRule[] => {
  const {isDev} = options

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = BuildCssLoader(isDev)

  const fileLoader =  {
    test: /\.(png|jpe?g|gif,woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const babelLoader = BuildBabelLoader()

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    cssLoader
  ]
}
