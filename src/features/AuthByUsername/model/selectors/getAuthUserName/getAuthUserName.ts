import { StoreSchema } from '@/app/providers/StoreProvider'

export const getAuthUsername = (store: StoreSchema) => store.loginForm?.username || ''
