import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/ClassNames/classNames'
import cls from './NotFoundPage.module.scss'

const NotFoundPage = () => {

  const { t } = useTranslation()

  return (
    <div className={classNames(cls.NotFoundPage, {}, [])}>{t('Страница не найдена')}</div>
  )
}

export default NotFoundPage
