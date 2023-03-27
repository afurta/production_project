import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  const [isLoginModal, setIsLoginModal] = useState<boolean>(false)

  const onCloseLoginModal = useCallback(() => setIsLoginModal(false), [])
  const onOpenLoginModal = useCallback(() => setIsLoginModal(true), [])

  return (
    <div className={classNames(cls.navbar, {}, [className])} >
      <div className={cls.links}>
        <Button
          onClick={onOpenLoginModal}
          theme={ButtonTheme.CLEAR_INVERTED}
        >
          {t('Войти')}
        </Button>
      </div>
      <LoginModal isOpen={isLoginModal} onClose={onCloseLoginModal} />
    </div >
  )

}
