import { RuleSetRule } from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { IBuildOptions } from './types/config'

export const buildLoaders = (options: IBuildOptions):RuleSetRule[] => {
  const {isDev} = options

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const cssLoader = buildCssLoader(isDev)

  const fileLoader =  {
    test: /\.(png|jpe?g|gif,woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const codebabelLoader = buildBabelLoader({...options, isTsx:false})
  const tscCodebabelLoader = buildBabelLoader({...options, isTsx:true})

  return [
    fileLoader,
    svgLoader,
    codebabelLoader,
    tscCodebabelLoader,
    cssLoader
  ]
}
