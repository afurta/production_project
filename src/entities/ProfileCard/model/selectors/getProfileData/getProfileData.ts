import { StoreSchema } from 'app/providers/StoreProvider'

export const getProfileData = (state:StoreSchema) => state.profile?.data || undefined
