import { StoreSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsRecomendationsError = (state: StoreSchema) =>
  state.ArticlesDetailsPage?.recomendations?.error
export const getArticleDetailsRecomendationsLoading = (state: StoreSchema) =>
  state.ArticlesDetailsPage?.recomendations?.isLoading
