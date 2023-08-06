import { useJsonSettings } from '@/entities/User'
import { ThemeContext } from '@/shared/context/ThemeContext'
import { Theme } from '@/shared/types/theme'
import React, { ReactNode, useEffect, useMemo, useState } from 'react'

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props

  const { theme: defaultTheme } = useJsonSettings()

  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.LIGHT
  )
  const [isThemeInited, setIsThemeInited] = useState(false)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme, setTheme]
  )

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme)
      setIsThemeInited(true)
    }
  }, [defaultTheme, isThemeInited])
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
