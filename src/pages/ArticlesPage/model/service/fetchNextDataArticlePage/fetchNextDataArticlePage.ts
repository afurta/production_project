import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlePageHasMore, getArticlePageLoading, getArticlePageNum } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { fetchArticlesList } from '../../service/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slice/articlesPageSlice'

export const fetchNextDataArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articleDetails/fetchNextDataArticlePage',
  async (_, thunkApi) => {

    const { dispatch, getState} = thunkApi
    const hasMore = getArticlePageHasMore(getState())
    const isLoading = getArticlePageLoading(getState())
    const page = getArticlePageNum(getState())
    
    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1))
      dispatch(fetchArticlesList({ }))
    }
  
  })

