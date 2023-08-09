import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal'
import { Overlay } from '@/shared/ui/deprecated/Overlay'
import { Portal } from '@/shared/ui/deprecated/Portal'
import { ReactNode } from 'react'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose?: () => void
  lazy?: boolean
}
const MODAL_CLOSING_DELAY = 300

/**
 * @deprecated
 */
export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props

  const { theme } = useTheme()
  const { close, isClosing, isMounted } = useModal({
    delay: MODAL_CLOSING_DELAY,
    isOpen,
    onClose,
    isLazy: lazy
  })

  const mods: Record<string, boolean | undefined> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  if (lazy && !isMounted) return null

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])}>
        <Overlay clickHandler={close} />
        <div className={classNames(cls.content, {}, [])}>{children}</div>
      </div>
    </Portal>
  )
}
