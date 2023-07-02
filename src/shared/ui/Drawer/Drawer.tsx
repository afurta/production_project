import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import { Portal } from 'shared/ui/Portal/Portal'
import cls from './Drawer.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { Overlay } from 'shared/ui/Overlay/Overlay'
import { useModal } from 'shared/lib/hooks/useModal'

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

  const { close, isClosing, isMounted } = useModal({ delay: MODAL_CLOSING_DELAY, isOpen, onClose })

  const { theme } = useTheme()

  const mods: Record<string, boolean | undefined> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  const preventEventHandler = (event: React.MouseEvent) => event.stopPropagation()


  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay clickHandler={close} />
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
