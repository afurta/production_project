import { StoreSchema } from 'app/providers/StoreProvider'

export const getReadonlyProfile = (state:StoreSchema) => state.profile?.readonly
