import { Configuration, DefinePlugin, RuleSetRule } from 'webpack'
import path from 'path'
import { buildCssLoader } from '../webpack/loaders/buildCssLoader'
import { BuildPath } from '../webpack/types/config'

export default {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false
      }
    },
    '@storybook/addon-interactions',
    'storybook-addon-themes',
    'storybook-addon-mock'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config: Configuration) => {
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
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }
      return rule
    })

    config.plugins?.push(
      new DefinePlugin({
        __IS_DEV: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook')
      })
    )

    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })

    config!.resolve!.alias = {
      ...config!.resolve!.alias,
      '@': paths.src
    }
    return config
  }
}
