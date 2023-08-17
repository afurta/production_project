import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal'
import { Overlay } from '@/shared/ui/redesigned/Overlay'
import { Portal } from '@/shared/ui/redesigned/Portal'
import { ReactNode } from 'react'
import cls from './Modal.module.scss'
import { toggleFeature } from '@/shared/lib/features'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose?: () => void
  lazy?: boolean
}
const MODAL_CLOSING_DELAY = 300

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
    <Portal root={document.getElementById('app') ?? document.body}>
      <div
        className={classNames(cls.modal, mods, [
          className,
          theme,
          toggleFeature({
            name: 'isAppRedesigned',
            on: () => cls.ModalNew,
            off: () => cls.ModalOld
          })
        ])}
      >
        <Overlay clickHandler={close} />
        <div className={classNames(cls.content, {}, [])}>{children}</div>
      </div>
    </Portal>
  )
}
