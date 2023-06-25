import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { ProfileCard } from 'entities/ProfileCard'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { ProfileActions, ProfileReducer, ValidateProfileError, fetchProfileData, getErrorProfile, getIsLoadingProfile, getProfileValidateErrors, getReadonlyProfile } from 'features/EditableProfilePage'
import { getProfileForm } from 'features/EditableProfilePage/model/selectors/getProfileForm/getProfileForm'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'

interface EditableProfilePageProps {
  className?: string
  id: string
}

export const EditableProfilePage = (props: EditableProfilePageProps) => {
  const { className, id } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

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

  const readonly = useSelector(getReadonlyProfile)
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getIsLoadingProfile)
  const error = useSelector(getErrorProfile)
  const validateErrors = useSelector(getProfileValidateErrors)

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

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
    </DynamicModuleLoader >
  )
}

