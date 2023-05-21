import { classNames } from 'shared/lib/classNames/classnames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  alt?: string
  src?: string
  size?: number
  className?: string
}

export const Avatar = (props: AvatarProps) => {
  const {
    alt,
    src,
    size,
    className
  } = props

  return (
    <img
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      src={src}
      alt={alt}
      className={classNames(cls.Avatar, {}, [className])}
    />
  )
}
