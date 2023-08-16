import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()

  return <Page data-testId="MainPage">{t('Главная страница')}</Page>
}

export default MainPage
