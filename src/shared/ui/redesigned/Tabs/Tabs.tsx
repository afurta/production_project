import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './Tabs.module.scss'
import { Card } from '@/shared/ui/redesigned/Card'
import { Flex, FlexDirection } from '@/shared/ui/redesigned/Stack'

export interface TabItem {
  value: string
  content: ReactNode
}

export interface TabsProps {
  className?: string
  value?: string
  tabs: TabItem[]
  onTabClick: (tab: TabItem) => void
  direction?: FlexDirection
}

export const Tabs = (props: TabsProps) => {
  const { className, value, tabs, onTabClick, direction = 'row' } = props

  const clickHandel = (tab: TabItem) => () => onTabClick(tab)

  return (
    <Flex
      className={classNames(cls.tabs, {}, [className])}
      direction={direction}
      gap={8}
      align="start"
    >
      {tabs.length &&
        tabs.map((tab) => {
          const isSelected = tab.value === value
          return (
            <Card
              variant={isSelected ? 'light' : 'normal'}
              key={tab.value}
              onClick={clickHandel(tab)}
              border="round"
              className={classNames(cls.tabs, { [cls.selected]: isSelected })}
            >
              {tab.content}
            </Card>
          )
        })}
    </Flex>
  )
}
