import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList'
import { CommentForm } from 'features/AddComment'
import { ArticleRecomendationsList } from 'features/ArticleRecomendationsList'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classnames'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { VStack } from 'shared/ui/Stack'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page/Page'
import { getArticleDetailsCommentError, getArticleDetailsCommentLoading } from '../../model/selectors/comments'
import { fetchRecomendationArticle } from '../../model/service/fetchRecomendationArticle/fetchRecomendationArticle'
import { addCommentForArticle } from '../../model/service/sendCommentForArticle/sendCommentForArticle'
import { ArticleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { fetchCommentsArticleById } from './../../model/service/commentsArticleById/commentsArticleById'
import { getCommentsSelectors } from './../../model/slice/ArticleDetailsCommentSlice'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleAddCommentForm } from 'pages/ArticleDetailsPage/ui/ArticleAddCommentForm/ArticleAddCommentForm'

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
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id))
    dispatch(fetchRecomendationArticle())
  })

  if (!id) {
    return <Text text={t('Статья не найдена')} theme={TextTheme.ERROR} />
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <VStack gap={16}>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecomendationsList />
          <ArticleAddCommentForm />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
