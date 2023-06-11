import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './ArticleList.module.scss'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  isLoading?: boolean
  articles: Article[]
  view?: ArticleView
}

export const ArticleList: FC<ArticleListProps> = (props) => {
  const {
    isLoading,
    articles,
    view = ArticleView.GRID
  } = props

  const { t } = useTranslation()

  const renderArticles = (article: Article) => (
    <ArticleListItem article={article} view={view} key={article.id} />
  )

  if (isLoading) {
    return (
      <div className={classNames(cls.articleList, {}, [cls[view]])}>
        {
          new Array(view === ArticleView.GRID ? 9 : 3)
            .fill(0)
            .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />)
        }
      </div>
    )
  }
  return (
    <div className={classNames(cls.articleList, {}, [cls[view]])}>
      {
        articles.length > 0
          ? articles.map(renderArticles)
          : 'Статей нет'
      }
    </div>
  )
}
