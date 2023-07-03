import { useTheme } from '@/app/providers/ThemeProvider'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classnames'
import { Overlay } from '@/shared/ui/Overlay/Overlay'
import { Portal } from '@/shared/ui/Portal/Portal'
import cls from './Modal.module.scss'
import { useModal } from '@/shared/lib/hooks/useModal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}
const MODAL_CLOSING_DELAY = 300

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy
  } = props

  const { theme } = useTheme()
  const { close, isClosing, isMounted } = useModal({ delay: MODAL_CLOSING_DELAY, isOpen, onClose, isLazy: lazy })

  const mods: Record<string, boolean | undefined> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  if (lazy && !isMounted) return null

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme])}>
        <Overlay clickHandler={close} />
        <div className={classNames(cls.content, {}, [])} >
          {children}
        </div>
      </div>
    </Portal>
  )
}
