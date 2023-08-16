import { FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import cls from './ArticleListItem.module.scss'
import { ArticleView } from '../../model/consts'
import { toggleFeature } from '@/shared/lib/features'

interface ArticleListItemSkeleton {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeleton> = (props) => {
  const { className, view = ArticleView.GRID } = props

  const mainClass = toggleFeature({
    name: 'isAppRedesigned',
    on: () => cls.ArticleListItemRedesigned,
    off: () => cls.ArticleListItem
  })

  const Skeleton = toggleFeature({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated
  })
  const Card = toggleFeature({
    name: 'isAppRedesigned',
    on: () => CardRedesigned,
    off: () => CardDeprecated
  })

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
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
    <div className={classNames(mainClass, {}, [className, cls[view]])}>
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
