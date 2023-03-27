import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props

  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input placeholder={t('Введите username')} autoFocus />
      <Input placeholder={t('Введите пароль')} />
      <button>{t('Войти')}</button>
    </div>
  )
}
