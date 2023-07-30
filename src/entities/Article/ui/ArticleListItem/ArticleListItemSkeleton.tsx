import { FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card'
import { Skeleton } from '@/shared/ui/Skeleton'
import cls from './ArticleListItem.module.scss'
import { ArticleView } from '../../model/consts'

interface ArticleListItemSkeleton {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeleton> = (props) => {
  const { className, view = ArticleView.GRID } = props

  if (view === ArticleView.LIST) {
    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={classNames(cls.header)}>
            <Skeleton
              width={30}
              height={30}
              border={'50%'}
              className={classNames(cls.avatar)}
            />
            <Skeleton
              width={150}
              height={30}
              className={classNames(cls.username)}
            />
            <Skeleton
              width={150}
              height={30}
              className={classNames(cls.date)}
            />
          </div>
          <Skeleton width={250} height={24} className={classNames(cls.title)} />
          <Skeleton height={200} className={classNames(cls.img)} />
          <div className={classNames(cls.footer)}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div
      className={classNames(cls.articleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={classNames(cls.card)}>
          <div className={classNames(cls.imageWrapper)}>
            <Skeleton width={200} height={200} />
          </div>
          <div className={classNames(cls.infoWrapper)}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={160} height={16} />
        </div>
      </Card>
    </div>
  )
}
