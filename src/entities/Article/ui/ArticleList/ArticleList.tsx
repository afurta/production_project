import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeature } from '@/shared/lib/features'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { FC, HTMLAttributeAnchorTarget, memo } from 'react'
import { ArticleView } from '../../model/consts'
import { Article } from '../../model/types/article'
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  isLoading?: boolean
  articles: Article[]
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ))

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    isLoading,
    articles,
    view = ArticleView.GRID,
    target
  } = props

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [cls[view]])}>
        <Text size={TextSize.L} title={'Статей нет'} />
      </div>
    )
  }
  return (
    <ToggleFeature
      feature="isAppRedesigned"
      on={
        <HStack
          wrap="wrap"
          gap={16}
          className={classNames(cls.ArticleListRedesigned, {}, [])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeletons(view)}
        </HStack>
      }
      off={
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeletons(view)}
        </div>
      }
    />
  )
})
