export type BuildMode = 'development' | 'production'

export interface BuildPath {
  entry: string
  output: string
  html: string
  src: string
  locales: string
  buildLocales: string
}

export interface IBuildEnv {
  port: number
  mode: BuildMode
  apiUrl: string
}

export interface IBuildOptions {
  mode: BuildMode
  paths: BuildPath
  isDev: boolean
  port: number
  apiUrl: string
  project: 'storybook' | 'frontend' | 'jest'
}
