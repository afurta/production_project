import { useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { SidebarItems } from 'widgets/Sidebar/types/SidebarItems'
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setCollapes] = useState<boolean>(false)

  const collapsedHandler = () => setCollapes(prev => !prev)

  const RenderSidebarItems = useMemo(() => SidebarItems.map(item => (
    <SidebarItem item={item} key={item.path} collapsed={isCollapsed} />
  )), [isCollapsed])

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}
      data-testid='sidebar'
    >
      <div className={classNames(cls.items, {}, [])}>
        {
          RenderSidebarItems
        }
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
