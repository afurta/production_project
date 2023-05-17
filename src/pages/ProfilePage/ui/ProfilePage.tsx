import { ProfileCard, ProfileReducer } from 'entities/Profile'
import { fetchProfileData } from 'entities/Profile/model/service/fetchProfileData/fetchProfileData'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

const ProfilePage = () => {
  const dispatch = useAppDispatch()

  const initialReducers: ReducerList = {
    'profile': ProfileReducer
  }

  const { t } = useTranslation('profile')

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount={true}>
      <div>{t('Профиль')}</div>
      <ProfileCard />
    </DynamicModuleLoader>
  )
}

export default ProfilePage
