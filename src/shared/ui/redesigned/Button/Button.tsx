import React, { ButtonHTMLAttributes } from 'react'
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
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    disabled,
    size = 'm',
    fullWidth,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.fullWidth]: fullWidth,
    [cls.disabled]: disabled
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
      {children}
    </button>
  )
}
