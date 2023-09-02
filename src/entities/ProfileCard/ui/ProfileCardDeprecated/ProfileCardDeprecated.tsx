import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfileCardDeprecated.module.scss'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'
import { memo } from 'react'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar as AvatarDeprecated } from '@/shared/ui/redesigned/Avatar'
import { Input as InputDeprecated } from '@/shared/ui/redesigned/Input'
import { CurrencySelect } from '@/entities/Currency'
import { CountrySelect } from '@/entities/Country'
import {
  TextAlign,
  Text as TextDeprecated,
  TextTheme
} from '@/shared/ui/deprecated/Text'
import { Loader } from '@/shared/ui/deprecated/Loader'

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile')

  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, {}, [cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
        align={TextAlign.CENTER}
      />
    </HStack>
  )
}

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, { [cls.loading]: true })}
    >
      <Loader />
    </HStack>
  )
}

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
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

  const { t } = useTranslation('profile')

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
    <VStack
      className={classNames(cls.ProfileCard, mods, [className])}
      gap={16}
      max
    >
      {data?.avatar && (
        <HStack justify={'center'}>
          <AvatarDeprecated alt="Avatar" src={data.avatar} />
        </HStack>
      )}
      <HStack align="start" gap={32}>
        <VStack gap={16} justify="start">
          <InputDeprecated
            value={data?.first}
            readonly={readonly}
            label={t('Имя')}
            className={cls.input}
            onChange={onChangeFirstName}
            data-testid="ProfileCard.firstname"
          />
          <InputDeprecated
            value={data?.lastname}
            readonly={readonly}
            label={t('Фамилия')}
            className={cls.input}
            onChange={onChangeLastName}
            data-testid="ProfileCard.lastname"
          />
          <InputDeprecated
            value={data?.age}
            readonly={readonly}
            label={t('Возраст')}
            className={cls.input}
            onChange={onChangeAge}
          />
        </VStack>
        <VStack gap={16}>
          <InputDeprecated
            value={data?.city}
            readonly={readonly}
            label={t('Город')}
            className={cls.input}
            onChange={onChangeCity}
          />
          <CurrencySelect
            className={cls.input}
            value={data?.currency}
            readonly={readonly}
            onChange={onChangeCurrency}
          />
          <CountrySelect
            className={cls.input}
            value={data?.country}
            readonly={readonly}
            onChange={onChangeCountry}
          />
          <InputDeprecated
            value={data?.avatar}
            readonly={readonly}
            label={t('Аватар')}
            className={cls.input}
            onChange={onChangeAvatar}
          />
        </VStack>
      </HStack>
    </VStack>
  )
})
