import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationBtn } from '@/features/NotificationBtn'
import { getArticlesCreateRoute } from '@/shared/constants/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import cls from './Navbar.module.scss'
import { ToggleFeature } from '@/shared/lib/features'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()

  const authData = useSelector(getUserAuthData)

  const [isLoginModal, setIsLoginModal] = useState<boolean>(false)

  const onCloseLoginModal = useCallback(() => setIsLoginModal(false), [])
  const onOpenLoginModal = useCallback(() => setIsLoginModal(true), [])

  if (authData) {
    return (
      <ToggleFeature
        feature={'isAppRedesigned'}
        on={
          <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <div className={cls.links}>
              <div>
                <HStack gap={8} className={classNames(cls.controls)}>
                  <NotificationBtn />
                  <AvatarDropdown />
                </HStack>
              </div>
            </div>
          </header>
        }
        off={
          <header className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
              <Text
                title={'App'}
                align={TextAlign.LEFT}
                theme={TextTheme.INVERTED}
              />
              <AppLink
                className={classNames(cls.createNewArticle)}
                to={getArticlesCreateRoute()}
                theme={AppLinkTheme.SECONDARY}
              >
                {t('Создать новую статью')}
              </AppLink>
              <HStack gap={8} className={classNames(cls.controls)}>
                <NotificationBtn />
                <AvatarDropdown />
              </HStack>
            </div>
          </header>
        }
      />
    )
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          className={classNames(cls.navbarBtn)}
          onClick={onOpenLoginModal}
          theme={ButtonTheme.CLEAR_INVERTED}
        >
          {t('Войти')}
        </Button>
      </div>
      {isLoginModal && (
        <LoginModal
          isOpen={!authData && isLoginModal}
          onClose={onCloseLoginModal}
        />
      )}
    </header>
  )
})
