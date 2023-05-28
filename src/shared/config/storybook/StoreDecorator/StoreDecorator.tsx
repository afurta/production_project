import { Story } from '@storybook/react'
import { StoreProvider, StoreSchema } from 'app/providers/StoreProvider'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { AuthReducer } from 'features/AuthByUsername/model/slice/AuthSlice'
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ProfileReducer } from 'entities/ProfileCard'
import { ArticleDetailsReducer } from 'entities/Article/model/slice/ArticleDetailsSlice'

const defaultAsyncReducers: ReducerList = {
  loginForm: AuthReducer,
  profile: ProfileReducer,
  articleDetails: ArticleDetailsReducer
}

export const StoreDecorator = (
  state: DeepPartial<StoreSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>
) => (StoryComponent: Story) => (
  <StoreProvider initialStore={state} asyncReducers={{ ...asyncReducers, ...defaultAsyncReducers }}>
    <StoryComponent />
  </StoreProvider>
)
