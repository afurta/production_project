import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Rating } from '@/entities/Rating'

const MainPage = () => {

  const { t } = useTranslation()

  return (
    <Page>
      {t('Главная страница')}
      <Rating title='Как вам статья' feedbackTitle='feedbackTitle' hasFeedback={true} />
    </Page>
  )
}

export default MainPage
