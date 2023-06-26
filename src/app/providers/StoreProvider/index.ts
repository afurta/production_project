import type { ReduxStoreWithManager, StoreSchema, ThunkConfig, ThunkExtraArg } from './config/StoreSchema'
import { AppDispatch, createReduxStore } from './config/store'
import { StoreProvider } from './ui/StoreProvider'

export {
  StoreProvider, 
  createReduxStore,
  ReduxStoreWithManager,
  ThunkExtraArg,
}

export type {AppDispatch, StoreSchema, ThunkConfig}
