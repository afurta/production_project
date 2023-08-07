import { useMemo, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { LanguageSwitcher } from '@/features/LanguageSwitcher'
import { SidebarItem } from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { VStack } from '@/shared/ui/Stack'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../selectors/getSidebarItems'
import { ToggleFeature } from '@/shared/lib/features'
import { AppLogo } from '@/shared/ui/AppLogo'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setCollapes] = useState<boolean>(false)
  const sidebarItemsList = useSelector(getSidebarItems)

  const collapsedHandler = () => setCollapes((prev) => !prev)

  const RenderSidebarItems = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} key={item.path} collapsed={isCollapsed} />
      )),
    [isCollapsed, sidebarItemsList]
  )

  return (
    <ToggleFeature
      feature={'isAppRedesigned'}
      on={
        <aside
          className={classNames(
            cls.SidebarRedesigned,
            { [cls.collapsed]: isCollapsed },
            [className]
          )}
          data-testid="sidebar"
        >
          <AppLogo className={cls.appLogo} />
        </aside>
      }
      off={
        <aside
          className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
            className
          ])}
          data-testid="sidebar"
        >
          <VStack
            role={'navigation'}
            gap={16}
            className={classNames(cls.items, {}, [])}
          >
            {RenderSidebarItems}
          </VStack>
          <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={() => collapsedHandler()}
            data-testid="sidebar-btn"
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
        </aside>
      }
    />
  )
}
