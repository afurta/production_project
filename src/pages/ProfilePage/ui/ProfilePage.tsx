import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  ProfileActions,
  ProfileCard,
  ProfileReducer,
  ValidateProfileError,
  fetchProfileData,
  getErrorProfile, getIsLoadingProfile, getProfileForm, getProfileValidateErrors, getReadonlyProfile, updateProfileData
} from 'entities/ProfileCard'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

const ProfilePage = () => {

  const { t } = useTranslation('profile')

  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getIsLoadingProfile)
  const error = useSelector(getErrorProfile)
  const readonly = useSelector(getReadonlyProfile)
  const validateErrors = useSelector(getProfileValidateErrors)

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

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])


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
    </DynamicModuleLoader>
  )
}

export default ProfilePage
