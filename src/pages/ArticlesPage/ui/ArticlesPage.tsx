import { ArticleView } from 'entities/Article'
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('articlespage')


  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      <ArticleList
        articles={new Array(10).fill(0).map((_, index) => ({ ...article, id: String(index) }))}
        view={ArticleView.GRID}
      />
    </div>
  )
}

export default memo(ArticlesPage)
