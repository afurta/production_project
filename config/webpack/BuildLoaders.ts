import { RuleSetRule } from 'webpack'
import { BuildCssLoader } from './loaders/buildCssLoader'
import { IBuildOptions } from './types/config'

export const BuildLoaders = ({isDev}: IBuildOptions):RuleSetRule[] => {

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

  const babelLoader =   {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: 'defaults' }]
        ]
      }
    }
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    cssLoader
  ]
}
