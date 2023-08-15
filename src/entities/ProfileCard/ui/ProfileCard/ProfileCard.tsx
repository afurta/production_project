import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { Profile } from '@/entities/ProfileCard/model/types/Profile'
import { ToggleFeature } from '@/shared/lib/features'
import { useTranslation } from 'react-i18next'
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader
} from '../ProfileCardDeprecated/ProfileCardDeprecated'
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton
} from '../ProfileCardRedesigned/ProfileCardRedesigned'

export interface ProfileCardProps {
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
  const { isLoading, isError } = props

  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <ToggleFeature
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    )
  }

  if (isError) {
    return (
      <ToggleFeature
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    )
  }

  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  )
}
