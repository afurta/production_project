import { useTranslation } from 'react-i18next'

const AboutPage = () => {

  const { t } = useTranslation('about_us')

  return (
    <div>{t('О нас')}</div>
  )
}

export default AboutPage
