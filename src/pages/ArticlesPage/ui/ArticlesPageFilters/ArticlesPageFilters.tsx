import { ArticleSortFields, ArticleSortSelector, ArticleViewsSelector } from 'entities/Article'
import { ArticleType } from 'entities/Article/model/types/article'
import { ArticleTypeTabs } from 'entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classnames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useDebounce } from 'shared/lib/hooks/useDebounce'
import { SortOrder } from 'shared/types'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import {
  getArticlePageSearch,
  getArticlePageSortField,
  getArticlePageSortOrder,
  getArticlePageType,
  getArticlePageView
} from '../../model/selectors/articlesPageSelectors'
import { fetchArticlesList } from '../../model/service/fetchArticlesList/fetchArticlesList'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlePageView)
  const search = useSelector(getArticlePageSearch)
  const sortField = useSelector(getArticlePageSortField)
  const sortOrder = useSelector(getArticlePageSortOrder)
  const type = useSelector(getArticlePageType)

  const fetchDebouncedData = useDebounce(fetchArticlesList({ replace: true }), 500)

  const onChangeView = useCallback((view) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search))
    dispatch(articlesPageActions.setPage(1))
    dispatch(fetchDebouncedData)
  }, [dispatch, fetchDebouncedData])

  const onChangeSortField = useCallback((field: ArticleSortFields) => {
    dispatch(articlesPageActions.setSortField(field))
    dispatch(articlesPageActions.setPage(1))
    dispatch(fetchDebouncedData)
  }, [dispatch, fetchDebouncedData])

  const onChangeSortOrder = useCallback((sort: SortOrder) => {
    dispatch(articlesPageActions.setSortOrder(sort))
    dispatch(articlesPageActions.setPage(1))
    dispatch(fetchDebouncedData)
  }, [dispatch, fetchDebouncedData])

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setType(value))
    dispatch(articlesPageActions.setPage(1))
    fetchArticlesList({})
  }, [dispatch])



  return (
    <div className={classNames(cls.articlesPageFilters, {}, [className])}>
      <div className={classNames(cls.sortWrapper)}>
        <ArticleSortSelector
          view={view}
          sortField={sortField}
          sortOrder={sortOrder}
          onChangeSortField={onChangeSortField}
          onChangeSortOrder={onChangeSortOrder}
        />
        <ArticleViewsSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={classNames(cls.searchInputContainer)}>
        <Input placeholder='Поиск' value={search} onChange={onChangeSearch} />
      </Card>
      <ArticleTypeTabs onChangeType={onChangeType} value={type} className={classNames(cls.articleTypeTabs)} />
    </div>
  )
}
