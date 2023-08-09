import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { Rating } from '@/entities/RatingCard'

const MainPage = () => {
  const { t } = useTranslation()

  return <Page data-testId="MainPage">{t('Главная страница')}</Page>
}

export default MainPage
