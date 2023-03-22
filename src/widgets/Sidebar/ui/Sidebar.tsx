import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ICONS } from 'shared/assets'
import { classNames } from 'shared/lib/classNames/classnames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation()
  const [isCollapsed, setCollapes] = useState<boolean>(false)

  const collapsedHandler = () => setCollapes(prev => !prev)

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}
      data-testid='sidebar'
    >
      <div className={classNames(cls.items, {}, [])}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
          className={cls.item}
        >
          <ICONS.Main class={classNames(cls.icon, {}, [])} />
          <span className={classNames(cls.link, {}, [])}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/about'}
        >
          <ICONS.AboutUs class={classNames(cls.icon, {}, [])} />
          <span className={classNames(cls.link, {}, [])}>{t('О сайте')}</span>
        </AppLink>
      </div>
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={() => collapsedHandler()}
        data-testid='sidebar-btn'
        className={cls.collapseBtn}
        square
        size={ButtonSize.L}
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} isShorten={isCollapsed} />
      </div>
    </div>
  )
}
