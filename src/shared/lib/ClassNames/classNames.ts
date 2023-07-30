export type Mods = Record<string, boolean | string | undefined>

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([classname]) => classname),
    ...additional.filter(Boolean)
  ].join(' ')
}
