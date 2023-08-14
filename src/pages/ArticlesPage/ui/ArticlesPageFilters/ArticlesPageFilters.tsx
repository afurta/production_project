import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { ArticleViewsSelector } from '@/features/ArticleViewsSelector'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'
import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
  const { className } = props

  const {
    view,
    search,
    sort,
    order,
    type,
    onChangeView,
    onChangeSearch,
    onChangeSortField,
    onChangeSortOrder,
    onChangeType
  } = useArticleFilters()

  return (
    <div
      className={classNames(cls.articlesPageFilters, {}, [className])}
      data-testid="ArticlesPageFilters"
    >
      <div className={classNames(cls.sortWrapper)}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSortField={onChangeSortField}
          onChangeSortOrder={onChangeSortOrder}
        />
        <ArticleViewsSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={classNames(cls.searchInputContainer)}>
        <Input placeholder="Поиск" value={search} onChange={onChangeSearch} />
      </Card>
      <ArticleTypeTabs
        onChangeType={onChangeType}
        value={type}
        className={classNames(cls.articleTypeTabs)}
      />
    </div>
  )
}
