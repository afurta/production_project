import { StoreSchema } from 'app/providers/StoreProvider'

export const getAuthUsername = (store: StoreSchema) => store.auth?.username || ''
