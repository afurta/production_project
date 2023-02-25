import { useState } from 'react'
import { classNames } from 'shared/lib/ClassNames/classNames'
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
    >
      <Button
        theme={ThemeButton.CLEAR}
        onClick={() => collapsedHandler()}
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
