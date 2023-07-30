import { StoreSchema } from '@/app/providers/StoreProvider'

export const getAuthIsError = (store: StoreSchema) =>
  store.loginForm?.error || ''
