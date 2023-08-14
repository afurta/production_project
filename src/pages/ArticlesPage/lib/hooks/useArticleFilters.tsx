import { ArticleSortFields, ArticleType, ArticleView } from '@/entities/Article'
import {
  getArticlePageSearch,
  getArticlePageSortField,
  getArticlePageSortOrder,
  getArticlePageType,
  getArticlePageView
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { fetchArticlesList } from '@/pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '@/pages/ArticlesPage/model/slice/articlesPageSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { SortOrder } from '@/shared/types/sort'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'

export const useArticleFilters = () => {
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlePageView)
  const search = useSelector(getArticlePageSearch)
  const sort = useSelector(getArticlePageSortField)
  const order = useSelector(getArticlePageSortOrder)
  const type = useSelector(getArticlePageType)

  const fetchDebouncedData = useDebounce(
    fetchArticlesList({ replace: true }),
    500
  )

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch]
  )

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search))
      dispatch(articlesPageActions.setPage(1))
      dispatch(fetchDebouncedData)
    },
    [dispatch, fetchDebouncedData]
  )

  const onChangeSortField = useCallback(
    (field: ArticleSortFields) => {
      dispatch(articlesPageActions.setSortField(field))
      dispatch(articlesPageActions.setPage(1))
      dispatch(fetchDebouncedData)
    },
    [dispatch, fetchDebouncedData]
  )

  const onChangeSortOrder = useCallback(
    (sort: SortOrder) => {
      dispatch(articlesPageActions.setSortOrder(sort))
      dispatch(articlesPageActions.setPage(1))
      dispatch(fetchDebouncedData)
    },
    [dispatch, fetchDebouncedData]
  )

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value))
      dispatch(articlesPageActions.setPage(1))
      fetchArticlesList({})
    },
    [dispatch]
  )

  return {
    view,
    search,
    sort,
    order,
    type,
    fetchDebouncedData,
    onChangeView,
    onChangeSearch,
    onChangeSortField,
    onChangeSortOrder,
    onChangeType
  }
}
