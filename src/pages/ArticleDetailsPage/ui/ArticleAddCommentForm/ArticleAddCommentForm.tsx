import { CommentList } from '@/entities/Comment/ui/CommentList/CommentList'
import { CommentForm } from '@/features/AddComment'
import { Suspense, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { VStack } from '@/shared/ui/redesigned/Stack'
import {
  Text as TextDeprecated,
  TextAlign,
  TextTheme,
  TextSize
} from '@/shared/ui/deprecated/Text'
import {
  getArticleDetailsCommentError,
  getArticleDetailsCommentLoading
} from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/service/sendCommentForArticle/sendCommentForArticle'
import { getCommentsSelectors } from '../../model/slice/ArticleDetailsCommentSlice'
import { fetchCommentsArticleById } from '../../model/service/commentsArticleById/commentsArticleById'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeature } from '@/shared/lib/features'

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

  const onSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticle(value))
    },
    [dispatch]
  )

  if (error) {
    return (
      <ToggleFeature
        feature="isAppRedesigned"
        on={<Text text={t('Ошибка')} variant="error" />}
        off={<TextDeprecated text={t('Ошибка')} theme={TextTheme.ERROR} />}
      />
    )
  }

  return (
    <VStack max gap={16}>
      <ToggleFeature
        feature="isAppRedesigned"
        on={<Text title={'Комментарии'} align={TextAlign.LEFT} size="l" />}
        off={
          <TextDeprecated
            title={'Комментарии'}
            align={TextAlign.LEFT}
            size={TextSize.L}
          />
        }
      />
      <Suspense fallback={<Loader />}>
        <CommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList data={comments} isLoading={isLoading} />
    </VStack>
  )
}
