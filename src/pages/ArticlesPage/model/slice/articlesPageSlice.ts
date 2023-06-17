import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StoreSchema } from 'app/providers/StoreProvider'
import { Article, ArticleView } from 'entities/Article'
import { ArticlesPageSchema } from '../../model/types/ArticlesPageSchema'
import { fetchArticlesList } from '../../model/service/fetchArticlesList/fetchArticlesList'
import { ARTICLE_VIEW_KEY } from 'shared/constants/LS_Constants'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StoreSchema>(
  (state) => state.ArticlesPage || articlesAdapter.getInitialState()
)

export const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.LIST,
    page: 1,
    hasMore: true,
    limit: undefined
  }),
  reducers: {
    setView (state, action:PayloadAction<ArticleView>){
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_KEY, action.payload)
    },
    setPage (state, action:PayloadAction<number>){
      state.page = action.payload
    },
    initeState (state){
      const view = localStorage.getItem(ARTICLE_VIEW_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.GRID ? 9 : 4
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    }),
    builder.addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
      state.isLoading = false
      articlesAdapter.addMany(state, action.payload)
      state.hasMore = action.payload.length > 0 ? true : false
    }),
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false,
      state.error = action.payload
    })
  },
})

export const { actions: articlesPageActions } = articlesPageSlice
export const { reducer: articlesPageReducer } = articlesPageSlice
