import { StoreSchema } from '@/app/providers/StoreProvider'

export const getUserInitedState = (state: StoreSchema) => state.user._inited
