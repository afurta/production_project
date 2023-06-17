import { ArticleList, ArticleViewsSelector } from 'entities/Article'
import { fetchNextDataArticlePage } from '../model/service/fetchNextDataArticlePage/fetchNextDataArticlePage'
import { initedArticlesPage } from '../model/service/initedArticlesPage/initedArticlesPage'
import { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classnames'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { Page } from 'shared/ui/Page/Page'
import { getArticlePageError, getArticlePageIsInited, getArticlePageLoading, getArticlePageView } from '../model/selectors/articlesPageSelectors'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice'
import cls from './ArticlesPage.module.scss'

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

  useInitialEffect(() => dispatch(initedArticlesPage()))

  const onLoadNextPartData = useCallback(() => {
    dispatch(fetchNextDataArticlePage())
  }, [dispatch])

  const onChangeView = useCallback((view) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPartData}
        className={classNames(cls.articlesPage, {}, [className])}
      >
        <ArticleViewsSelector view={view} onViewClick={onChangeView} />
        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
