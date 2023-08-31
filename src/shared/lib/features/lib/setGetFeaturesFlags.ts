import { LOCAL_STORAGE_LAST_DESIGN } from './../../../constants/LS_Constants'
import { FeauresFlags } from '@/shared/types/featureFlag'

const defaultFeature: FeauresFlags = {
  isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN) === 'new'
}

let featureFlags: FeauresFlags = { ...defaultFeature }

export const setFeatureFlag = (newFeatureFlag?: FeauresFlags) => {
  if (newFeatureFlag) {
    featureFlags = newFeatureFlag
  }
}

export const getFeatureFlag = (flag: keyof FeauresFlags) => {
  return featureFlags[flag]
}

export const getAllFeatureFlag = () => {
  return featureFlags
}
