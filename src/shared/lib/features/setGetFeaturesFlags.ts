import { FeauresFlags } from '@/shared/types/featureFlag'

let featureFlags: FeauresFlags

export const setFeatureFlag = (newFeatureFlag?: FeauresFlags) => {
  if (newFeatureFlag) featureFlags = newFeatureFlag
}

export const getFeatureFlag = (flag: keyof FeauresFlags) => {
  return featureFlags[flag]
}
