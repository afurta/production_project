import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './CommentCard.module.scss'
import { Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface CommentCardProps {
  className?: string
  data: Comment
  isLoading: boolean
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, data, isLoading } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
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
      </div>
    )
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={classNames(cls.userContainer)}>
        {data.user.avatar ? <Avatar className={classNames(cls.avatar)} size={30} src={data.user.avatar} /> : null}
        <Text title={data.user.userName} />
      </div>
      <Text
        text={data.text}
        className={classNames(cls.text)}
        align={TextAlign.LEFT}
      />
    </div>
  )
}
