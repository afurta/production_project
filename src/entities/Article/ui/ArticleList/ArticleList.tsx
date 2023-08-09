import { FC, HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { Article } from '../../model/types/article'
import { ArticleView } from '../../model/consts'

interface ArticleListProps {
  className?: string
  isLoading?: boolean
  articles: Article[]
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleList: FC<ArticleListProps> = (props) => {
  const {
    className,
    isLoading,
    articles,
    view = ArticleView.GRID,
    target
  } = props

  const { t } = useTranslation()

  const renderArticles = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
      target={target}
    />
  )

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [cls[view]])}>
        <Text size={TextSize.L} title={'Статей нет'} />
      </div>
    )
  }
  return (
    <div
      className={classNames(cls.articleList, {}, [cls[view], className])}
      data-testid="ArticleList"
    >
      {
        articles.length > 0 && articles.map(renderArticles)
        // : 'Статей нет'
      }
      {isLoading && (
        <div className={classNames(cls.articleList, {}, [cls[view]])}>
          {new Array(view === ArticleView.GRID ? 9 : 3)
            .fill(0)
            .map((_, index) => (
              <ArticleListItemSkeleton key={index} view={view} />
            ))}
        </div>
      )}
    </div>
  )
}
