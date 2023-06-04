import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './CommentForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { CommentFormActions, CommentFormReducer } from '../../model/slice/CommentFormSlice'
import { getCommentFormError, getCommentFormText } from '../../model/selectors/getCommentFormData/getCommentFormData'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text/Text'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

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
      <div className={classNames(cls.commentForm, {}, [className])}>
        <Input
          className={classNames(cls.commentInput)}
          placeholder={'Введите комментарий'}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          theme={ButtonTheme.CLEAR}
          className={classNames(cls.commentButton)}
          onClick={onSendHandler}
        >
          {t('Добавить комментарий')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default CommentForm
