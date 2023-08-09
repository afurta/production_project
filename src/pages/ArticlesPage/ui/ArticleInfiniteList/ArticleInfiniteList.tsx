import { ArticleList } from '@/entities/Article'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getArticlePageError,
  getArticlePageLoading,
  getArticlePageView
} from '../../model/selectors/articlesPageSelectors'
import { getArticles } from '../../model/slice/articlesPageSlice'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text'

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const articles = useSelector(getArticles.selectAll)
  const error = useSelector(getArticlePageError)
  const isLoading = useSelector(getArticlePageLoading)
  const view = useSelector(getArticlePageView)

  if (error) {
    return (
      <VStack>
        <Text
          title={t('Произошла ошибка при данных')}
          text={t('Попробуйте обновить страницу')}
          theme={TextTheme.ERROR}
          align={TextAlign.LEFT}
        />
      </VStack>
    )
  }

  return <ArticleList articles={articles} view={view} isLoading={isLoading} />
}
