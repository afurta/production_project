import { StoreSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsData = (state: StoreSchema) =>
  state.ArticleDetails?.data
export const getArticleDetailsError = (state: StoreSchema) =>
  state.ArticleDetails?.error
export const getArticleDetailsLoading = (state: StoreSchema) =>
  state.ArticleDetails?.isLoading
