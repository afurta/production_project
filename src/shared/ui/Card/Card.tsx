import { FC, HTMLAttributes, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: CardTheme
}

export const Card: FC<CardProps> = (props) => {
  const { className, children, theme = CardTheme.NORMAL, ...othersProps } = props

  return (
    <div
      className={classNames(cls.card, {}, [cls[theme], className])}
      {...othersProps}
    >
      {children}
    </div>
  )
}
