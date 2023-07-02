import { classNames } from 'shared/lib/classNames/classnames'
import cls from './Overlay.module.scss'

interface OverlayProps {
  className?: string
  clickHandler: () => void
}

export const Overlay = (props: OverlayProps) => {
  const { className, clickHandler } = props

  return (
    <div className={classNames(cls.overlay, {}, [className])} onClick={clickHandler} />
  )
}
