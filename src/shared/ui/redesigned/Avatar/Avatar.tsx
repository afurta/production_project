import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { AppImage } from '../AppImage'
import { ICONS } from '@/shared/assets'
import { CSSProperties, memo, useMemo } from 'react'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'

interface AvatarProps {
  alt?: string
  src?: string
  size?: number
  className?: string
}

export const Avatar = memo((props: AvatarProps) => {
  const { alt, src, size = 100, className } = props

  const errorFallback = <Icon Svg={ICONS.User} width={size} height={size} />
  const fallback = <Skeleton width={size} height={size} border="50%" />

  const styles = useMemo<CSSProperties>(
    () => ({
      width: `${size}px`,
      height: `${size}px`
    }),
    [size]
  )

  return (
    <AppImage
      style={styles}
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      className={classNames(cls.Avatar, {}, [className])}
    />
  )
})
