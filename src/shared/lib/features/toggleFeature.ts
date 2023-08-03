import { getFeatureFlag } from '@/shared/lib/features/setGetFeaturesFlags'
import { FeauresFlags } from '@/shared/types/featureFlag'

interface ToggleFeature<T> {
  name: keyof FeauresFlags
  on: () => T
  off: () => T
}

export const toggleFeature: T = ({ name, on, off }: ToggleFeature<T>): T => {
  if (getFeatureFlag(name)) {
    return on()
  }

  return off()
}
