import { RuleSetRule } from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { IBuildOptions } from './types/config'

export const buildLoaders = (options: IBuildOptions): RuleSetRule[] => {
  const { isDev } = options

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true
                }
              }
            ]
          }
        }
      }
    ]
  }

  // const svgLoader = {
  //   test: /\.svg$/i,
  //   issuer: /\.[jt]sx?$/,
  //   use: ['@svgr/webpack']
  // }

  const cssLoader = buildCssLoader(isDev)

  const fileLoader = {
    test: /\.(png|jpe?g|gif,woff2)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const workerLoader = {
    test: /service\.worker\.ts$/i,
    use: 'ts-loader',
    type: 'asset/resource',
    generator: {
      filename: 'sw.js'
    }
  }

  const codebabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const tscCodebabelLoader = buildBabelLoader({ ...options, isTsx: true })

  return [
    fileLoader,
    svgLoader,
    tscCodebabelLoader,
    cssLoader,
    workerLoader,
    codebabelLoader
  ]
}
