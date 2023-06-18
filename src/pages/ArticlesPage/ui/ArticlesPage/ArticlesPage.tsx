import { ArticleList } from 'entities/Article'
import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classnames'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Page } from 'widgets/Page/Page'
import {
  getArticlePageError,
  getArticlePageLoading,
  getArticlePageView
} from '../../model/selectors/articlesPageSelectors'
import { fetchNextDataArticlePage } from '../../model/service/fetchNextDataArticlePage/fetchNextDataArticlePage'
import { initedArticlesPage } from '../../model/service/initedArticlesPage/initedArticlesPage'
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import { ArticlesPageFilters } from '../../ui/ArticlesPageFilters/ArticlesPageFilters'
import cls from './ArticlesPage.module.scss'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducerList = {
  ArticlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const error = useSelector(getArticlePageError)
  const isLoading = useSelector(getArticlePageLoading)
  const view = useSelector(getArticlePageView)
  const [searchParams] = useSearchParams()

  useInitialEffect(() => dispatch(initedArticlesPage(searchParams)))

  const onLoadNextPartData = useCallback(() => {
    dispatch(fetchNextDataArticlePage())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPartData}
        className={classNames(cls.articlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
