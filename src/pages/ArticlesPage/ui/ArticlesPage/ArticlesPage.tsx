import { memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect'
import { Page } from '@/widgets/Page'
import { fetchNextDataArticlePage } from '../../model/service/fetchNextDataArticlePage/fetchNextDataArticlePage'
import { initedArticlesPage } from '../../model/service/initedArticlesPage/initedArticlesPage'
import { articlesPageReducer } from '../../model/slice/articlesPageSlice'
import { ArticleInfiniteList } from '../../ui/ArticleInfiniteList/ArticleInfiniteList'
import { ArticlesPageFilters } from '../../ui/ArticlesPageFilters/ArticlesPageFilters'
import cls from './ArticlesPage.module.scss'

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

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPartData}
        className={classNames(cls.articlesPage, {}, [className])}
        data-testId='ArticlesPage'
      >
        <ArticlesPageFilters className={classNames(cls.articlesPageFilters)} />
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
