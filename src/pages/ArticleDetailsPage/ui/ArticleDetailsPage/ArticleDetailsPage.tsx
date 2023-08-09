import { ArticleDetails } from '@/entities/Article'
import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecomendationsList } from '@/features/ArticleRecomendationsList'
import { ArticleAddCommentForm } from '@/pages/ArticleDetailsPage/ui/ArticleAddCommentForm/ArticleAddCommentForm'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeature } from '@/shared/lib/features'
import { Card } from '@/shared/ui/deprecated/Card'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { Page } from '@/widgets/Page'
import { Suspense, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const initialReducers: ReducerList = {
  ArticlesDetailsPage: ArticleDetailsPageReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article_details')
  const { className } = props
  const { id } = useParams<{ id: string }>()

  if (!id) return null

  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount>
      <Page
        className={classNames(cls.articleDetailsPage, {}, [className])}
        data-testid="ArticleDetailsPage"
      >
        <VStack gap={16}>
          <ArticleDetailsPageHeader />
          <Suspense fallback={<Loader />}>
            <ArticleDetails id={id} />
          </Suspense>
          <ArticleRecomendationsList />
          <ToggleFeature
            feature={'isArticleRatingEnabled'}
            on={<ArticleRating articleId={id} />}
            off={<Card>{t('Рейтинг появится позже')}</Card>}
          />
          <ArticleAddCommentForm id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
