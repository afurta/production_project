import { classNames } from '@/shared/lib/classNames/classNames'
import { Card, CardTheme } from '@/shared/ui/deprecated/Card'
import { ReactNode } from 'react'
import cls from './Tabs.module.scss'

export interface TabItem {
  value: string
  content: ReactNode
}

export interface TabsProps {
  className?: string
  value?: string
  tabs: TabItem[]
  onTabClick: (tab: TabItem) => void
}

/**
 * @deprecated
 */
export const Tabs = (props: TabsProps) => {
  const { className, value, tabs, onTabClick } = props

  const clickHandel = (tab: TabItem) => () => onTabClick(tab)

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.length &&
        tabs.map((tab) => (
          <Card
            theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
            key={tab.value}
            onClick={clickHandel(tab)}
          >
            {tab.content}
          </Card>
        ))}
    </div>
  )
}
