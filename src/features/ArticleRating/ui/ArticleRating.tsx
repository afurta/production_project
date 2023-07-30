import { RatingCard } from '@/entities/RatingCard'
import { getUserAuthData } from '@/entities/User'
import {
  UseGetArticleRating,
  UseSendArticleRating
} from '@/features/ArticleRating'
import { Skeleton } from '@/shared/ui/Skeleton'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

export interface ArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating = (props: ArticleRatingProps) => {
  const { articleId } = props
  const { t } = useTranslation()
  const userData = useSelector(getUserAuthData)

  const { data, isLoading } = UseGetArticleRating({
    articleId,
    userId: userData?.id ?? ''
  })
  const [rateArticleMutation] = UseSendArticleRating()

  const handelRateArticle = useCallback(
    (starCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? '',
          articleId,
          rate: starCount,
          feedback
        })
      } catch (e) {
        console.log(e)
      }
    },
    [articleId, rateArticleMutation, userData?.id]
  )

  const onCancel = useCallback(
    (starCount: number) => {
      handelRateArticle(starCount, '')
    },
    [handelRateArticle]
  )

  const onAccept = useCallback(
    (starCount: number) => {
      handelRateArticle(starCount)
    },
    [handelRateArticle]
  )

  if (isLoading) return <Skeleton width={'100%'} height={'120px'} />

  const rating = data?.[0]

  return (
    <RatingCard
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте отзыв')}
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      hasFeedback
    />
  )
}

export default ArticleRating
