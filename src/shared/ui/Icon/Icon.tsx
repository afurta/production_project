import { classNames } from '@/shared/lib/classNames/classnames'
import cls from './Icon.module.scss'
import React from 'react'

interface IconProps {
  className?: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon = (props: IconProps) => {
  const { className, Icon, inverted } = props

  return (
    <Icon className={classNames(cls.Icon, { [cls.inverted]: inverted }, [className])} />
  )
}
