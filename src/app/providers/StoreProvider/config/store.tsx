import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { UserReducer } from 'entities/User'
import { StoreSchema, ThunkExtraArg } from './StoreSchema'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { NavigateOptions, To } from 'react-router-dom'

export const createReduxStore = (
  initialStore?: StoreSchema,
  asyncReducers?: ReducersMapObject<StoreSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {

  const rootReducers: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    user: UserReducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
    devTools: __IS_DEV,
    preloadedState: initialStore,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
