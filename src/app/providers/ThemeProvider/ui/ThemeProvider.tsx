import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/LS_Constants'
import { ThemeContext } from '@/shared/context/ThemeContext'
import { Theme } from '@/shared/types/theme'
import React, { ReactNode, useMemo, useState } from 'react'

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}
const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props

  const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme, setTheme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
