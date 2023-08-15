import React, { ButtonHTMLAttributes, ReactNode, memo } from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export type ButtonVariant = 'clear' | 'outline' | 'filled'

export type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  fullWidth?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Button: React.FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    disabled,
    size = 'm',
    fullWidth,
    iconLeft,
    iconRight,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.fullWidth]: fullWidth,
    [cls.disabled]: disabled,
    [cls.withIcon]: Boolean(iconLeft) || Boolean(iconRight)
  }

  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[variant],
        cls[size]
      ])}
      {...otherProps}
      disabled={disabled}
    >
      <div className={cls.iconLeft}>{iconLeft}</div>
      {children}
      <div className={cls.iconRight}>{iconRight}</div>
    </button>
  )
})