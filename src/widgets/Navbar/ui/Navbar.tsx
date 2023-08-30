import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationBtn } from '@/features/NotificationBtn'
import { getArticlesCreateRoute } from '@/shared/constants/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink'
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import cls from './Navbar.module.scss'
import { ToggleFeature, toggleFeature } from '@/shared/lib/features'
import { Button } from '@/shared/ui/redesigned/Button'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()

  const authData = useSelector(getUserAuthData)

  const [isLoginModal, setIsLoginModal] = useState<boolean>(false)

  const onCloseLoginModal = useCallback(() => setIsLoginModal(false), [])
  const onOpenLoginModal = useCallback(() => setIsLoginModal(true), [])

  const mainClass = toggleFeature({
    name: 'isAppRedesigned',
    on: () => cls.NavbarRedesigned,
    off: () => cls.navbar
  })
  if (authData) {
    return (
      <ToggleFeature
        feature={'isAppRedesigned'}
        on={
          <header className={classNames(mainClass, {}, [className])}>
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
          <header className={classNames(mainClass, {}, [className])}>
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
    <header className={classNames(mainClass, {}, [className])}>
      <div className={cls.links}>
        <ToggleFeature
          feature="isAppRedesigned"
          on={
            <Button
              className={classNames(cls.navbarBtn)}
              onClick={onOpenLoginModal}
              variant="filled"
            >
              {t('Войти')}
            </Button>
          }
          off={
            <ButtonDeprecated
              className={classNames(cls.navbarBtn)}
              onClick={onOpenLoginModal}
              theme={ButtonTheme.CLEAR_INVERTED}
            >
              {t('Войти')}
            </ButtonDeprecated>
          }
        />
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
