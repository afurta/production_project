import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Overlay.module.scss'
import { memo } from 'react'

interface OverlayProps {
  className?: string
  clickHandler: () => void
}

/**
 * @deprecated
 */
export const Overlay = memo((props: OverlayProps) => {
  const { className, clickHandler } = props

  return (
    <div
      className={classNames(cls.overlay, {}, [className])}
      onClick={clickHandler}
    />
  )
})
