import { IMAGES } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/deprecated/Stack'
import cls from './AppLogo.module.scss'
import { memo } from 'react'

interface AppLogoProps {
  className?: string
  size?: number
}

export const AppLogo = memo((props: AppLogoProps) => {
  const { className, size = 50 } = props

  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <IMAGES.AppImage className={cls.appLogo} width={size} height={size} />
    </HStack>
  )
})
