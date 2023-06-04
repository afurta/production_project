import { StoreSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsCommentError = (state:StoreSchema) => state.ArticleDetailsComment?.error
export const getArticleDetailsCommentLoading = (state:StoreSchema) => state.ArticleDetailsComment?.isLoading
