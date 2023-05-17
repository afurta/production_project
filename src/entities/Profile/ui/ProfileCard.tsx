import { classNames } from 'shared/lib/classNames/classnames'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getIsLoadingProfile } from 'entities/Profile/model/selectors/getIsLoadingProfile/getIsLoadingProfile'
import { getErrorProfile } from 'entities/Profile/model/selectors/getErrorProfile/getErrorProfile'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props

  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getIsLoadingProfile)
  const error = useSelector(getErrorProfile)

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  )
}
