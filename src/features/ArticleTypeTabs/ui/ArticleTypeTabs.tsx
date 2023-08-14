import { ArticleType } from '@/entities/Article'
import { useCallback, useMemo } from 'react'
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs'
import { ToggleFeature } from '@/shared/lib/features'
import { Tabs } from '@/shared/ui/redesigned/Tabs'

interface ArticleTypeTabsProps {
  className?: string
  value?: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { value, onChangeType } = props

  const typeTabs = useMemo<TabItem[]>(
    () => [
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
      }
    ],
    []
  )

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType)
    },
    [onChangeType]
  )

  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={
        <Tabs
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClick}
          direction="column"
        />
      }
      off={
        <TabsDeprecated tabs={typeTabs} value={value} onTabClick={onTabClick} />
      }
    />
  )
}
