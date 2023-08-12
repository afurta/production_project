import { getArticleDetailsData } from '@/entities/Article/model/selectors/getArticleDetailsData'
import { getCanEditArticle } from '@/pages/ArticleDetailsPage/model/selectors/article'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  getArticlesEditRoute,
  getArticlesRoute
} from '@/shared/constants/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = (
  props: ArticleDetailsPageHeaderProps
) => {
  const { className } = props
  const { t } = useTranslation()
  const navigate = useNavigate()

  const isCanEditArticle = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const onBackTotList = useCallback(() => {
    navigate(getArticlesRoute())
  }, [navigate])

  const onEditArticle = useCallback(() => {
    if (article?.id) {
      navigate(getArticlesEditRoute(article.id))
    }
  }, [article?.id, navigate])

  return (
    <HStack justify="between" className={classNames('', {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackTotList}>
        {t('Назад к списку')}
      </Button>
      {isCanEditArticle && (
        <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
          {t('Редактировать')}
        </Button>
      )}
    </HStack>
  )
}
