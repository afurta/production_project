import { StoreSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities/Article'

export const getArticlePageError = (state:StoreSchema) => state.ArticlesPage?.error
export const getArticlePageLoading = (state:StoreSchema) => state.ArticlesPage?.isLoading 
export const getArticlePageView = (state:StoreSchema) => state.ArticlesPage?.view || ArticleView.LIST
export const getArticlePageLimit = (state:StoreSchema) => state.ArticlesPage?.limit || 9
export const getArticlePageHasMore = (state:StoreSchema) => state.ArticlesPage?.hasMore 
export const getArticlePageNum  = (state:StoreSchema) => state.ArticlesPage?.page || 1
export const getArticlePageIsInited  = (state:StoreSchema) => state.ArticlesPage?._inited
