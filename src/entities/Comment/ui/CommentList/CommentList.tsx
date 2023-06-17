import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../../ui/CommentCard/CommentCard'

interface CommentListProps {
  className?: string
  data: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = (props) => {
  const { className, data, isLoading } = props
  const { t } = useTranslation()

  return (
    <div>
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
