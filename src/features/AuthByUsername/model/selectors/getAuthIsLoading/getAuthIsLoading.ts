import { StoreSchema } from 'app/providers/StoreProvider'

export const getAuthIsLoading = (store: StoreSchema) => store.auth?.isLoading || false
