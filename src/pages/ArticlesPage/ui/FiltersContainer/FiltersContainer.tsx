import { ArticlesFilters } from '@/widgets/ArticlesFilters'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

interface FiltersContainerProps {
  className?: string
}

export const FiltersContainer = (props: FiltersContainerProps) => {
  const { className } = props

  const {
    search,
    sort,
    order,
    type,
    onChangeSearch,
    onChangeSortField,
    onChangeSortOrder,
    onChangeType
  } = useArticleFilters()

  return (
    <ArticlesFilters
      className={className}
      search={search}
      sort={sort}
      order={order}
      type={type}
      onChangeSearch={onChangeSearch}
      onChangeSort={onChangeSortField}
      onChangeOrder={onChangeSortOrder}
      onChangeType={onChangeType}
    />
  )
}
