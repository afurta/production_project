import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classnames'
import { Card } from '@/shared/ui/Card/Card'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import { memo, useCallback, useState } from 'react'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useDetectDevice } from '@/shared/lib/hooks/useDetectDevice'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (startCount: number) => void
  onAccept?: (startCount: number, feedback?: string) => void
}

export const Rating = memo((props: RatingProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept
  } = props

  const { t } = useTranslation()
  const isMobile = useDetectDevice()

  const [isShowModal, setIsShowModal] = useState(false)
  const [starCount, setStarCount] = useState(0)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback((selectedStar: number) => {
    setStarCount(selectedStar)
    hasFeedback
      ? setIsShowModal(true)
      : onAccept?.(selectedStar)
  }, [hasFeedback, onAccept])

  const onAcceptHandler = useCallback(() => {
    setIsShowModal(false)
    onAccept?.(starCount, feedback)
  }, [starCount, onAccept, feedback])

  const onCancelHandler = useCallback(() => {
    onCancel?.(starCount)
  }, [starCount, onCancel])

  const content = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
    </>
  )

  return (
    <Card className={classNames('', {}, [className])}>
      <VStack gap={8} align={'center'}>
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      <Modal isOpen={isShowModal} lazy>
        {
          isMobile
            ? (
              <VStack max gap={32}>
                {content}
                <HStack gap={16} max justify={'end'}>
                  <Button onClick={onCancelHandler} theme={ButtonTheme.OUTLINE_RED}>{t('Закрыть')}</Button>
                  <Button onClick={onAcceptHandler}>{t('Отправить')}</Button>
                </HStack>
              </VStack>
            )
            : (
              <Drawer isOpen={isShowModal} onClose={onCancelHandler}>
                <VStack max gap={32}>
                  {content}
                  <HStack gap={16} max justify={'end'}>
                    <Button fullWidth onClick={onAcceptHandler}>{t('Отправить')}</Button>
                  </HStack>
                </VStack>
              </Drawer>
            )
        }
      </Modal>
    </Card>
  )
})
