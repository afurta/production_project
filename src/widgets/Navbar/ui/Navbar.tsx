import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationBtn } from '@/features/NotificationBtn'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RoutePath } from '@/shared/config/routeConfig/RouterConfig'
import { classNames } from '@/shared/lib/classNames/classnames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { HStack } from '@/shared/ui/Stack'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text'
import cls from './Navbar.module.scss'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { NotificationList } from '@/entities/Notification'
import { AnimationProvider } from '@/shared/lib/components/AnimationModuleLoader'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()

  const authData = useSelector(getUserAuthData)

  const [isLoginModal, setIsLoginModal] = useState<boolean>(false)

  const onCloseLoginModal = useCallback(() => setIsLoginModal(false), [])
  const onOpenLoginModal = useCallback(() => setIsLoginModal(true), [])



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
                <HStack gap={8} className={classNames(cls.controls)}>
                  <AnimationProvider>
                    <NotificationBtn />
                  </AnimationProvider>
                  <AvatarDropdown />
                </HStack>
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
