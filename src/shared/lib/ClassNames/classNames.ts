type Mods = Record<string, boolean | string>

export const classNames = (cls:string, mods?: Mods, additional?:string[]):any =>{
  return(
    [
      cls, 
      ...Object.entries(mods)
      .filter(([ _,value]) => Boolean(value))
      .map(([classname]) => classname),
      ...additional.filter(Boolean)
    ].join(' ')

  )
}

