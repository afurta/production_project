import { StoreSchema } from 'app/providers/StoreProvider'

export const getProfileValidateErrors = (state:StoreSchema) => state.profile?.validateErrors
