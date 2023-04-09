import { StoreSchema } from 'app/providers/StoreProvider'

export const getAuthPassword = (store: StoreSchema) => store.auth?.password || ''
