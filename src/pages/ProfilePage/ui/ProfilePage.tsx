import { EditableProfilePage, EditableProfilePageHeader } from 'features/EditableProfilePage'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { VStack } from 'shared/ui/Stack'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page/Page'

const ProfilePage = () => {
  const { t } = useTranslation('profile')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <Text title={t('Статей нет')} align={TextAlign.LEFT} size={TextSize.L} />
  }

  return (
    <Page>
      <VStack gap={32}>
        <EditableProfilePageHeader />
        <EditableProfilePage id={id} />
      </VStack>
    </Page>
  )
}

export default ProfilePage
