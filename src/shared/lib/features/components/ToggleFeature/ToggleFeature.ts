import { FeauresFlags } from '@/shared/types/featureFlag'
import { ReactElement } from 'react'
import { getFeatureFlag } from '../../lib/setGetFeaturesFlags'

interface ToggleFeature {
  feature: keyof FeauresFlags
  on: ReactElement
  off: ReactElement
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ToggleFeature = (props: ToggleFeature) => {
  const { on, off, feature } = props

  if (getFeatureFlag(feature)) {
    return on
  }

  return off
}
