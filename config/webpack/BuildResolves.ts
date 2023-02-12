import { ResolveOptions } from "webpack"

export const BuildResolves = ():ResolveOptions  => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}