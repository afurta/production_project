import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList'
import { CommentForm } from 'features/AddComment'
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/service/sendCommentForArticle/sendCommentForArticle'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classnames'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { getArticleDetailsCommentError, getArticleDetailsCommentLoading } from '../model/selectors/comments'
import { fetchCommentsArticleById } from './../model/service/commentsArticleById/commentsArticleById'
import { ArticleDetailsCommentReducer, getCommentsSelectors } from './../model/slice/ArticleDetailsCommentSlice'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const initialReducers: ReducerList = {
  ArticleDetailsComment: ArticleDetailsCommentReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article_details')
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const comments = useSelector(getCommentsSelectors.selectAll)
  const isLoading = useSelector(getArticleDetailsCommentLoading)
  const error = useSelector(getArticleDetailsCommentError)

  const onSendComment = useCallback((value: string) => {
    dispatch(addCommentForArticle(value))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id))
  })


  if (!id) {
    return <Text text={t('Статья не найдена')} theme={TextTheme.ERROR} />
  }
  if (error) {
    return <Text text={t('Ошибка')} theme={TextTheme.ERROR} />
  }


  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount>
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={'Комментарии'} align={TextAlign.LEFT} />
        <CommentForm onSendComment={onSendComment} />
        <CommentList data={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
