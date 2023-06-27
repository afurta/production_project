import { ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StoreProvider, StoreSchema } from 'app/providers/StoreProvider'
import { ArticleDetailsReducer } from 'entities/Article/model/slice/ArticleDetailsSlice'
import { CommentFormReducer } from 'features/AddComment/model/slice/CommentFormSlice'
import { AuthReducer } from 'features/AuthByUsername/model/slice/AuthSlice'
import { ProfileReducer } from 'features/EditableProfilePage/model/slice/ProfileSlice'
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducerList = {
  loginForm: AuthReducer,
  profile: ProfileReducer,
  ArticleDetails: ArticleDetailsReducer,
  CommentForm: CommentFormReducer,
  ArticlesDetailsPage: ArticleDetailsReducer
}

export const StoreDecorator = (
  state: DeepPartial<StoreSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>
) => (StoryComponent: Story) => (
  <StoreProvider initialStore={state} asyncReducers={{ ...asyncReducers, ...defaultAsyncReducers }}>
    <StoryComponent />
  </StoreProvider>
)
