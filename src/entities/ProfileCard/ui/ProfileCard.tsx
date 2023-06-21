import { Mods, classNames } from 'shared/lib/classNames/classnames'
import cls from './ProfileCard.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Profile } from 'entities/ProfileCard/model/types/ProfileSchema'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country, CountrySelect } from 'entities/Country'
import { HStack, VStack } from 'shared/ui/Stack'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  isError?: string
  readonly?: boolean
  onChangeFirstName?: (value: string) => void
  onChangeLastName?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCountry?: (value: Country) => void
  onChangeCity?: (value: string) => void
  onChangeCurrency?: (value: Currency) => void
  onChangeAvatar?: (value: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    isError,
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

  if (isLoading) {
    return (
      <HStack justify={'center'}>
        <Loader />
      </HStack>
    )
  }

  if (isError) {
    return (
      <VStack className={classNames(cls.ProfileCard, {}, [className])}>
        <Text
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          theme={TextTheme.ERROR}
          align={TextAlign.LEFT}
        />
      </VStack>
    )
  }

  const mods: Mods = {
    [cls.readonly]: !readonly
  }
  return (
    <VStack className={classNames(cls.ProfileCard, mods, [className])} gap={16}>
      {data?.avatar && (
        <HStack justify={'center'}>
          <Avatar alt='Avatar' src={data.avatar} />
        </HStack>)
      }
      <Input
        value={data?.first}
        readonly={readonly}
        placeholder={t('Имя')}
        className={cls.input}
        onChange={onChangeFirstName}
      />
      <Input
        value={data?.lastname}
        readonly={readonly}
        placeholder={t('Фамилия')}
        className={cls.input}
        onChange={onChangeLastName}
      />
      <Input
        value={data?.age}
        readonly={readonly}
        placeholder={t('Возраст')}
        className={cls.input}
        onChange={onChangeAge}
      />

      <Input
        value={data?.city}
        readonly={readonly}
        placeholder={t('Город')}
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
      <Input
        value={data?.avatar}
        readonly={readonly}
        placeholder={t('Аватар')}
        className={cls.input}
        onChange={onChangeAvatar}
      />
    </VStack>
  )
}

