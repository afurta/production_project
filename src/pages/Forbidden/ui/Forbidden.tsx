import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

interface ForbiddenProps {
  className?: string
}

const Forbidden = (props: ForbiddenProps) => {
  const { t } = useTranslation()

  return <Page data-testId="Forbidden">{t('У вас нет доступа')}</Page>
}

export default Forbidden
