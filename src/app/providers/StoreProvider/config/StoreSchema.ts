import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema } from 'entities/Article'
import { ProfileSchema } from 'entities/ProfileCard'
import { UserSchema } from 'entities/User'
import { CommentFormSchema } from 'features/AddComment'
import { AuthSchema } from 'features/AuthByUsername'
import { SaveScrollSchema } from 'features/SaveScroll'
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types'
import { ArticlesPageSchema } from 'pages/ArticlesPage'

export interface StoreSchema{
  user: UserSchema
  SaveScroll: SaveScrollSchema
  // Async store
  loginForm?: AuthSchema
  profile?: ProfileSchema

  ArticleDetails?: ArticleDetailsSchema
  
  CommentForm?: CommentFormSchema
  ArticlesPage?: ArticlesPageSchema
  ArticlesDetailsPage?: ArticleDetailsPageSchema
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
