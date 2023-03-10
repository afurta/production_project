import { BuildCssLoader } from './../webpack/loaders/BuildCssLoader'
import { BuildPath } from './../webpack/types/config'
import webpack, { RuleSetRule } from 'webpack'
import path from 'path'

export default ({config}:{config:webpack.Configuration})=>{

  const paths: BuildPath = {
    entry: '',
    output: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  config.module?.rules?.push(BuildCssLoader(true))
  
  config.module!.rules = config.module?.rules?.map((rule: RuleSetRule)=>{
    if (/svg/.test(rule.test as string)){
      return {...rule, exclude: /\.svg$/i}
    }
    return rule
  })

  config.module?.rules?.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  })
  return config
}
