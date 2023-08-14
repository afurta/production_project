import { ArticleViewsSelector } from '@/features/ArticleViewsSelector'
import { useArticleFilters } from '@/pages/ArticlesPage/lib/hooks/useArticleFilters'
import { memo } from 'react'

interface ViewSelectorContainerProps {
  className?: string
}

export const ViewSelectorContainer = memo(
  (props: ViewSelectorContainerProps) => {
    const { className } = props

    const { view, onChangeView } = useArticleFilters()

    return (
      <ArticleViewsSelector
        className={className}
        view={view}
        onViewClick={onChangeView}
      />
    )
  }
)
