import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentError, getArticleDetailsCommentLoading } from '../../model/selectors/comments'
import { getCommentsSelectors } from '../../model/slice/ArticleDetailsCommentSlice'
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList'
import { CommentForm } from 'features/AddComment'
import { addCommentForArticle } from '../../model/service/sendCommentForArticle/sendCommentForArticle'
import { classNames } from 'shared/lib/classNames/classnames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { VStack } from 'shared/ui/Stack'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'

interface ArticleAddCommentFormProps {
  className?: string
}

export const ArticleAddCommentForm = (props: ArticleAddCommentFormProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const comments = useSelector(getCommentsSelectors.selectAll)
  const isLoading = useSelector(getArticleDetailsCommentLoading)
  const error = useSelector(getArticleDetailsCommentError)

  const onSendComment = useCallback((value: string) => {
    dispatch(addCommentForArticle(value))
  }, [dispatch])

  if (error) {
    return <Text text={t('Ошибка')} theme={TextTheme.ERROR} />
  }

  return (
    <VStack>
      <Text title={'Комментарии'} align={TextAlign.LEFT} />
      <CommentForm onSendComment={onSendComment} />
      <CommentList data={comments} isLoading={isLoading} />
    </VStack>
  )
}
