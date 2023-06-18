import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/RouterConfig'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './ArticleDetailsPageHeader.module.scss'
import { getArticleDetailsData } from 'entities/Article'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation()
  const navigate = useNavigate()

  const isCanEditArticle = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const onBackTotList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(RoutePath.articles + article?.id + '/edit')
    navigate(`${RoutePath.articles}/${article?.id}/edit`)
  }, [article?.id, navigate])

  return (
    <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onBackTotList}
      >
        {t('Назад к списку')}
      </Button>
      {isCanEditArticle && (
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onEditArticle}
          className={classNames(cls.editBtn)}
        >
          {t('Редактировать')}
        </Button>
      )}
    </div>
  )
}
