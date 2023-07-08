import { useTheme } from '@/app/providers/ThemeProvider'
import { memo } from 'react'
import { ICONS } from '@/shared/assets'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Theme } from '@/shared/types/theme'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      data-testid='theme-switcher'
    >
      {theme === Theme.LIGHT ? <ICONS.ThemeLight /> : <ICONS.ThemeDark />}
    </Button>
  )
})
