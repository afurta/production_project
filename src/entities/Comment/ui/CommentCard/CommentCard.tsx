import { getProfileRoute } from '@/shared/constants/router'
import { classNames } from '@/shared/lib/classNames/classnames'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Skeleton } from '@/shared/ui/Skeleton'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextAlign } from '@/shared/ui/Text'
import { Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
  className?: string
  data: Comment
  isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, data, isLoading } = props

  if (isLoading) {
    return (
      <VStack className={classNames(cls.commentCard, {}, [className])} gap={8}>
        <div className={classNames(cls.userContainer)}>
          <Skeleton
            width={30}
            height={30}
            border='50%'
            className={classNames(cls.AvatarSkeleton)}
          />
          <Skeleton width={100} height={30} />
        </div>
        <Skeleton
          width={'90%'}
          height={30}
          className={classNames(cls.TextSkeleton)}
        />
      </VStack>
    )
  }

  return (
    <VStack className={classNames(cls.commentCard, {}, [className])} gap={8}>
      <AppLink className={classNames(cls.userContainer)} to={getProfileRoute(data.user.id)}>
        {data.user.avatar ? <Avatar className={classNames(cls.avatar)} size={30} src={data.user.avatar} /> : null}
        <Text title={data.user.userName} />
      </AppLink>
      <Text
        text={data.text}
        className={classNames(cls.text)}
        align={TextAlign.LEFT}
      />
    </VStack>
  )
}
