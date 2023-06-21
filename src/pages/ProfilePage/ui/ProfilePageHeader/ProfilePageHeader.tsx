import { getProfileData } from 'entities/ProfileCard'
import { getUserAuthData } from 'entities/User'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { HStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'

interface ProfilePageHeaderProps {
  className?: string
  onEdit: () => void
  onCancelEdit: () => void
  onSave: () => void
  readonly?: boolean
}
export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { readonly, onEdit, onCancelEdit, onSave } = props
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const { t } = useTranslation('profile')

  return (
    <HStack justify={'between'} align={'center'}>
      <Text title={t('Профиль')} />
      {authData?.id === profileData?.id && (
        <>
          {
            readonly
              ? (
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={() => onEdit()}
                >
                  {t('Редактировать')}
                </Button>
              )
              : (
                <HStack gap={16}>
                  <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={() => onCancelEdit()}
                  >
                    {t('Отменить')}
                  </Button>
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={() => onSave()}
                  >
                    {t('Сохранить')}
                  </Button>
                </HStack>
              )
          }
        </>
      )}
    </HStack>
  )
}
