import { UserActions } from 'entities/User'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

  const dispath = useDispatch()

  const authData = useSelector(getUserAuthData)

  const { t } = useTranslation()

  const [isLoginModal, setIsLoginModal] = useState<boolean>(false)

  const onCloseLoginModal = useCallback(() => setIsLoginModal(false), [])
  const onOpenLoginModal = useCallback(() => setIsLoginModal(true), [])
  const onLogOut = useCallback(() => dispath(UserActions.logout()), [dispath])

  return (
    <div className={classNames(cls.navbar, {}, [className])} >
      <div className={cls.links}>
        {
          authData
            ? (
              <Button
                onClick={onLogOut}
                theme={ButtonTheme.CLEAR_INVERTED}
              >
                {t('Выйти')}
              </Button>
            )
            : (
              <Button
                onClick={onOpenLoginModal}
                theme={ButtonTheme.CLEAR_INVERTED}
              >
                {t('Войти')}
              </Button>
            )
        }
      </div>
      <LoginModal isOpen={!authData && isLoginModal} onClose={onCloseLoginModal} />
    </div >
  )

}
