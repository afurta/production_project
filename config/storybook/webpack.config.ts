import { buildCssLoader } from './../webpack/loaders/buildCssLoader'
import { BuildPath } from './../webpack/types/config'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import path from 'path'

export default ({config}:{config:webpack.Configuration})=>{

  const paths: BuildPath = {
    entry: '',
    output: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: ''
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  config.module?.rules?.push(buildCssLoader(true))
  
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  config.module!.rules = config.module!.rules!.map((rule: RuleSetRule )=>{
    if (/svg/.test(rule.test as string)){
      return {...rule, exclude: /\.svg$/i}
    }
    return rule
  })

  config.plugins?.push(new DefinePlugin({
    __IS_DEV: JSON.stringify(true),
    __API__: JSON.stringify('https://testapi.ru'),
    __PROJECT__: JSON.stringify('storybook'),
  }))

  config.module?.rules?.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  })
  return config
}
