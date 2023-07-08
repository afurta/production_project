import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classnames'
import cls from './Tabs.module.scss'
import { Card, CardTheme } from '@/shared/ui/Card'

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

export const Tabs = (props: TabsProps) => {
  const {
    className,
    value,
    tabs,
    onTabClick
  } = props
  const { t } = useTranslation()

  const clickHandel = (tab: TabItem) => () => onTabClick(tab)

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.length && tabs.map(tab => (
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
