import { LanguageSwitcher } from '@/features/LanguageSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { ICONS_NEW } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeature } from '@/shared/lib/features'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { SidebarItem } from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem'
import { useMemo, useState } from 'react'
import { useSidebarItems } from '../selectors/getSidebarItems'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setCollapes] = useState<boolean>(false)
  const sidebarItemsList = useSidebarItems()

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
            { [cls.collapsedRedesigned]: isCollapsed },
            [className]
          )}
          data-testid="sidebar"
        >
          <AppLogo className={cls.appLogo} size={isCollapsed ? 20 : 50} />
          <VStack
            role={'navigation'}
            gap={16}
            className={classNames(cls.itemsRedesigned, {}, [])}
            align="start"
          >
            {RenderSidebarItems}
          </VStack>
          <Icon
            Svg={ICONS_NEW.Arrow}
            onClick={() => collapsedHandler()}
            className={cls.collapseBtnRedesigned}
            clickable
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher className={cls.lang} isShorten={isCollapsed} />
          </div>
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
