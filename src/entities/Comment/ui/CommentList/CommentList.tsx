import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './CommentList.module.scss'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../../ui/CommentCard/CommentCard'
import { Text, TextAlign } from 'shared/ui/Text/Text'

interface CommentListProps {
  className?: string
  data: Comment[]
  isLoading: boolean
}

export const CommentList: FC<CommentListProps> = (props) => {
  const { className, data, isLoading } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {
        data.length
          ? data.map(comment => (
            <CommentCard
              key={comment.id}
              data={comment}
              isLoading={isLoading}
            />
          ))
          : <Text title={t(('Комментариев нет'))} align={TextAlign.LEFT} />
      }
    </div>
  )
}
