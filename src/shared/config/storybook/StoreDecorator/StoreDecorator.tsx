import { Story } from '@storybook/react'
import { StoreProvider, StoreSchema } from 'app/providers/StoreProvider'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { AuthReducer } from 'features/AuthByUsername/model/slice/AuthSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StoreSchema>> = {
  auth: AuthReducer
}

export const StoreDecorator = (
  state: DeepPartial<StoreSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>
) => (StoryComponent: Story) => (
  <StoreProvider initialStore={state} asyncReducers={{ ...asyncReducers, ...defaultAsyncReducers }}>
    <StoryComponent />
  </StoreProvider>
)
