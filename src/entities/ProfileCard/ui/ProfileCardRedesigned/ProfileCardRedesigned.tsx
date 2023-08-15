import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { Input } from '@/shared/ui/redesigned/Input'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation()

  return (
    <HStack justify="center" max>
      <Text
        variant="error"
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
        align="center"
      />
    </HStack>
  )
}

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card padding={24} max>
      <VStack gap={32}>
        <HStack max justify="center">
          <Skeleton border="100%" width={128} height={128} />
        </HStack>
        <HStack gap={32} max>
          <VStack gap={16} max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>

          <VStack gap={16} max>
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
            <Skeleton width="100%" height={38} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  )
}

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCountry,
    onChangeCity,
    onChangeAvatar,
    onChangeCurrency
  } = props
  const { t } = useTranslation()

  return (
    <Card max padding={24} className={className}>
      {data?.avatar && (
        <HStack justify={'center'} gap={24}>
          <Avatar alt="Avatar" src={data.avatar} size={128} />
        </HStack>
      )}
      <HStack max gap={24}>
        <VStack max gap={16} align="start">
          <Input
            value={data?.first}
            readonly={readonly}
            label={t('Имя')}
            onChange={onChangeFirstName}
            data-testid="ProfileCard.firstname"
          />
          <Input
            value={data?.lastname}
            readonly={readonly}
            label={t('Фамилия')}
            onChange={onChangeLastName}
            data-testid="ProfileCard.lastname"
          />
          <Input
            value={data?.age}
            readonly={readonly}
            label={t('Возраст')}
            onChange={onChangeAge}
          />

          <Input
            value={data?.city}
            readonly={readonly}
            label={t('Город')}
            onChange={onChangeCity}
          />
        </VStack>
        <VStack max gap={16}>
          <Input
            value={data?.city}
            readonly={readonly}
            label={t('Город')}
            onChange={onChangeCity}
          />
          <CurrencySelect
            value={data?.currency}
            readonly={readonly}
            onChange={onChangeCurrency}
          />
          <CountrySelect
            value={data?.country}
            readonly={readonly}
            onChange={onChangeCountry}
          />
          <Input
            value={data?.avatar}
            readonly={readonly}
            label={t('Аватар')}
            onChange={onChangeAvatar}
          />
        </VStack>
      </HStack>
    </Card>
  )
})
