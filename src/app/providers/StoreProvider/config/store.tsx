import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { UserReducer } from 'entities/User'
import { StoreSchema } from './StoreSchema'

export const createReduxStore = (initialStore?: StoreSchema) => {

  const rootReducer: ReducersMapObject<StoreSchema> = {
    counter: counterReducer,
    user: UserReducer
  }

  return configureStore<StoreSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV,
    preloadedState: initialStore,
  })
}
