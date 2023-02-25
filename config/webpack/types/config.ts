export type BuildMode =  'development' | 'production'

export interface BuildPath{
  entry: string
  output: string
  html: string
  src: string
}

export interface IBuildEnv{
  port: number
  mode: BuildMode
}

export interface IBuildOptions{
  mode: BuildMode
  paths: BuildPath
  isDev: boolean
  port: number
}
