import { Story } from '@storybook/react'
import { FeauresFlags } from '@/shared/types/featureFlag'
import { setFeatureFlag } from '@/shared/lib/features'

export const FeaturesFlagsDecorator =
  (features: FeauresFlags) => (StoryComponent: Story) => {
    setFeatureFlag(features)
    return <StoryComponent />
  }
