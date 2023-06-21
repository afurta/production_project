import { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import cls from './Flex.module.scss'

type FlexJustify = 'center' | 'around' | 'between' | 'start' | 'end'
type FlexAlign = 'center' | 'around' | 'between' | 'start' | 'end'
type FlexDirection = 'column' | 'row' | 'reverse-column' | 'reverse-row'
type FlexGap = 4 | 8 | 16 | 32

const justifyClasses: Record<string, string> = {
  center: cls.justifyCenter,
  around: cls.justifyAround,
  between: cls.justifyBetween,
  start: cls.justifyStart,
  end: cls.justifyEnd
}

const alignClasses: Record<string, string> = {
  center: cls.alignCenter,
  around: cls.alignAround,
  between: cls.alignBetween,
  start: cls.alignStart,
  end: cls.alignEnd
}

const DirectionClasses: Record<string, string> = {
  row: cls.RowDirection,
  column: cls.ColumnDirection,
  reverseRow: cls.ReverseRowDirection,
  reverseColumn: cls.ReverseColumnDirection
}

export interface FlexProps {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  direction?: FlexDirection
  align?: FlexAlign
  gap?: FlexGap
  max?: boolean
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    direction = 'row',
    align = 'center',
    gap,
    max = false
  } = props

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    DirectionClasses[direction],
    gap && cls[`gap${gap}`],
  ]

  const mods: Record<string, boolean> = {
    [cls.max]: max
  }

  return (
    <div className={classNames(cls.flex, mods, [...classes])}>
      {children}
    </div>
  )
}
