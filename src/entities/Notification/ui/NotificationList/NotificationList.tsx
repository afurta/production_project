import { NotificationItem } from '../NotificationItem/NotificationItem'
import { classNames } from '@/shared/lib/classNames/classNames'
import { UseArticleRecomendationsList } from '../../api/notificationList'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'
import { memo } from 'react'
import { toggleFeature } from '@/shared/lib/features'

interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props
  const { data, error, isLoading } = UseArticleRecomendationsList(null, {
    pollingInterval: 5000
  })

  const Skeleton = toggleFeature({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated
  })

  if (error) {
    return (
      <VStack className={classNames('', {}, [className])}>
        <Text title={'Ошибка загрузки уведомлений'} theme={TextTheme.ERROR} />
      </VStack>
    )
  }

  if (isLoading) {
    return (
      <VStack gap={8} className={classNames('', {}, [className])}>
        <Skeleton width={'100%'} border={'8px'} height={'80px'} />
        <Skeleton width={'100%'} border={'8px'} height={'80px'} />
        <Skeleton width={'100%'} border={'8px'} height={'80px'} />
        <Skeleton width={'100%'} border={'8px'} height={'80px'} />
        <Skeleton width={'100%'} border={'8px'} height={'80px'} />
        <Skeleton width={'100%'} border={'8px'} height={'80px'} />
      </VStack>
    )
  }
  return (
    <VStack gap={8} className={classNames('', {}, [className])}>
      {data?.map((item) => <NotificationItem data={item} key={item.id} />)}
    </VStack>
  )
})
