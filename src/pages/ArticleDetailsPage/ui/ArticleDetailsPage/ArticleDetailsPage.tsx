import { ArticleDetails, ArticleList } from 'entities/Article'
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList'
import { CommentForm } from 'features/AddComment'
import { ArticleDetailsPageHeader } from '../../ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classnames'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page/Page'
import { getArticleDetailsCommentError, getArticleDetailsCommentLoading } from '../../model/selectors/comments'
import { getArticleDetailsRecomendationsError, getArticleDetailsRecomendationsLoading } from '../../model/selectors/recomendations'
import { fetchRecomendationArticle } from '../../model/service/fetchRecomendationArticle/fetchRecomendationArticle'
import { addCommentForArticle } from '../../model/service/sendCommentForArticle/sendCommentForArticle'
import { ArticleDetailsPageReducer } from '../../model/slice'
import { getRecomendationsArticleSelectors } from '../../model/slice/ArticleDetailsRecomendations'
import { fetchCommentsArticleById } from './../../model/service/commentsArticleById/commentsArticleById'
import { getCommentsSelectors } from './../../model/slice/ArticleDetailsCommentSlice'
import cls from './ArticleDetailsPage.module.scss'
import { VStack } from 'shared/ui/Stack'

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

  const comments = useSelector(getCommentsSelectors.selectAll)
  const isLoading = useSelector(getArticleDetailsCommentLoading)
  const error = useSelector(getArticleDetailsCommentError)

  const recomendations = useSelector(getRecomendationsArticleSelectors.selectAll)
  const recomendationsIsLoading = useSelector(getArticleDetailsRecomendationsLoading)
  // const recomendationsError = useSelector(getArticleDetailsRecomendationsError)

  const onSendComment = useCallback((value: string) => {
    dispatch(addCommentForArticle(value))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id))
    dispatch(fetchRecomendationArticle())
  })

  if (!id) {
    return <Text text={t('Статья не найдена')} theme={TextTheme.ERROR} />
  }
  if (error) {
    return <Text text={t('Ошибка')} theme={TextTheme.ERROR} />
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <VStack gap={16}>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <Text title={'Рекомендуем'} align={TextAlign.LEFT} size={TextSize.L} />
          <ArticleList
            isLoading={recomendationsIsLoading}
            articles={recomendations}
            className={classNames(cls.recomendationsList)}
            target={'_blank'}
          />
          <Text title={'Комментарии'} align={TextAlign.LEFT} />
          <CommentForm onSendComment={onSendComment} />
          <CommentList data={comments} isLoading={isLoading} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
