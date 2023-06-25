import { StoreSchema } from 'app/providers/StoreProvider'

export const getProfileForm = (state:StoreSchema) => state.profile?.form || undefined
