import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { getCommentFormError, getCommentFormText } from '../../model/selectors/getCommentFormData/getCommentFormData'
import { CommentFormActions, CommentFormReducer } from '../../model/slice/CommentFormSlice'
import cls from './CommentForm.module.scss'
import { HStack } from '@/shared/ui/Stack'

interface CommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const initialReducer: ReducerList = {
  'CommentForm': CommentFormReducer
}

const CommentForm: FC<CommentFormProps> = (props) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const text = useSelector(getCommentFormText)
  const error = useSelector(getCommentFormError)

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(CommentFormActions.setText(value))
  }, [dispatch])

  const onSendHandler = useCallback(() => {
    onCommentTextChange('')
    onSendComment(text || '')
  }, [onCommentTextChange, text, onSendComment])

  return (
    <DynamicModuleLoader reducers={initialReducer} >
      <HStack
        justify='between'
        className={classNames('', {}, [className])}
        data-testid='CommentForm.Form'
      >
        <Input
          className={classNames(cls.commentInput)}
          placeholder={'Введите комментарий'}
          value={text}
          onChange={onCommentTextChange}
          data-testid='CommentForm.CommentText'
        />
        <Button
          theme={ButtonTheme.CLEAR}
          className={classNames(cls.commentButton)}
          onClick={onSendHandler}
          data-testid='CommentForm.onSendHandler'
        >
          {t('Добавить комментарий')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  )
}

export default CommentForm
