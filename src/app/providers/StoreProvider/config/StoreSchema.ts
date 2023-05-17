import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile/model/types/ProfileSchema'
import { UserSchema } from 'entities/User'
import { AuthSchema } from 'features/AuthByUsername'
import { NavigateOptions, To } from 'react-router-dom'

export interface StoreSchema{
  counter: CounterSchema
  user: UserSchema
  // Async store
  auth?: AuthSchema
  profile?: ProfileSchema
}

export type StoreSchemaKey = keyof StoreSchema

export interface ReduxStoreWithManager extends EnhancedStore<StoreSchema>{
  reducerManager: ReducerManager
}

export interface ReducerManager{
  getReducerMap: (state:StoreSchema, action:AnyAction) => ReducersMapObject<StoreSchema>
  reduce: (state:StoreSchema, action:AnyAction) => CombinedState<StoreSchema>
  add: (key:StoreSchemaKey, reducer:Reducer) => void
  remove: (key:StoreSchemaKey) => void
}

export interface ThunkExtraArg{
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T>{
  rejectValue: T
  extra: ThunkExtraArg
}
