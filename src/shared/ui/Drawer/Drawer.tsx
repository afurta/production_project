import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import { Portal } from 'shared/ui/Portal/Portal'
import cls from './Drawer.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { Overlay } from 'shared/ui/Overlay/Overlay'

interface DrawerProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
}
const MODAL_CLOSING_DELAY = 300

export const Drawer = (props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props

  const [isClosing, setIsClosing] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

  const mods: Record<string, boolean | undefined> = {
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

  useEffect(() => {
    if (isOpen) setIsMounted(true)
  }, [isOpen])

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay clickHandler={closeHandler} />
        <div
          className={classNames(cls.content, {}, [])}
          onClick={preventEventHandler}
        >
          {children}
        </div>
      </div>
    </Portal>
  )
}
