import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapes] = useState<boolean>(false)

  const collapsedHandler = () => setCollapes(prev => !prev)

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      data-testid='sidebar'
    >
      <Button
        theme={ThemeButton.CLEAR}
        onClick={() => collapsedHandler()}
        data-testid='sidebar-btn'
      >
        collapsed
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} />
      </div>
    </div>
  )
}
