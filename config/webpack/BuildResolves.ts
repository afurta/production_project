import { IBuildOptions } from './types/config';
import { ResolveOptions } from "webpack"

export const BuildResolves = (options:IBuildOptions):ResolveOptions  => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}