import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { ICONS } from 'shared/assets'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      data-testid='theme-switcher'
    >
      {theme === Theme.LIGHT ? <ICONS.ThemeLight /> : <ICONS.ThemeDark />}
    </Button>
  )
}
