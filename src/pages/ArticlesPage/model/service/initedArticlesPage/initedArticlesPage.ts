import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticlePageIsInited } from '../../selectors/articlesPageSelectors'
import { fetchArticlesList } from '../../service/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { SortOrder } from '@/shared/types/sort'
import { ArticleSortFields, ArticleType } from '@/entities/Article'

export const initedArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articleDetails/initedArticlesPage', async (searchParams, thunkApi) => {
  const { dispatch, getState } = thunkApi
  const _inited = getArticlePageIsInited(getState())

  if (!_inited) {
    const orderFromUrl = searchParams.get('order') as SortOrder
    const sortFromUrl = searchParams.get('sort') as ArticleSortFields
    const searchFromUrl = searchParams.get('search')
    const typeFromUrl = searchParams.get('type') as ArticleType

    if (orderFromUrl) {
      dispatch(articlesPageActions.setSortOrder(orderFromUrl))
    }

    if (sortFromUrl) {
      dispatch(articlesPageActions.setSortField(sortFromUrl))
    }

    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl))
    }

    if (typeFromUrl) {
      dispatch(articlesPageActions.setType(typeFromUrl))
    }

    dispatch(articlesPageActions.initeState())
    dispatch(fetchArticlesList({}))
  }
})
