import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { fetchRecomendationArticle } from '../../model/service/fetchRecomendationArticle/fetchRecomendationArticle'
import { ArticleDetailsRecomendationsSchema } from '../../model/types/ArticleDetailsRecomendationsSchema'

const recomendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getRecomendationsArticleSelectors = recomendationsAdapter.getSelectors<StoreSchema>(
  (state) => state.ArticlesDetailsPage?.recomendations || recomendationsAdapter.getInitialState()
)

export const ArticleDetailsPageRecomendations = createSlice({
  name: 'ArticleDetailsPageRecomendations',
  initialState: recomendationsAdapter.getInitialState<ArticleDetailsRecomendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecomendationArticle.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    }),
    builder.addCase(fetchRecomendationArticle.fulfilled, (state, action: PayloadAction<Article[]>) => {
      state.isLoading = false
      recomendationsAdapter.setAll(state, action.payload)
    }),
    builder.addCase(fetchRecomendationArticle.rejected, (state, action) => {
      state.isLoading = false,
      state.error = action.payload
    })
  },
})

export const { actions: ArticleDetailsPageRecomendationsActions } = ArticleDetailsPageRecomendations
export const { reducer: ArticleDetailsPageRecomendationsReducer } = ArticleDetailsPageRecomendations
