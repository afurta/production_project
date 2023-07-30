import { StoreSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsCommentError = (state: StoreSchema) =>
  state.ArticlesDetailsPage?.comments?.error
export const getArticleDetailsCommentLoading = (state: StoreSchema) =>
  state.ArticlesDetailsPage?.comments?.isLoading
