import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classnames'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import cls from './PageError.module.scss'
import { Page } from '@/widgets/Page'

const PageError = () => {

  const { t } = useTranslation()

  const _reloadPage = () => location.reload()

  return (
    <Page className={classNames(cls.NotFoundPage, {}, [])}>
      <div className={classNames(cls.modal, {}, [])}>
        <div className={classNames(cls.modal_header, {}, [])}>
          {t('Сервис временно недоступен')}
        </div>
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={_reloadPage}
        >
          {t('Обновить страницу')}
        </Button>
      </div>
    </Page>
  )
}

export default PageError
