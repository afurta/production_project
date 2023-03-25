import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)

  const onToggleModal = useCallback(() => setIsAuthModal(prev => !prev), [])

  return (
    <div className={classNames(cls.navbar, {}, [className])} >
      <div className={cls.links}>
        <Button
          onClick={onToggleModal}
          theme={ButtonTheme.CLEAR_INVERTED}
        >
          {t('Войти')}
        </Button>
      </div>
      <Modal isOpen={isAuthModal} onClose={onToggleModal} />
    </div >
  )

}
