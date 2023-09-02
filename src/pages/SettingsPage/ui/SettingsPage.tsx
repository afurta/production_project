import { UiDesignSwitcher } from '@/features/UiDesignSwitcher'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'

const SettingsPage = () => {
  const { t } = useTranslation('settings')

  return (
    <Page>
      <VStack gap={32} align="start">
        <Text title={t('Настройки пользователя')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  )
}
export default SettingsPage
