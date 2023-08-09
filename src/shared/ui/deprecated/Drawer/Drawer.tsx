import { useTheme } from '@/app/providers/ThemeProvider'
import React, { ReactNode, memo, useCallback, useEffect } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal'
import { Overlay } from '@/shared/ui/deprecated/Overlay'
import { Portal } from '@/shared/ui/deprecated/Portal'
import cls from './Drawer.module.scss'
import {
  AnimationProvider,
  useAnimationLibs
} from '@/shared/lib/components/AnimationModuleLoader'

interface DrawerProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
}
const MODAL_CLOSING_DELAY = 300

const height = window.innerHeight - 100

/**
 * @deprecated
 */
export const DrawerContent = (props: DrawerProps) => {
  const { Spring, Gesture } = useAnimationLibs()

  const { className, children, isOpen, onClose } = props

  const { close, isClosing, isMounted } = useModal({
    delay: MODAL_CLOSING_DELAY,
    isOpen,
    onClose
  })

  const { theme } = useTheme()

  const mods: Record<string, boolean | undefined> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  const preventEventHandler = (event: React.MouseEvent) =>
    event.stopPropagation()

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  useEffect(() => {
    if (isOpen) openDrawer()
  })
  const closeDrawer = useCallback(
    (velocity = 0) => {
      api.start({
        y: height,
        immediate: false,
        config: { ...Spring.config.stiff, velocity },
        onResolve: onClose
      })
    },
    [api, onClose, Spring.config.stiff]
  )

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      offset: [, oy],
      cancel,
      canceled
    }) => {
      if (oy < -70) cancel()
      if (last) {
        oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close() : open()
      } else api.start({ y: oy, immediate: true })
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true
    }
  )

  if (!isOpen) return null

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, mods, [
          className,
          theme,
          'app_drawer'
        ])}
      >
        <Overlay clickHandler={closeDrawer} />
        <Spring.a.div
          onClick={preventEventHandler}
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  )
}

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs()

  if (!isLoaded) return null

  return <DrawerContent {...props} />
}

export const Drawer = memo((props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  )
})
