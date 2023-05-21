import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  ProfileActions,
  ProfileCard,
  ProfileReducer,
  fetchProfileData,
  getErrorProfile, getIsLoadingProfile, getProfileForm, getReadonlyProfile, updateProfileData
} from 'entities/ProfileCard'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const ProfilePage = () => {
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getIsLoadingProfile)
  const error = useSelector(getErrorProfile)
  const readonly = useSelector(getReadonlyProfile)

  const initialReducers: ReducerList = {
    'profile': ProfileReducer
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
