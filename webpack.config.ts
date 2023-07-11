import webpack from 'webpack'
import path from 'path'
import { BuildPath, IBuildEnv } from './config/webpack/types/config'
import { buildWebpackConfig } from './config/webpack/BuildWebpackConfig'

export default (env:IBuildEnv) => {
  const webpackPath:BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: './public/index.html',
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales')
  }

  const mode = env.mode || 'development'
  const port = env.port || 3000
  const apiUrl = env.apiUrl || 'http://localhost:8000'

  const isDev = mode === 'development'

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths: webpackPath,
    isDev,
    port,
    apiUrl,
    project: 'frontend'
  })

  return config
}
