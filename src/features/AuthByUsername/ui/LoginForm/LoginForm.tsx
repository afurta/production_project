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
import {
  DynamicModuleLoader,
  ReducerList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import cls from './LoginForm.module.scss'
import { ToggleFeature } from '@/shared/lib/features'
import { Text } from '@/shared/ui/redesigned/Text'
import { Input } from '@/shared/ui/redesigned/Input'
import { Button } from '@/shared/ui/redesigned/Button'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { useForceUpdate } from '@/shared/lib/render/forceUpdate'

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
  const forceUpdate = useForceUpdate()

  const setUserName = useCallback(
    (value: string) => {
      dispatch(AuthActions.setUsername(value))
    },
    [dispatch]
  )

  const setUserPassword = useCallback(
    (value: string) => {
      dispatch(AuthActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
      forceUpdate()
    }
  }, [dispatch, onSuccess, forceUpdate, username, password])

  return (
    <DynamicModuleLoader reducers={initialReducers} isRemoveAfterUnmount={true}>
      <ToggleFeature
        feature="isAppRedesigned"
        on={
          <VStack
            className={classNames(cls.LoginForm, {}, [className])}
            gap={16}
            align="end"
          >
            <HStack justify="center" max>
              <Text title={t('Форма авторизации')} />
              {error && <Text title="title" variant="error" />}
            </HStack>
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
              onClick={onLoginClick}
              disabled={isLoading}
              variant="outline"
            >
              {t('Войти')}
            </Button>
          </VStack>
        }
        off={
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t('Форма авторизации')} />
            {error && <TextDeprecated title="title" theme={TextTheme.ERROR} />}
            <VStack gap={16} align="start">
              <InputDeprecated
                placeholder={t('Введите username')}
                onChange={setUserName}
                value={username}
              />
              <InputDeprecated
                placeholder={t('Введите пароль')}
                onChange={setUserPassword}
                value={password}
              />
            </VStack>
            <ButtonDeprecated
              className={cls.sendBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              {t('Войти')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  )
})

export default LoginForm
