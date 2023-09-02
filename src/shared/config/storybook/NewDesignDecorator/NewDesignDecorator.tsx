import { Story } from '@storybook/react'
import { setFeatureFlag } from '@/shared/lib/features'
import { getAllFeatureFlag } from '@/shared/lib/features/lib/setGetFeaturesFlags'

export const NewDesignDecorator = (StoryComponent: Story) => {
  setFeatureFlag({ ...getAllFeatureFlag(), isAppRedesigned: true })
  return (
    <div className="app_redesigned">
      <StoryComponent />
    </div>
  )
}
