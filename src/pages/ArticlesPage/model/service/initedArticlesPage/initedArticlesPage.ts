import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlePageIsInited } from '../../selectors/articlesPageSelectors'
import { fetchArticlesList } from '../../service/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slice/articlesPageSlice'

export const initedArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articleDetails/initedArticlesPage',
  async (_, thunkApi) => {

    const { dispatch, getState} = thunkApi
    const _inited = getArticlePageIsInited(getState())

    if (!_inited) {
      dispatch(articlesPageActions.initeState())
      dispatch(fetchArticlesList({ page: 1 }))
    }
  
  })

