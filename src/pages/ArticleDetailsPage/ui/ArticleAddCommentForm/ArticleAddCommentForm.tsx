import { CommentList } from '@/entities/Comment/ui/CommentList/CommentList'
import { CommentForm } from '@/features/AddComment'
import { Suspense, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text'
import { getArticleDetailsCommentError, getArticleDetailsCommentLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/service/sendCommentForArticle/sendCommentForArticle'
import { getCommentsSelectors } from '../../model/slice/ArticleDetailsCommentSlice'
import { fetchCommentsArticleById } from '../../model/service/commentsArticleById/commentsArticleById'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { Loader } from '@/shared/ui/Loader/Loader'

interface ArticleAddCommentFormProps {
  className?: string
  id?: string | undefined
}

export const ArticleAddCommentForm = (props: ArticleAddCommentFormProps) => {
  const { className, id } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const comments = useSelector(getCommentsSelectors.selectAll)
  const isLoading = useSelector(getArticleDetailsCommentLoading)
  const error = useSelector(getArticleDetailsCommentError)

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id))
  })

  const onSendComment = useCallback((value: string) => {
    dispatch(addCommentForArticle(value))
  }, [dispatch])

  if (error) {
    return <Text text={t('Ошибка')} theme={TextTheme.ERROR} />
  }


  return (
    <VStack>
      <Text title={'Комментарии'} align={TextAlign.LEFT} />
      <Suspense fallback={<Loader />}>
        <CommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList data={comments} isLoading={isLoading} />
    </VStack>
  )
}
