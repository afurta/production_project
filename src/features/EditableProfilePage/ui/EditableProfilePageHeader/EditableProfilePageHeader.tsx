import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/Stack'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getReadonlyProfile } from '../../model/selectors/getReadonlyProfile/getReadonlyProfile'
import { ProfileActions } from '../../model/slice/ProfileSlice'
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData'

interface EditableProfilePageHeaderProps {
  className?: string
}

export const EditableProfilePageHeader = (props: EditableProfilePageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const readonly = useSelector(getReadonlyProfile)

  const onEdit = useCallback(() => {
    dispatch(ProfileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(ProfileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
    <HStack justify={'between'} align={'center'} className={classNames('', {}, [className])}>
      <Text title={t('Профиль')} />
      {authData?.id === profileData?.id && (
        <>
          {
            readonly
              ? (
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={() => onEdit()}
                  data-testid='ProfilePageOnEdit'
                >
                  {t('Редактировать')}
                </Button>
              )
              : (
                <HStack gap={16}>
                  <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={() => onCancelEdit()}
                    data-testid='ProfilePageOnCancel'
                  >
                    {t('Отменить')}
                  </Button>
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={() => onSave()}
                    data-testid='ProfilePageOnSave'
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
