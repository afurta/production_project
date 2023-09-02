import ThemeProvider from './ThemeProvider'
import { useJsonSettings } from '@/entities/User'
import React from 'react'

export const withTheme = (Component: React.ComponentType) => {
  return () => {
    const { theme: defaultTheme } = useJsonSettings()
    return (
      <ThemeProvider initialTheme={defaultTheme}>
        <Component />
      </ThemeProvider>
    )
  }
}
