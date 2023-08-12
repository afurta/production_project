import { FC, HTMLAttributes, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export type CardVariant = 'normal' | 'outlined'
export type CardPaddings = 0 | 8 | 16 | 24

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: CardVariant
  max?: boolean
  padding?: CardPaddings
}

const getCardPaddingsByProps: Record<CardPaddings, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24'
}

export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    theme = 'normal',
    max,
    padding = '8',
    ...othersProps
  } = props

  const paddingClass = getCardPaddingsByProps[padding]

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        cls[theme],
        className,
        cls[paddingClass]
      ])}
      {...othersProps}
    >
      {children}
    </div>
  )
}
