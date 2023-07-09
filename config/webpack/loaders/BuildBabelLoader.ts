import { IBuildOptions } from '../types/config'
import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin'

interface IbuildBabelLoader extends IBuildOptions{
  isTsx: boolean
}

export function buildBabelLoader ({isTsx, isDev}:IbuildBabelLoader) {
  const isProd = !isDev

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true, 
        presets: ['@babel/preset-env'],
        plugins: [
          ['@babel/plugin-transform-typescript', { isTsx }, ],
          '@babel/plugin-transform-runtime', 
          isProd && isTsx && [ babelRemovePropsPlugin, { props: ['data-testid'], },
          ],
        ].filter(Boolean),
      },
    }
  }
}
