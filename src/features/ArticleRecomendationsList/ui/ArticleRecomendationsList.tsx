import { useTranslation } from 'react-i18next'
import { ArticleList } from 'entities/Article'
import { UseArticleRecomendationsList } from '../api/recomendationsList'
import { classNames } from 'shared/lib/classNames/classnames'
import { VStack } from 'shared/ui/Stack'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'

interface ArticleRecomendationsListProps {
  className?: string
}

export const ArticleRecomendationsList = (props: ArticleRecomendationsListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { data: articles, error, isLoading } = UseArticleRecomendationsList(3)

  if (error || isLoading || !articles) {
    return <Text title={'Статей нет'} align={TextAlign.LEFT} size={TextSize.L} />
  }

  return (
    <VStack gap={8} className={classNames('', {}, [className])}>
      <Text title={'Рекомендуем'} align={TextAlign.LEFT} size={TextSize.L} />
      <ArticleList
        isLoading={false}
        articles={articles}
        target={'_blank'}
      />
    </VStack>
  )
}
