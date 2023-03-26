import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { StoreSchema } from './StoreSchema'

export const createReduxStore = (initialStore?: StoreSchema) => {
  return configureStore<StoreSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV,
    preloadedState: initialStore,
  })
}
