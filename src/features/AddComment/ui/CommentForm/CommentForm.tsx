import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import {
  getCommentFormError,
  getCommentFormText
} from '../../model/selectors/getCommentFormData/getCommentFormData'
import {
  CommentFormActions,
  CommentFormReducer
} from '../../model/slice/CommentFormSlice'
import cls from './CommentForm.module.scss'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeature } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'
import { Button } from '@/shared/ui/redesigned/Button'
import { Input } from '@/shared/ui/redesigned/Input'

interface CommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const initialReducer: ReducerList = {
  CommentForm: CommentFormReducer
}

const CommentForm = (props: CommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const text = useSelector(getCommentFormText)
  const error = useSelector(getCommentFormError)

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(CommentFormActions.setText(value))
    },
    [dispatch]
  )

  const onSendHandler = useCallback(() => {
    onCommentTextChange('')
    onSendComment(text || '')
  }, [onCommentTextChange, text, onSendComment])

  return (
    <DynamicModuleLoader reducers={initialReducer}>
      <ToggleFeature
        feature="isAppRedesigned"
        on={
          <Card padding={24} border="round" max>
            <HStack
              justify="between"
              max
              gap={16}
              className={classNames('', {}, [className])}
              data-testid="CommentForm.Form"
            >
              <Input
                className={classNames(cls.commentInput)}
                placeholder={'Введите комментарий'}
                value={text}
                onChange={onCommentTextChange}
                data-testid="CommentForm.CommentText"
              />
              <Button
                variant="clear"
                className={classNames(cls.commentButton)}
                onClick={onSendHandler}
                data-testid="CommentForm.onSendHandler"
              >
                {t('Добавить комментарий')}
              </Button>
            </HStack>
          </Card>
        }
        off={
          <HStack
            justify="between"
            className={classNames('', {}, [className])}
            data-testid="CommentForm.Form"
          >
            <InputDeprecated
              className={classNames(cls.commentInput)}
              placeholder={'Введите комментарий'}
              value={text}
              onChange={onCommentTextChange}
              data-testid="CommentForm.CommentText"
            />
            <ButtonDeprecated
              theme={ButtonTheme.CLEAR}
              className={classNames(cls.commentButton)}
              onClick={onSendHandler}
              data-testid="CommentForm.onSendHandler"
            >
              {t('Добавить комментарий')}
            </ButtonDeprecated>
          </HStack>
        }
      />
    </DynamicModuleLoader>
  )
}

export default CommentForm
