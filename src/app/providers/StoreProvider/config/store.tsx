import { configureStore, DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { UserReducer } from 'entities/User'
import { StoreSchema } from './StoreSchema'
import { createReducerManager } from './reducerManager'

export const createReduxStore = (
  initialStore?: StoreSchema,
  asyncReducers?: ReducersMapObject<StoreSchema>
) => {

  const rootReducers: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: UserReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV,
    preloadedState: initialStore,
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
