import { StoreSchema } from '@/app/providers/StoreProvider'

export const getUserAuthData = (state: StoreSchema) => state.user.authData
