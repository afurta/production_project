import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { ICONS } from 'shared/assets'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <ICONS.ThemeLight /> : <ICONS.ThemeDark />}
    </Button>
  )
}
