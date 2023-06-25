import { UserActions } from 'entities/User'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { LoginModal } from 'features/AuthByUsername'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { ICONS } from 'shared/assets'
import { RoutePath } from 'shared/config/routeConfig/RouterConfig'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {

  const dispath = useDispatch()

  const authData = useSelector(getUserAuthData)

  const { t } = useTranslation()

  const [isLoginModal, setIsLoginModal] = useState<boolean>(false)

  const onCloseLoginModal = useCallback(() => setIsLoginModal(false), [])
  const onOpenLoginModal = useCallback(() => setIsLoginModal(true), [])
  const onLogOut = useCallback(() => dispath(UserActions.logout()), [dispath])

  return (
    <header className={classNames(cls.navbar, {}, [className])} >
      <div className={cls.links}>
        {
          authData
            ? (
              <>
                <Text
                  title={'App'}
                  align={TextAlign.LEFT}
                  theme={TextTheme.INVERTED}
                />
                <AppLink
                  className={classNames(cls.createNewArticle)}
                  to={RoutePath.articles_create}
                  theme={AppLinkTheme.SECONDARY}
                >
                  {t('Создать новую статью')}
                </AppLink>
                <Dropdown
                  direction='bottom left'
                  className={classNames(cls.dropdown)}
                  control={<ICONS.User width='32' height='32' />}
                  items={[
                    { href: RoutePath.profile + authData.id, content: t('Профиль') },
                    { onClick: onLogOut, content: t('Выйти') }
                  ]}
                />
              </>
            )
            : (
              <Button
                className={classNames(cls.navbarBtn)}
                onClick={onOpenLoginModal}
                theme={ButtonTheme.CLEAR_INVERTED}
              >
                {t('Войти')}
              </Button>

            )
        }
      </div>
      {isLoginModal && <LoginModal isOpen={!authData && isLoginModal} onClose={onCloseLoginModal} />}
    </header >
  )

})
