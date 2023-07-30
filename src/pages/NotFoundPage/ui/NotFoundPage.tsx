import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { Page } from '@/widgets/Page'

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <Page
      className={classNames(cls.NotFoundPage, {}, [])}
      data-testId="NotFoundPage"
    >
      {t('Страница не найдена')}
    </Page>
  )
}

export default NotFoundPage
