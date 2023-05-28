import { classNames } from 'shared/lib/classNames/classnames'
import cls from './Icon.module.scss'
import React from 'react'

interface IconProps {
  className?: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = (props: IconProps) => {
  const { className, Icon } = props

  return (
    <Icon className={classNames(cls.Icon, {}, [className])} />
  )
}
