import { getArticleDetailsData } from '@/entities/Article'
import { getArticlesEditRoute } from '@/shared/constants/router'
import { Card } from '@/shared/ui/redesigned/Card'
import { AdditionalInfo } from '@/widgets/AdditionalInfo'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import cls from './AdditionalInfoContainer.module.scss'

export const AdditionalInfoContainer = memo(() => {
  const navigate = useNavigate()
  const article = useSelector(getArticleDetailsData)

  const onEditArticle = useCallback(() => {
    if (article?.id) {
      navigate(getArticlesEditRoute(article.id))
    }
  }, [article?.id, navigate])

  if (!article) return null

  return (
    <Card className={cls.card} padding={24} border="round">
      <AdditionalInfo
        author={article.user}
        createdAt={article.createdAt}
        views={article.views}
        onClick={onEditArticle}
      />
    </Card>
  )
})
