import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeature } from '@/shared/lib/features'
import { useDetectDevice } from '@/shared/lib/hooks/useDetectDevice'
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Input } from '@/shared/ui/redesigned/Input'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (startCount: number) => void
  onAccept?: (startCount: number, feedback?: string) => void
  rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0
  } = props

  const { t } = useTranslation()
  const isMobile = useDetectDevice()

  const [isShowModal, setIsShowModal] = useState(false)
  const [starCount, setStarCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback(
    (selectedStar: number) => {
      setStarCount(selectedStar)
      hasFeedback ? setIsShowModal(true) : onAccept?.(selectedStar)
    },
    [hasFeedback, onAccept]
  )

  const onAcceptHandler = useCallback(() => {
    setIsShowModal(false)
    onAccept?.(starCount, feedback)
  }, [starCount, onAccept, feedback])

  const onCancelHandler = useCallback(() => {
    onCancel?.(starCount)
  }, [starCount, onCancel])

  const content = (
    <>
      <ToggleFeature
        feature="isAppRedesigned"
        on={
          <>
            <TextDeprecated title={feedbackTitle} />
            <InputDeprecated
              value={feedback}
              onChange={setFeedback}
              placeholder={t('Ваш отзыв')}
              data-testid="RatingCard.Input"
            />
          </>
        }
        off={
          <>
            <Text title={feedbackTitle} />
            <Input
              value={feedback}
              onChange={setFeedback}
              placeholder={t('Ваш отзыв')}
              data-testid="RatingCard.Input"
            />
          </>
        }
      />
    </>
  )

  const cardContent = (
    <>
      <VStack gap={8} align={'center'} justify={'center'}>
        <ToggleFeature
          feature="isAppRedesigned"
          on={<Text title={starCount ? t('Спасибо за оценку') : title} />}
          off={
            <TextDeprecated
              title={starCount ? t('Спасибо за оценку') : title}
            />
          }
        />

        <StarRating
          size={40}
          onSelect={onSelectStars}
          selectedStar={starCount}
        />
      </VStack>
      <Modal isOpen={isShowModal} lazy>
        {isMobile ? (
          <VStack max gap={32} align={'center'} justify={'center'}>
            {content}
            <ToggleFeature
              feature="isAppRedesigned"
              on={
                <HStack gap={16} max justify={'end'}>
                  <Button
                    onClick={onCancelHandler}
                    data-testid="RatingCard.CancelHandler"
                  >
                    {t('Закрыть')}
                  </Button>
                  <Button
                    onClick={onAcceptHandler}
                    data-testid="RatingCard.AcceptHandler"
                  >
                    {t('Отправить')}
                  </Button>
                </HStack>
              }
              off={
                <HStack gap={16} max justify={'end'}>
                  <ButtonDeprecated
                    onClick={onCancelHandler}
                    data-testid="RatingCard.CancelHandler"
                    theme={ButtonTheme.OUTLINE_RED}
                  >
                    {t('Закрыть')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    onClick={onAcceptHandler}
                    data-testid="RatingCard.AcceptHandler"
                  >
                    {t('Отправить')}
                  </ButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        ) : (
          <Drawer isOpen={isShowModal} onClose={onCancelHandler}>
            <VStack max gap={32}>
              {content}
              <HStack gap={16} max justify={'end'}>
                <ToggleFeature
                  feature="isAppRedesigned"
                  on={
                    <Button fullWidth onClick={onAcceptHandler} size="l">
                      {t('Отправить')}
                    </Button>
                  }
                  off={
                    <ButtonDeprecated fullWidth onClick={onAcceptHandler}>
                      {t('Отправить')}
                    </ButtonDeprecated>
                  }
                />
              </HStack>
            </VStack>
          </Drawer>
        )}
      </Modal>
    </>
  )
  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={
        <Card
          className={classNames('', {}, [className])}
          max
          data-testid="RatingCard"
          border="round"
          padding={24}
        >
          {cardContent}
        </Card>
      }
      off={
        <CardDeprecated
          className={classNames('', {}, [className])}
          max
          data-testid="RatingCard"
        >
          {cardContent}
        </CardDeprecated>
      }
    />
  )
})
