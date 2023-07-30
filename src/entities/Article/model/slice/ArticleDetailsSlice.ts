import { fetchArticleById } from './../services/fetchArticleById/fetchArticleById'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ArticleDetailsSchema } from '../../model/types/ArticleDetails'
import { Article } from '../../model/types/article'

const initialState: ArticleDetailsSchema = {
  data: undefined,
  error: undefined,
  isLoading: false
}

export const ArticleDetailsSlice = createSlice({
  name: 'ArticleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      (state.isLoading = true), (state.error = undefined)
    }),
      builder.addCase(fetchArticleById.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload)
      }),
      builder.addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.data = action.payload
          state.isLoading = false
        }
      )
  }
})

export const { actions: ArticleDetailsActions } = ArticleDetailsSlice
export const { reducer: ArticleDetailsReducer } = ArticleDetailsSlice
