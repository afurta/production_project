import { Skeleton } from '@/shared/ui/Skeleton'
import { ArticleRatingProps } from './ArticleRating'
import React, { Suspense } from 'react'

export const ArticleRatingLazy = React.lazy(() => import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense
      fallback={
        <Skeleton width={'100%'} height={'120px'} />
      }
    >
      <ArticleRatingLazy {...props} />
    </Suspense>
  )
}
