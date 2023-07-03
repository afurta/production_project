import { StoreSchema } from '@/app/providers/StoreProvider'

export const getErrorProfile = (state:StoreSchema) => state.profile?.error || undefined
