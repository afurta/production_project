import { useTheme } from '@/app/providers/ThemeProvider'
import { saveJsonSettings } from '@/entities/User'
import { ICONS } from '@/shared/assets'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Theme } from '@/shared/types/theme'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { memo, useCallback } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const onToggleTheme = useCallback(() => {
    toggleTheme((newTheme: Theme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={onToggleTheme}
      data-testid="theme-switcher"
    >
      <Icon Icon={ICONS.ThemeDark} width={40} height={40} inverted />
    </Button>
  )
})
