import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Modal } from '@/shared/ui/deprecated/Modal'
import { memo, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const ArticlePageGreeting = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const { isArticlePageWasOpened } = useJsonSettings()
  const dispatch = useAppDispatch()

  const { t } = useTranslation()

  const onCloseHandler = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isArticlePageWasOpened) {
      setIsOpen(true)
      dispatch(saveJsonSettings({ isArticlePageWasOpened: true }))
    }
  }, [dispatch, isArticlePageWasOpened])

  return (
    <Modal lazy isOpen={isOpen} onClose={onCloseHandler}>
      {t('Добро пожаловать на страницу статей')}
    </Modal>
  )
})
