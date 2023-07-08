import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { loginByUserName } from '../../model/service/loginByUserName/loginByUserName'
import { AuthActions } from '../../model/slice/AuthSlice'
import { AuthReducer } from '../../model/slice/AuthSlice'
import { getAuthUsername } from '../../model/selectors/getAuthUserName/getAuthUserName'
import { getAuthPassword } from '../../model/selectors/getAuthPassword/getAuthPassword'
import { getAuthIsLoading } from '../../model/selectors/getAuthIsLoading/getAuthIsLoading'
import { getAuthIsError } from '../../model/selectors/getAuthIsError/getAuthIsError'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Text, TextTheme } from '@/shared/ui/Text'
import { classNames } from '@/shared/lib/classNames/classnames'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducerList = {
  loginForm: AuthReducer
}

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props

  const dispatch = useAppDispatch()

  const { t } = useTranslation()

  const username = useSelector(getAuthUsername)
  const password = useSelector(getAuthPassword)
  const isLoading = useSelector(getAuthIsLoading)
  const error = useSelector(getAuthIsError)

  const setUserName = useCallback((value: string) => {
    dispatch(AuthActions.setUsername(value))
  }, [dispatch])

  const setUserPassword = useCallback((value: string) => {
    dispatch(AuthActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') onSuccess()
  }, [dispatch, username, password, onSuccess])

  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount={true}>
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
    </DynamicModuleLoader>
  )
})

export default LoginForm
