import { StoreSchema } from '@/app/providers/StoreProvider'

export const getIsLoadingProfile = (state:StoreSchema) => state.profile?.isLoading || undefined
