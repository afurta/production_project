import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { ProfileSchema } from 'entities/ProfileCard'
import { UserSchema } from 'entities/User'
import { CommentFormSchema } from 'features/AddComment'
import { AuthSchema } from 'features/AuthByUsername'
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage'
import { ArticlesPageSchema } from 'pages/ArticlesPage'

export interface StoreSchema{
  user: UserSchema
  // Async store
  loginForm?: AuthSchema
  profile?: ProfileSchema
  ArticleDetails?: ArticleDetailsSchema
  ArticleDetailsComment?: ArticleDetailsCommentSchema
  CommentForm?: CommentFormSchema
  ArticlesPage?: ArticlesPageSchema
}

export type StoreSchemaKey = keyof StoreSchema

export interface ReduxStoreWithManager extends EnhancedStore<StoreSchema>{
  reducerManager: ReducerManager
}

export interface ReducerManager{
  getReducerMap: () => ReducersMapObject<StoreSchema>
  reduce: (state:StoreSchema, action:AnyAction) => CombinedState<StoreSchema>
  add: (key:StoreSchemaKey, reducer:Reducer) => void
  remove: (key:StoreSchemaKey) => void
}

export interface ThunkExtraArg{
  api: AxiosInstance
}

export interface ThunkConfig<T>{
  rejectValue: T
  extra: ThunkExtraArg
  state: StoreSchema
}
