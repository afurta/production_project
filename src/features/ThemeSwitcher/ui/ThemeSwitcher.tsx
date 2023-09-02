import { useTheme } from '@/app/providers/ThemeProvider'
import { saveJsonSettings } from '@/entities/User'
import { ICONS, ICONS_NEW } from '@/shared/assets'
import { ToggleFeature } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Theme } from '@/shared/types/theme'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { memo, useCallback } from 'react'
import cls from './ThemeSwitcher.module.scss'

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
    <ToggleFeature
      feature={'isAppRedesigned'}
      on={<Icon Svg={ICONS_NEW.Theme} onClick={onToggleTheme} clickable />}
      off={
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onToggleTheme}
          data-testid="theme-switcher"
        >
          <IconDeprecated
            className={cls.icon}
            Svg={ICONS.ThemeDark}
            width={40}
            height={40}
          />
        </Button>
      }
    />
  )
})
