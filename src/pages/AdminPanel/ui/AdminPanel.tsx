import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

interface AdminPanelProps {
  className?: string
}

const AdminPanel = (props: AdminPanelProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page data-testId='AdminPanel'>
      {t('Админка')}
    </Page>
  )
}

export default AdminPanel
