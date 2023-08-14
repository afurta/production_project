import { FC, HTMLAttributes, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export type CardVariant = 'normal' | 'outlined' | 'light'
export type CardPaddings = 0 | 8 | 16 | 24
export type CardBorder = 'round' | 'normal'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  variant?: CardVariant
  max?: boolean
  padding?: CardPaddings
  border?: CardBorder
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
    variant = 'normal',
    max,
    padding = '8',
    border = 'normal',
    ...othersProps
  } = props

  const paddingClass = getCardPaddingsByProps[padding]

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        cls[variant],
        cls[border],
        className,
        cls[paddingClass]
      ])}
      {...othersProps}
    >
      {children}
    </div>
  )
}
