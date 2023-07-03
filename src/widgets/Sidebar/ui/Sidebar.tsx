import { useMemo, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classnames'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher'
import { SidebarItems } from '@/widgets/Sidebar/types/SidebarItems'
import { SidebarItem } from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { VStack } from '@/shared/ui/Stack'

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
    <aside
      className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}
      data-testid='sidebar'
    >
      <VStack role={'navigation'} gap={16} className={classNames(cls.items, {}, [])}>
        {
          RenderSidebarItems
        }
      </VStack>
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
    </aside>
  )
}
