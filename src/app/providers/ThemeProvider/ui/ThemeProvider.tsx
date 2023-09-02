import { useJsonSettings } from '@/entities/User'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/LS_Constants'
import { ThemeContext } from '@/shared/context/ThemeContext'
import { Theme } from '@/shared/types/theme'
import React, { ReactNode, useEffect, useMemo, useState } from 'react'

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props

  const [theme, setTheme] = useState<Theme>(
    initialTheme || fallbackTheme || Theme.LIGHT
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
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme)
      setIsThemeInited(true)
    }
  }, [initialTheme, isThemeInited])

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
