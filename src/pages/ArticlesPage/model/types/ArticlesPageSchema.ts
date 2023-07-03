import { EntityState } from '@reduxjs/toolkit'
import { Article, ArticleSortFields, ArticleView } from '@/entities/Article'
import { ArticleType } from '@/entities/Article'
import { SortOrder } from '@/shared/types'

export interface ArticlesPageSchema extends EntityState<Article>{
  isLoading?: boolean
  error?: string
  
  page?: number
  hasMore: boolean
  limit: number
  _inited: boolean
  
  // sort
  view: ArticleView
  sortField: ArticleSortFields
  sortOrder: SortOrder
  search?: string 
  type: ArticleType
  // sort
}
