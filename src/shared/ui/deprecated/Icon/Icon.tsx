import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
}

/**
 * @deprecated
 */
export const Icon = (props: IconProps) => {
  const { className, Icon, inverted, ...othersProps } = props

  return (
    <Icon
      className={classNames(cls.Icon, { [cls.inverted]: inverted }, [
        className
      ])}
      {...othersProps}
    />
  )
}
