import {
  PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { StoreSchema } from '@/app/providers/StoreProvider'
import { Comment } from '@/entities/Comment'
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema'
import { fetchCommentsArticleById } from '@/pages/ArticleDetailsPage/model/service/commentsArticleById/commentsArticleById'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})

export const getCommentsSelectors = commentsAdapter.getSelectors<StoreSchema>(
  (state) =>
    state.ArticlesDetailsPage?.comments || commentsAdapter.getInitialState()
)

export const ArticleDetailsCommentSlice = createSlice({
  name: 'ArticleDetails',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsArticleById.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    }),
      builder.addCase(
        fetchCommentsArticleById.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false
          commentsAdapter.setAll(state, action.payload)
        }
      ),
      builder.addCase(fetchCommentsArticleById.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload)
      })
  }
})

export const { actions: ArticleDetailsCommentActions } =
  ArticleDetailsCommentSlice
export const { reducer: ArticleDetailsCommentReducer } =
  ArticleDetailsCommentSlice
