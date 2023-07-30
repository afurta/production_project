import { getArticleDetailsData } from './../../../../entities/Article/model/selectors/getArticleDetailsData'
import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) return

    return user.id === article.id
  }
)
