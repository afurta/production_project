import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { useTranslation } from 'react-i18next'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../../ui/CommentCard/CommentCard'
import { ToggleFeature } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'

interface CommentListProps {
  className?: string
  data: Comment[]
  isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
  const { className, data, isLoading } = props
  const { t } = useTranslation()

  return (
    <VStack gap={16} max>
      {data.length ? (
        data.map((comment) => (
          <CommentCard key={comment.id} data={comment} isLoading={isLoading} />
        ))
      ) : (
        <ToggleFeature
          feature="isAppRedesigned"
          on={<Text title={t('Комментариев нет')} align={TextAlign.LEFT} />}
          off={
            <TextDeprecated
              title={t('Комментариев нет')}
              align={TextAlign.LEFT}
            />
          }
        />
      )}
    </VStack>
  )
}
