import { getFeatureFlag } from '../setGetFeaturesFlags'
import { FeauresFlags } from '@/shared/types/featureFlag'
import { ReactElement } from 'react'

interface ToggleFeature {
  feature: keyof FeauresFlags
  on: ReactElement
  off: ReactElement
}

export const ToggleFeature = ({ feature, on, off }: ToggleFeature) => {
  if (getFeatureFlag(feature)) {
    return on
  }

  return off
}
