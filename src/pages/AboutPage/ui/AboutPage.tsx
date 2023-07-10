import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const AboutPage = () => {

  const { t } = useTranslation('about_us')

  return (
    <Page data-testId='AboutPage'>
      {t('О нас')}
    </Page>
  )
}

export default AboutPage
