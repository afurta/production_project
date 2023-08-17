import { User } from '@/entities/User'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './AdditionalInfo.module.scss'

interface AdditionalInfoProps {
  className?: string
  author: User
  createdAt: string
  views: number
  onClick: () => void
}

export const AdditionalInfo = memo((props: AdditionalInfoProps) => {
  const { author, createdAt, views, onClick } = props
  const { t } = useTranslation()

  return (
    <VStack className={cls.AdditionalInfo} gap={32} align="start">
      <HStack gap={16}>
        <Avatar src={author.avatar} size={32} />
        <Text text={author.username} />
        <Text text={createdAt} />
      </HStack>
      <Button onClick={onClick}>{t('Редактировать')}</Button>
      <Text text={t('{{count}} просмотров ', { count: views })} />
    </VStack>
  )
})
