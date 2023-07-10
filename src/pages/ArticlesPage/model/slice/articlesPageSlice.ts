import { SortOrder } from '../../../../shared/types/sort'
import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StoreSchema } from '@/app/providers/StoreProvider'
import { Article, ArticleSortFields, ArticleType, ArticleView } from '@/entities/Article'
import { ArticlesPageSchema } from '../../model/types/ArticlesPageSchema'
import { fetchArticlesList } from '../../model/service/fetchArticlesList/fetchArticlesList'
import { ARTICLE_VIEW_KEY } from '@/shared/constants/LS_Constants'

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
    limit: 3,
    _inited: false,

    sortField: ArticleSortFields.TITLE,
    sortOrder: 'asc',
    search: '',
    type: ArticleType.ALL
  }),
  reducers: {
    setView (state, action:PayloadAction<ArticleView>){
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_KEY, action.payload)
    },
    setPage (state, action:PayloadAction<number>){
      state.page = action.payload
    },

    setSortField (state, action:PayloadAction<ArticleSortFields>){
      state.sortField = action.payload
    },
    setSortOrder (state, action:PayloadAction<SortOrder>){
      state.sortOrder = action.payload
    },
    setSearch (state, action:PayloadAction<string>){
      state.search = action.payload
    },
    setType (state, action:PayloadAction<ArticleType>){
      state.type = action.payload
    },
    initeState (state){
      const view = localStorage.getItem(ARTICLE_VIEW_KEY) as ArticleView
      state.view = view
      state.limit = view === ArticleView.GRID ? 9 : 4
      state._inited = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state, action) => {
      state.error = undefined
      state.isLoading = true

      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state)
      }
    }),
    builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false
      state.hasMore = action.payload.length >= state.limit

      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload)
      } else {
        articlesAdapter.addMany(state, action.payload)
      }
    }),
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false,
      state.error = action.payload
    })
  },
})

export const { actions: articlesPageActions } = articlesPageSlice
export const { reducer: articlesPageReducer } = articlesPageSlice
