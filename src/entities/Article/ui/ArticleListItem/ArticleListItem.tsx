import { HTMLAttributeAnchorTarget } from 'react'
import { ArticleView } from '../../model/consts'
import { Article } from '../../model/types/article'
import { ToggleFeature } from '@/shared/lib/features'
import { ArticleListItemDeprecated } from './ui/ArticleListItemDeprecated/ArticleListItemDeprecated'
import { ArticleListItemRedesigned } from './ui/ArticleListItemRedesigned/ArticleListItemRedesigned'

export interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = (props: ArticleListItemProps) => {
  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={<ArticleListItemRedesigned {...props} />}
      off={<ArticleListItemDeprecated {...props} />}
    />
  )
}
