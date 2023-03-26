import { useTheme } from 'app/providers/ThemeProvider'
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import { Portal } from 'shared/ui/Portal/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
}
const MODAL_CLOSING_DELAY = 300

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props

  const { theme } = useTheme()

  const [isClosing, setIsClosing] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  const preventEventHandler = (event: React.MouseEvent) => event.stopPropagation()

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, MODAL_CLOSING_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }

  }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={classNames(cls.overlay, {}, [])} onClick={closeHandler}>
          <div className={classNames(cls.content, {}, [])} onClick={preventEventHandler}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum accusamus in, a magnam nobis hic consequatur, corporis illo nam eligendi saepe error voluptates doloribus, ipsum eaque mollitia iste magni.
          </div>
        </div>
      </div>
    </Portal>
  )
}
