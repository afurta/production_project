import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Rating } from '@/entities/RatingCard'

const MainPage = () => {

  const { t } = useTranslation()

  return (
    <Page>
      {t('Главная страница')}
    </Page>
  )
}

export default MainPage
