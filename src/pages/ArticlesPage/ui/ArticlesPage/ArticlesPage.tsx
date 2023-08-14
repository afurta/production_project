import { ArticlePageGreeting } from '@/features/ArticlePageGreeting'
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeature } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { Page } from '@/widgets/Page'
import { memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchNextDataArticlePage } from '../../model/service/fetchNextDataArticlePage/fetchNextDataArticlePage'
import { initedArticlesPage } from '../../model/service/initedArticlesPage/initedArticlesPage'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { ArticleInfiniteList } from '../../ui/ArticleInfiniteList/ArticleInfiniteList'
import { ArticlesPageFilters } from '../../ui/ArticlesPageFilters/ArticlesPageFilters'
import cls from './ArticlesPage.module.scss'
import { FiltersContainer } from '@/pages/ArticlesPage/ui/FiltersContainer/FiltersContainer'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducerList = {
  ArticlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()

  const [searchParams] = useSearchParams()

  useInitialEffect(() => dispatch(initedArticlesPage(searchParams)))

  const onLoadNextPartData = useCallback(() => {
    dispatch(fetchNextDataArticlePage())
  }, [dispatch])

  const content = (
    <ToggleFeature
      feature={'isAppRedesigned'}
      on={
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          content={
            <Page
              onScrollEnd={onLoadNextPartData}
              className={classNames(cls.articlesPageRedesigned, {}, [
                className
              ])}
              data-testId="ArticlesPage"
            >
              <ArticleInfiniteList />
              <ArticlePageGreeting />
            </Page>
          }
          right={<FiltersContainer />}
        />
      }
      off={
        <Page
          onScrollEnd={onLoadNextPartData}
          className={classNames(cls.articlesPage, {}, [className])}
          data-testId="ArticlesPage"
        >
          <ArticlesPageFilters
            className={classNames(cls.articlesPageFilters)}
          />
          <ArticleInfiniteList />
          <ArticlePageGreeting />
        </Page>
      }
    />
  )
  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
