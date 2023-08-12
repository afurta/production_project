import { IMAGES } from '@/shared/assets'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui/redesigned/Stack'
import cls from './AppLogo.module.scss'

interface AppLogoProps {
  className?: string
}

/**
 * @deprecated
 */
export const AppLogo = (props: AppLogoProps) => {
  const { className } = props

  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <IMAGES.AppImage className={cls.appLogo} />
    </HStack>
  )
}
