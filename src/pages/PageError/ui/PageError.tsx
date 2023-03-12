import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

const PageError = () => {

  const { t } = useTranslation()

  const _reloadPage = () => location.reload()

  return (
    <div className={classNames(cls.NotFoundPage, {}, [])}>
      <div className={classNames(cls.modal, {}, [])}>
        <div className={classNames(cls.modal_header, {}, [])}>
          {t('Сервис временно недоступен')}
        </div>
        <Button
          theme={ThemeButton.CLEAR}
          onClick={_reloadPage}
        >
          {t('Обновить страницу')}
        </Button>
      </div>
    </div>
  )
}

export default PageError
