import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import {
  ProfileActions,
  ProfileCard,
  ProfileReducer,
  ValidateProfileError,
  fetchProfileData,
  getErrorProfile, getIsLoadingProfile, getProfileForm, getProfileValidateErrors, getReadonlyProfile, updateProfileData
} from 'entities/ProfileCard'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack'

const ProfilePage = () => {

  const { t } = useTranslation('profile')

  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getIsLoadingProfile)
  const error = useSelector(getErrorProfile)
  const readonly = useSelector(getReadonlyProfile)
  const validateErrors = useSelector(getProfileValidateErrors)
  const { id } = useParams<{ id: string }>()

  const initialReducers: ReducerList = {
    'profile': ProfileReducer
  }

  const validateErrorsTranslates = {
    [ValidateProfileError.INCORRECT_LAST_NAME]: t('Проверьте поле имя'),
    [ValidateProfileError.INCORRECT_FIRST_NAME]: t('Проверьте поле фамилия'),
    [ValidateProfileError.INCORRECT_AGE]: t('Проверьте возраст'),
    [ValidateProfileError.INCORRECT_CURRENCY]: t('Некорректное значение в Валюта'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректное значение в Страна'),
    [ValidateProfileError.INCORRECT_CITY]: t('Некорректное значение в Город'),
    [ValidateProfileError.INCORRECT_USERNAME]: t('Проверьте Username'),
    [ValidateProfileError.INCORRECT_DATA]: t('Данные не указаны'),
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })
  const onEdit = useCallback(() => {
    dispatch(ProfileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(ProfileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  const onChangeFirstName = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ first: value || '' }))
  }, [dispatch])

  const onChangeLastName = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ lastname: value || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ age: +(value || '') }))
  }, [dispatch])

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(ProfileActions.updateProfile({ country }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ city: value || '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(ProfileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(ProfileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount={true}>
      <Page>
        <VStack gap={32}>
          {
            validateErrors?.length && (
              validateErrors.map(elem => <Text theme={TextTheme.ERROR} key={elem} text={validateErrorsTranslates[elem]} align={TextAlign.LEFT} />)
            )
          }
          <ProfilePageHeader
            onEdit={onEdit}
            onCancelEdit={onCancelEdit}
            onSave={onSave}
            readonly={readonly}
          />
          <ProfileCard
            readonly={readonly}
            data={formData}
            isLoading={isLoading}
            isError={error}
            onChangeFirstName={onChangeFirstName}
            onChangeLastName={onChangeLastName}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeCountry={onChangeCountry}
            onChangeCurrency={onChangeCurrency}
            onChangeAvatar={onChangeAvatar}
          />
        </VStack>
      </Page>
    </DynamicModuleLoader >
  )
}

export default ProfilePage
