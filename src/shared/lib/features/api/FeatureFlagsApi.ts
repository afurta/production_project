import { rtkApi } from '@/shared/api/api'
import { FeauresFlags } from '@/shared/types/featureFlag'

interface updateFeatureFlagsOptions {
  userId: string
  features: Partial<FeauresFlags>
}

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.mutation<void, updateFeatureFlagsOptions>({
      query: ({ userId, features }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          features
        }
      })
    })
  })
})

export const updateFeatureFlagsMutation =
  featureFlagsApi.endpoints.updateFeatureFlags.initiate
