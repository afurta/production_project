import { useTranslation } from 'react-i18next'
import { ArticleList } from '@/entities/Article'
import { UseArticleRecomendationsList } from '../api/recomendationsList'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize
} from '@/shared/ui/deprecated/Text'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { fetchRecomendationArticle } from '@/pages/ArticleDetailsPage'
import { ToggleFeature } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleRecomendationsListProps {
  className?: string
}

export const ArticleRecomendationsList = (
  props: ArticleRecomendationsListProps
) => {
  const { className } = props
  const { t } = useTranslation()
  const { data: articles, error, isLoading } = UseArticleRecomendationsList(3)
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchRecomendationArticle())
  })

  if (error || isLoading || !articles) {
    return (
      <ToggleFeature
        feature="isAppRedesigned"
        on={<Text title={'Статей нет'} align={TextAlign.LEFT} size="l" />}
        off={
          <TextDeprecated
            title={'Статей нет'}
            align={TextAlign.LEFT}
            size={TextSize.L}
          />
        }
      />
    )
  }

  return (
    <VStack
      gap={8}
      className={classNames('', {}, [className])}
      data-testid="ArticleRecomendationsList"
    >
      <ToggleFeature
        feature="isAppRedesigned"
        on={<Text title={'Рекомендуем'} align={TextAlign.LEFT} size="l" />}
        off={
          <TextDeprecated
            title={'Рекомендуем'}
            align={TextAlign.LEFT}
            size={TextSize.L}
          />
        }
      />
      <ArticleList isLoading={false} articles={articles} target={'_blank'} />
    </VStack>
  )
}
