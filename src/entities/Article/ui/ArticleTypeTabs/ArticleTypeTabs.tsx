import { ArticleType } from 'entities/Article'
import { useCallback, useMemo } from 'react'
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs'

interface ArticleTypeTabsProps {
  className?: string
  value?: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { value, onChangeType } = props

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.IT,
      content: 'IT'
    },
    {
      value: ArticleType.ECONOMICS,
      content: 'Экономика'
    },
    {
      value: ArticleType.SCIENCE,
      content: 'Наука'
    },
    {
      value: ArticleType.ALL,
      content: 'Все статьи'
    },
  ], [])


  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])

  return (
    <Tabs tabs={typeTabs} value={value} onTabClick={onTabClick} />
  )
}
