import { StoreSchema } from 'app/providers/StoreProvider'

export const getAuthIsLoading = (store: StoreSchema) => store.loginForm?.isLoading || false
