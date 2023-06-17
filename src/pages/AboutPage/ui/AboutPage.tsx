import { useTranslation } from 'react-i18next'
import { Page } from 'shared/ui/Page/Page'

const AboutPage = () => {

  const { t } = useTranslation('about_us')

  return (
    <Page>{t('О нас')}</Page>
  )
}

export default AboutPage
