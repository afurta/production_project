import { EditableProfilePage } from '@/features/EditableProfilePage'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextAlign, TextSize } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
  const { t } = useTranslation('profile')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <Text title={t('Статей нет')} align={TextAlign.LEFT} size={TextSize.L} />
  }

  return (
    <Page data-testId='ProfilePage'>
      <VStack gap={32}>
        <EditableProfilePage id={id} />
      </VStack>
    </Page>
  )
}

export default ProfilePage
