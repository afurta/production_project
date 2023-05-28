import { StoreSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsData = (state:StoreSchema) => state.articleDetails?.data
export const getArticleDetailsError = (state:StoreSchema) => state.articleDetails?.error
export const getArticleDetailsLoading = (state:StoreSchema) => state.articleDetails?.isLoading
