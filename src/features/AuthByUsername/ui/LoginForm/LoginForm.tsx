import { getAuthData } from '../../model/selectors/getAuthData/getAuthData'
import { loginByUserName } from '../../model/service/loginByUserName/loginByUserName'
import { AuthActions } from '../../model/slice/AuthSlice'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props

  const dispatch = useDispatch()

  const { t } = useTranslation()

  const { username, password, isLoading, error } = useSelector(getAuthData)

  const setUserName = useCallback((value: string) => {
    dispatch(AuthActions.setUsername(value))
  }, [dispatch])

  const setUserPassword = useCallback((value: string) => {
    dispatch(AuthActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text title='title' theme={TextTheme.ERROR} />}
      <Input
        placeholder={t('Введите username')}
        autoFocus
        onChange={setUserName}
        value={username}
      />
      <Input
        placeholder={t('Введите пароль')}
        onChange={setUserPassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >{t('Войти')}</Button>
    </div>
  )
})
