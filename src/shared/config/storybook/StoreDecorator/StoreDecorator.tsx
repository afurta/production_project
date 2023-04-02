import { Story } from '@storybook/api'
import { StoreProvider, StoreSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'

export const StoreDecorator = (state: DeepPartial<StoreSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialStore={state}>
    <StoryComponent />
  </StoreProvider>
)
