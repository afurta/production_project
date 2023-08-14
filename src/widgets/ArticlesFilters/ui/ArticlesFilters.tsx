import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticlesFilters.module.scss'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { Input } from '@/shared/ui/redesigned/Input'
import { Card } from '@/shared/ui/redesigned/Card'
import { SortOrder } from '@/shared/types/sort'
import { ArticleSortFields, ArticleType } from '@/entities/Article'

interface ArticlesFiltersProps {
  className?: string
  sort: ArticleSortFields
  order: SortOrder
  type: ArticleType
  search: string | number
  onChangeSearch?: (value: string) => void
  onChangeOrder: (SortOrder: SortOrder) => void
  onChangeSort: (SortField: ArticleSortFields) => void
  onChangeType: (type: ArticleType) => void
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = (props) => {
  const {
    className,
    sort,
    order,
    type,
    search,
    onChangeSearch,
    onChangeOrder,
    onChangeSort,
    onChangeType
  } = props

  const { t } = useTranslation()

  return (
    <Card
      className={classNames(cls.articlesFilters, {}, [className])}
      padding={24}
    >
      <VStack gap={32} align="start">
        <Input placeholder="Поиск" value={search} onChange={onChangeSearch} />
        <ArticleTypeTabs
          onChangeType={onChangeType}
          value={type}
          className={classNames(cls.articleTypeTabs)}
        />
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSortField={onChangeSort}
          onChangeSortOrder={onChangeOrder}
        />
      </VStack>
    </Card>
  )
}
