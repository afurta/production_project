import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Article, ArticleType } from '@/entities/Article'
import {
  getArticlePageLimit,
  getArticlePageNum,
  getArticlePageSearch,
  getArticlePageSortField,
  getArticlePageSortOrder,
  getArticlePageType
} from '../../../model/selectors/articlesPageSelectors'
import { addQueryParams } from '@/shared/url/addQueryParams/addQueryParams'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>('ArticlePage/fetchArticlesList', async (props, thunkApi) => {
  const { replace } = props
  const { extra, rejectWithValue, getState } = thunkApi

  const limit = getArticlePageLimit(getState())
  const sort = getArticlePageSortField(getState())
  const order = getArticlePageSortOrder(getState())
  const search = getArticlePageSearch(getState())
  const page = getArticlePageNum(getState())
  const type = getArticlePageType(getState())

  try {
    addQueryParams({ sort, order, search })

    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        type: type === ArticleType.ALL ? undefined : type,
        q: search
      }
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
