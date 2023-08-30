import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/redesigned/Stack'
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getReadonlyProfile } from '../../model/selectors/getReadonlyProfile/getReadonlyProfile'
import { ProfileActions } from '../../model/slice/ProfileSlice'
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData'
import { ToggleFeature } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'

interface EditableProfilePageHeaderProps {
  className?: string
}

export const EditableProfilePageHeader = (
  props: EditableProfilePageHeaderProps
) => {
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
    <ToggleFeature
      feature="isAppRedesigned"
      on={
        <Card border="partial" max padding={24}>
          <HStack
            justify={'between'}
            align={'center'}
            className={classNames('', {}, [className])}
            max
          >
            <Text title={t('Профиль')} />
            {authData?.id === profileData?.id && (
              <>
                {readonly ? (
                  <Button
                    variant="outline"
                    onClick={() => onEdit()}
                    data-testid="ProfilePageOnEdit"
                  >
                    {t('Редактировать')}
                  </Button>
                ) : (
                  <HStack gap={16}>
                    <Button
                      variant="outline"
                      color="error"
                      onClick={() => onCancelEdit()}
                      data-testid="ProfilePageOnCancel"
                    >
                      {t('Отменить')}
                    </Button>
                    <Button
                      variant="outline"
                      color="success"
                      onClick={() => onSave()}
                      data-testid="ProfilePageOnSave"
                    >
                      {t('Сохранить')}
                    </Button>
                  </HStack>
                )}
              </>
            )}
          </HStack>
        </Card>
      }
      off={
        <HStack
          justify={'between'}
          align={'center'}
          className={classNames('', {}, [className])}
          max
        >
          <TextDeprecated title={t('Профиль')} />
          {authData?.id === profileData?.id && (
            <>
              {readonly ? (
                <ButtonDeprecated
                  theme={ButtonTheme.OUTLINE}
                  onClick={() => onEdit()}
                  data-testid="ProfilePageOnEdit"
                >
                  {t('Редактировать')}
                </ButtonDeprecated>
              ) : (
                <HStack gap={16}>
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={() => onCancelEdit()}
                    data-testid="ProfilePageOnCancel"
                  >
                    {t('Отменить')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE}
                    onClick={() => onSave()}
                    data-testid="ProfilePageOnSave"
                  >
                    {t('Сохранить')}
                  </ButtonDeprecated>
                </HStack>
              )}
            </>
          )}
        </HStack>
      }
    />
  )
}
