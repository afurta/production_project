import React, {
  InputHTMLAttributes,
  ReactNode,
  memo,
  useEffect,
  useRef,
  useState
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>

interface InputProps extends HTMLInputProps {
  className?: string
  placeholder?: string
  value?: string | number
  type?: string
  onChange?: (value: string) => void
  autoFocus?: boolean
  readonly?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    placeholder,
    value,
    onChange,
    type = 'text',
    autoFocus,
    readonly,
    iconLeft,
    iconRight,
    ...othersProps
  } = props

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value)
  }

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      ref?.current?.focus()
    }
  }, [autoFocus])

  const mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.iconLeft]: Boolean(iconLeft),
    [cls.iconRight]: Boolean(iconRight)
  }

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      <div className={cls.iconLeft}>{iconLeft}</div>
      <input
        className={classNames(cls.Input, {}, [])}
        type={type}
        value={value}
        onChange={onChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        {...othersProps}
      />
      <div className={cls.iconRight}>{iconRight}</div>
    </div>
  )
})
