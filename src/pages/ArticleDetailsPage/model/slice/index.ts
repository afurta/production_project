import { combineReducers } from '@reduxjs/toolkit'
import { ArticleDetailsCommentReducer } from './ArticleDetailsCommentSlice'
import { ArticleDetailsPageRecomendationsReducer } from './ArticleDetailsRecomendations'
import { ArticleDetailsPageSchema } from '../../model/types'

export const ArticleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    comments: ArticleDetailsCommentReducer,
    recomendations: ArticleDetailsPageRecomendationsReducer
  })
