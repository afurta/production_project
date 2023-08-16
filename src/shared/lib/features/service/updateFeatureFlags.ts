import { ThunkConfig } from '@/app/providers/StoreProvider'
import { updateFeatureFlagsMutation } from '../api/FeatureFlagsApi'
import { getAllFeatureFlag } from '../lib/setGetFeaturesFlags'
import { FeauresFlags } from '@/shared/types/featureFlag'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface UpdateFeatureFlagsOptions {
  userId: string
  newFeatures: Partial<FeauresFlags>
}
export const updateFeatureFlags = createAsyncThunk<
  void,
  UpdateFeatureFlagsOptions,
  ThunkConfig<string>
>('user/updateFeatureFlags', async ({ userId, newFeatures }, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi

  try {
    await dispatch(
      updateFeatureFlagsMutation({
        userId,
        features: {
          ...getAllFeatureFlag(),
          ...newFeatures
        }
      })
    ).unwrap()
    window.location.reload()
  } catch (error) {
    return rejectWithValue('error')
  }
})
