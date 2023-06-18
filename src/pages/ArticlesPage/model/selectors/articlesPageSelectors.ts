import { StoreSchema } from 'app/providers/StoreProvider'
import { ArticleSortFields, ArticleType, ArticleView } from 'entities/Article'

export const getArticlePageError = (state:StoreSchema) => state.ArticlesPage?.error
export const getArticlePageLoading = (state:StoreSchema) => state.ArticlesPage?.isLoading 
export const getArticlePageView = (state:StoreSchema) => state.ArticlesPage?.view || ArticleView.LIST
export const getArticlePageLimit = (state:StoreSchema) => state.ArticlesPage?.limit || 9
export const getArticlePageHasMore = (state:StoreSchema) => state.ArticlesPage?.hasMore 
export const getArticlePageNum  = (state:StoreSchema) => state.ArticlesPage?.page || 1
export const getArticlePageIsInited  = (state:StoreSchema) => state.ArticlesPage?._inited

export const getArticlePageSearch  = (state:StoreSchema) => state.ArticlesPage?.search ?? ''
export const getArticlePageSortField  = (state:StoreSchema) => state.ArticlesPage?.sortField ?? ArticleSortFields.CREATED_AT
export const getArticlePageSortOrder  = (state:StoreSchema) => state.ArticlesPage?.sortOrder ?? 'asc'
export const getArticlePageType  = (state:StoreSchema) => state.ArticlesPage?.type ?? ArticleType.ALL


