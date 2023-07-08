import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign } from '@/shared/ui/Text'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../../ui/CommentCard/CommentCard'
import { VStack } from '@/shared/ui/Stack'

interface CommentListProps {
  className?: string
  data: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = (props) => {
  const { className, data, isLoading } = props
  const { t } = useTranslation()

  return (
    <VStack gap={16}>
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
    </VStack>
  )
}
